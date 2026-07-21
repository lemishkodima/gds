const MAX_BODY_BYTES = 12_000

function clean(value, maxLength) {
  return String(value ?? '')
    .replace(/\p{Cc}/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

function optionalLine(label, value) {
  return value ? `${label}: ${value}` : null
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Метод не підтримується.' })
  }

  const contentLength = Number(req.headers['content-length'] || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return res.status(413).json({ ok: false, message: 'Завеликий запит.' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ ok: false, message: 'Некоректні дані.' })
    }
  }

  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, message: 'Некоректні дані.' })
  }

  // Honeypot: звичайний відвідувач цього поля не бачить.
  if (clean(body.website, 120)) {
    return res.status(200).json({ ok: true })
  }

  const name = clean(body.name, 80)
  const phone = clean(body.phone, 40)
  const service = clean(body.service, 120)
  const comment = clean(body.comment, 700)
  const page = clean(body.page, 300)
  const source = clean(body.source, 160)

  if (name.length < 2) {
    return res.status(400).json({ ok: false, field: 'name', message: 'Вкажіть, будь ласка, ваше ім’я.' })
  }

  if (!isValidPhone(phone)) {
    return res.status(400).json({ ok: false, field: 'phone', message: 'Перевірте номер телефону.' })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const threadId = process.env.TELEGRAM_MESSAGE_THREAD_ID

  if (!token || !chatId) {
    console.error('Telegram environment variables are not configured')
    return res.status(503).json({ ok: false, message: 'Форма тимчасово недоступна. Зателефонуйте нам, будь ласка.' })
  }

  const submittedAt = new Intl.DateTimeFormat('uk-UA', {
    timeZone: 'Europe/Kyiv',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date())

  const text = [
    '🦷 Нова заявка — GDC Implants',
    '',
    `Ім’я: ${name}`,
    `Телефон: ${phone}`,
    optionalLine('Послуга', service),
    optionalLine('Коментар', comment),
    '',
    optionalLine('Джерело', source),
    optionalLine('Сторінка', page),
    `Час: ${submittedAt}`,
  ].filter(Boolean).join('\n')

  const telegramPayload = {
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
  }

  if (threadId) telegramPayload.message_thread_id = Number(threadId)

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(telegramPayload),
      signal: AbortSignal.timeout(8_000),
    })

    const telegramResult = await telegramResponse.json().catch(() => null)
    if (!telegramResponse.ok || !telegramResult?.ok) {
      console.error('Telegram API rejected the request', telegramResponse.status)
      return res.status(502).json({ ok: false, message: 'Не вдалося відправити заявку. Спробуйте ще раз або зателефонуйте нам.' })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Telegram request failed', error instanceof Error ? error.message : 'Unknown error')
    return res.status(502).json({ ok: false, message: 'Не вдалося відправити заявку. Спробуйте ще раз або зателефонуйте нам.' })
  }
}
