import { createElement, useEffect, useState } from 'react'
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right.js'
import CalendarCheck from 'lucide-react/dist/esm/icons/calendar-check.js'
import Check from 'lucide-react/dist/esm/icons/check.js'
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down.js'
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left.js'
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right.js'
import CircleDollarSign from 'lucide-react/dist/esm/icons/circle-dollar-sign.js'
import Clock3 from 'lucide-react/dist/esm/icons/clock-3.js'
import Expand from 'lucide-react/dist/esm/icons/expand.js'
import HeartHandshake from 'lucide-react/dist/esm/icons/heart-handshake.js'
import Instagram from 'lucide-react/dist/esm/icons/instagram.js'
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js'
import Menu from 'lucide-react/dist/esm/icons/menu.js'
import Phone from 'lucide-react/dist/esm/icons/phone.js'
import ScanLine from 'lucide-react/dist/esm/icons/scan-line.js'
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check.js'
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.js'
import Target from 'lucide-react/dist/esm/icons/target.js'
import WalletCards from 'lucide-react/dist/esm/icons/wallet-cards.js'
import X from 'lucide-react/dist/esm/icons/x.js'

const PHONE_DISPLAY = '068 100 60 20'
const PHONE_HREF = '+380681006020'
const INSTAGRAM_URL = 'https://www.instagram.com/gdcimplants.boguslav/'

const navItems = [
  ['Переваги', '#benefits'],
  ['Рішення', '#services'],
  ['Етапи', '#how'],
  ['Лікар', '#doctor'],
  ['Результати', '#results'],
  ['Гарантія', '#guarantee'],
]

const benefits = [
  {
    icon: ScanLine,
    title: 'Бачите повну картину',
    text: '3D-знімок показує стан кістки, нервів і пазух. Планування починається з точних даних.',
  },
  {
    icon: Target,
    title: 'Цифрова точність',
    text: 'Сканування, 3D-планування та навігаційні шаблони допомагають працювати передбачувано.',
  },
  {
    icon: Sparkles,
    title: 'Незнімні зуби',
    text: 'Від одного імпланта до повного відновлення зубного ряду за протоколами All-on-4/6.',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантія на результат',
    text: '5 років на постійні конструкції та до 10 років на імплантацію за умовами клініки.',
  },
]

const services = [
  {
    number: '01',
    title: 'Імплантація одного чи кількох зубів',
    text: 'Повертаємо зуб так, щоб ви про нього забули. Виглядає й жує як власний — служить десятиліттями.',
    cta: 'Записатися',
  },
  {
    number: '02',
    title: 'Незнімні зуби за короткий строк (All-on-4 / All-on-6)',
    text: 'Якщо зубів немає або майже немає — фіксовані зуби на 4–6 імплантах. Ви виходите з тимчасовими зубами й забуваєте про знімний протез.',
    cta: 'Записатися',
    featured: true,
  },
  {
    number: '03',
    title: 'Протезування та коронки',
    text: 'Повертаємо форму й естетику усмішки. Коронка сідає точно під ваш прикус і виглядає природно.',
    cta: 'Записатися',
  },
  {
    number: '04',
    title: '3D-діагностика (КТ)',
    text: "Можна прийти просто зробити точний об'ємний знімок — для власного плану лікування або за направленням від іншого лікаря. Ми відкриті до співпраці з колегами.",
    cta: 'Записатися на КТ',
  },
  {
    number: '05',
    title: 'Гігієна та ортодонтія',
    text: 'Професійна гігієна й підготовка до імплантації, а також ортодонтичне вирівнювання прикусу — усе в межах однієї клініки, узгоджено з вашим планом лікування.',
    cta: 'Записатися',
  },
  {
    number: '06',
    title: 'Лікування зубів',
    text: 'Карієс, пульпіт, видалення — швидко і без болю. Приймаємо і як самостійну послугу, і як підготовку до протезування чи імплантації.',
    cta: 'Записатися',
  },
]

const journey = [
  ['Заявка', 'Залишаєте номер або телефонуєте. Адміністратор уточнює запит і підбирає час.'],
  ['3D КТ та огляд', 'Отримуємо точну картину, оцінюємо кістку, прикус і можливі варіанти лікування.'],
  ['План і кошторис', 'Пояснюємо етапи, строки та повну вартість до початку лікування.'],
  ['Цифрове планування', 'Моделюємо положення імплантів і, за показами, створюємо навігаційний шаблон.'],
  ['Лікування', 'Проводимо хірургічний та ортопедичний етапи за погодженим планом.'],
  ['Контроль і гарантія', 'Перевіряємо результат, прикус і залишаємося на зв’язку після лікування.'],
]

const solutions = [
  {
    image: '/images/diagnostics.webp',
    tag: 'Діагностика',
    title: '3D КТ без поїздки в Київ',
    text: 'Знімок робимо на місці й одразу використовуємо для планування.',
  },
  {
    image: '/images/consultation.webp',
    tag: 'Планування',
    title: 'Рішення зрозумілою мовою',
    text: 'Показуємо варіанти, строки та кошторис до початку лікування.',
  },
  {
    image: '/images/treatment.webp',
    tag: 'Лікування',
    title: 'Повний цикл в одному центрі',
    text: 'Від діагностики та хірургії до коронки й контрольного огляду.',
  },
]

const resultCases = [
  {
    title: 'Протезування на імплантах',
    text: 'Відновлення жувальної функції та цілісності зубного ряду.',
    images: [1, 2],
  },
  {
    title: 'Встановлення цирконієвих коронок',
    text: 'Відновлення анатомічної форми й природного відтінку зубів.',
    images: [3, 4, 5],
  },
  {
    title: 'Керамічні вініри верхньої щелепи',
    text: 'Гармонізація форми, кольору та пропорцій верхніх зубів.',
    images: [6, 7, 8],
  },
  {
    title: 'Імплантація',
    text: 'Відновлення відсутнього зуба з опорою на імплант.',
    images: [9, 10],
  },
  {
    title: 'Імплантація та відновлення зубного ряду',
    text: 'Комплексний хірургічний та ортопедичний етап лікування.',
    images: [11, 13, 14, 15, 16, 17],
  },
  {
    title: 'Тотальна реабілітація верхньої щелепи на 4-х імплантатах з негайним навантаженням',
    text: 'Фіксована конструкція одразу після хірургічного етапу.',
    images: [18, 19, 20, 21, 22],
  },
  {
    title: 'Тотальна реабілітація верхньої щелепи',
    text: 'Комплексне відновлення функції та естетики верхнього зубного ряду.',
    images: [23, 24, 25, 26, 27, 28],
  },
]

const faqs = [
  {
    q: 'Навіщо потрібне 3D КТ перед імплантацією?',
    a: 'КТ показує об’єм і щільність кістки, положення нервів та пазух. На основі цих даних лікар визначає безпечне положення імпланта й прогнозує лікування.',
  },
  {
    q: 'Чи можна встановити імплант одразу після видалення зуба?',
    a: 'Так, одномоментна імплантація можлива, якщо немає гострого запалення та достатньо кісткової тканини. Остаточне рішення лікар приймає після огляду й 3D-діагностики.',
  },
  {
    q: 'Коли можна отримати тимчасовий зуб?',
    a: 'За достатньої первинної стабільності імпланта тимчасову коронку або фіксований протез можна встановити в той самий день або в найближчі 72 години. Це залежить від клінічної ситуації.',
  },
  {
    q: 'Скільки триває лікування?',
    a: 'Класичний хірургічний етап займає один візит, а постійне протезування зазвичай проводять після приживлення імпланта через 3–6 місяців. За протоколами негайного навантаження тимчасові зуби встановлюють раніше.',
  },
  {
    q: 'Яка гарантія?',
    a: 'Каталог центру передбачає 5 років гарантії на постійні ортопедичні конструкції та до 10 років на імплантацію. Конкретні умови лікар фіксує у вашому плані лікування.',
  },
  {
    q: 'Чи можна прийти лише на КТ?',
    a: 'Так. Можна зробити 3D-знімок за направленням вашого стоматолога. Під час запису скажіть адміністратору, що вам потрібна лише діагностика.',
  },
  {
    q: 'Чи можна прийти просто вилікувати зуб?',
    a: 'Так. У центрі лікуємо карієс і пульпіт, а також проводимо видалення зубів. Можна звернутися як по окрему послугу або пройти лікування перед протезуванням чи імплантацією.',
  },
  {
    q: 'Скільки коштує лікування карієсу?',
    a: 'Вартість залежить від глибини ураження, кількості пошкоджених поверхонь і необхідного обсягу лікування. Після огляду лікар пояснить план і погодить точну вартість до початку процедури.',
  },
]

function Logo({ light = false, href = '#top' }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href={href} aria-label="GDC Implants — на початок сторінки">
      <img src="/logo.svg" alt="GDC Implants" />
    </a>
  )
}

function SectionHeading({ eyebrow, title, text, centered = false, light = false }) {
  return (
    <div data-reveal="up" className={`section-heading ${centered ? 'section-heading--centered' : ''} ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', handleKey)
    document.body.classList.toggle('menu-open', open)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'site-header--solid' : ''}`}>
      <div className="container nav-wrap">
        <Logo light={!scrolled && !open} />
        <nav className="desktop-nav" aria-label="Основна навігація">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${PHONE_HREF}`}><Phone size={16} />{PHONE_DISPLAY}</a>
          <a className="button button--primary button--small" href="#contact">Записатися</a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} id="mobile-menu">
        <nav aria-label="Мобільна навігація">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={17} /></a>)}
          <a href={`tel:${PHONE_HREF}`} onClick={() => setOpen(false)}><Phone size={17} />{PHONE_DISPLAY}</a>
          <a className="button button--primary" href="#contact" onClick={() => setOpen(false)}>Записатися на консультацію</a>
        </nav>
      </div>
    </header>
  )
}

function LeadForm() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('loading')
    setMessage('')

    const search = new URLSearchParams(window.location.search)
    const source = ['utm_source', 'utm_medium', 'utm_campaign']
      .map((key) => search.get(key))
      .filter(Boolean)
      .join(' / ') || document.referrer || 'Прямий перехід'

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          website: data.get('website'),
          page: window.location.href,
          source,
        }),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.ok) throw new Error(result.message || 'Не вдалося відправити заявку.')

      form.reset()

      let redirected = false
      const openSuccessPage = () => {
        if (redirected) return
        redirected = true
        window.location.assign('/success')
      }

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'lead_submit',
        form_name: 'consultation',
        eventCallback: openSuccessPage,
        eventTimeout: 900,
      })
      window.setTimeout(openSuccessPage, 1_000)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Сталася помилка. Спробуйте ще раз.')
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="lead-form__head">
        <span>Консультація</span>
        <h3>Залиште контакти</h3>
        <p>Залиште контакти — адміністратор передзвонить і відповість на організаційні питання.</p>
      </div>
      <div className="form-field">
        <label htmlFor="lead-name">Ваше ім’я</label>
        <input id="lead-name" name="name" type="text" autoComplete="name" placeholder="Як до вас звертатися" minLength="2" maxLength="80" required />
      </div>
      <div className="form-field">
        <label htmlFor="lead-phone">Телефон</label>
        <input id="lead-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+38 (0__) ___ __ __" pattern="[0-9+() –-]{10,24}" required />
      </div>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="lead-website">Ваш сайт</label>
        <input id="lead-website" name="website" type="text" tabIndex="-1" autoComplete="off" />
      </div>
      {message && <p className="form-error" role="alert">{message}</p>}
      <button className="button button--primary button--wide" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Надсилаємо…' : 'Передзвоніть мені'}
        {status !== 'loading' && <ArrowRight size={18} />}
      </button>
      <p className="form-note"><ShieldCheck size={15} /> Дані надходять безпосередньо адміністратору центру.</p>
    </form>
  )
}

function SuccessPage() {
  useEffect(() => {
    const previousTitle = document.title
    const previousRobots = document.querySelector('meta[name="robots"]')
    const robots = previousRobots || document.createElement('meta')
    const previousRobotsContent = previousRobots?.getAttribute('content')

    document.title = 'Дякуємо за звернення | GDC Implants'
    document.body.classList.add('success-view')
    robots.setAttribute('name', 'robots')
    robots.setAttribute('content', 'noindex, nofollow')
    if (!previousRobots) document.head.appendChild(robots)

    return () => {
      document.title = previousTitle
      document.body.classList.remove('success-view')
      if (previousRobots) {
        if (previousRobotsContent) previousRobots.setAttribute('content', previousRobotsContent)
        else previousRobots.removeAttribute('content')
      } else {
        robots.remove()
      }
    }
  }, [])

  return (
    <main className="success-page" id="top">
      <img className="success-page__image" src="/images/hero.webp" alt="" />
      <div className="success-page__shade" />
      <div className="container success-page__inner">
        <Logo light href="/" />
        <section className="success-page__card" aria-labelledby="success-title">
          <span className="success-page__icon"><Check /></span>
          <span className="eyebrow">Заявку надіслано</span>
          <h1 id="success-title">Дякуємо за звернення</h1>
          <p>Ми отримали ваші контакти. Адміністратор зателефонує найближчим часом, щоб уточнити деталі та запропонувати зручний час.</p>
          <div className="success-page__actions">
            <a className="button button--primary" href="/">На головну <ArrowRight size={18} /></a>
            <a className="button button--ghost" href={`tel:${PHONE_HREF}`}><Phone size={18} /> {PHONE_DISPLAY}</a>
          </div>
        </section>
      </div>
    </main>
  )
}

function ResultCard({ item, caseIndex, onOpen }) {
  const [active, setActive] = useState(0)
  const imageNumber = item.images[active]

  function showRelativeImage(direction) {
    setActive((current) => (current + direction + item.images.length) % item.images.length)
  }

  return (
    <article className="result-card">
      <div className="result-card__media">
        <button
          className="result-card__open"
          type="button"
          onClick={() => onOpen(caseIndex, active)}
          aria-label={`Збільшити фото кейсу «${item.title}»`}
        >
          <img
            src={`/images/result/${imageNumber}.jpg`}
            alt={`Клінічний результат: ${item.title}, фото ${active + 1} з ${item.images.length}`}
            loading="lazy"
          />
          <span className="result-card__expand"><Expand /></span>
        </button>
        <div className="result-card__labels" aria-hidden="true">
          <span>До</span>
          <span>Після</span>
        </div>
        <button
          className="result-card__arrow result-card__arrow--prev"
          type="button"
          onClick={() => showRelativeImage(-1)}
          aria-label={`Попереднє фото кейсу «${item.title}»`}
        >
          <ChevronLeft />
        </button>
        <button
          className="result-card__arrow result-card__arrow--next"
          type="button"
          onClick={() => showRelativeImage(1)}
          aria-label={`Наступне фото кейсу «${item.title}»`}
        >
          <ChevronRight />
        </button>
        <span className="result-card__counter">{active + 1} / {item.images.length}</span>
      </div>
      <div className="result-card__body">
        <span>Кейс {String(caseIndex + 1).padStart(2, '0')}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="result-card__dots" aria-label="Фото кейсу">
          {item.images.map((number, index) => (
            <button
              className={index === active ? 'is-active' : ''}
              type="button"
              key={number}
              onClick={() => setActive(index)}
              aria-label={`Показати фото ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

function ResultsGallery() {
  const [preview, setPreview] = useState(null)
  const [caseStart, setCaseStart] = useState(0)
  const [caseDirection, setCaseDirection] = useState('next')
  const [visibleCases, setVisibleCases] = useState(() => {
    if (window.innerWidth <= 600) return 1
    if (window.innerWidth <= 1080) return 2
    return 3
  })

  useEffect(() => {
    const updateVisibleCases = () => {
      if (window.innerWidth <= 600) setVisibleCases(1)
      else if (window.innerWidth <= 1080) setVisibleCases(2)
      else setVisibleCases(3)
    }

    window.addEventListener('resize', updateVisibleCases)
    return () => window.removeEventListener('resize', updateVisibleCases)
  }, [])

  useEffect(() => {
    if (!preview) return undefined

    const handleKey = (event) => {
      if (event.key === 'Escape') setPreview(null)
      if (event.key === 'ArrowLeft') {
        setPreview((current) => {
          const images = resultCases[current.caseIndex].images
          return { ...current, photoIndex: (current.photoIndex - 1 + images.length) % images.length }
        })
      }
      if (event.key === 'ArrowRight') {
        setPreview((current) => {
          const images = resultCases[current.caseIndex].images
          return { ...current, photoIndex: (current.photoIndex + 1) % images.length }
        })
      }
    }

    document.body.classList.add('results-lightbox-open')
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('results-lightbox-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [preview])

  function movePreview(direction) {
    setPreview((current) => {
      const images = resultCases[current.caseIndex].images
      return { ...current, photoIndex: (current.photoIndex + direction + images.length) % images.length }
    })
  }

  function moveCases(direction) {
    setCaseDirection(direction > 0 ? 'next' : 'prev')
    setCaseStart((current) => (current + direction + resultCases.length) % resultCases.length)
  }

  function selectCase(index) {
    setCaseDirection(index >= caseStart ? 'next' : 'prev')
    setCaseStart(index)
  }

  const previewCase = preview ? resultCases[preview.caseIndex] : null
  const previewImage = previewCase ? previewCase.images[preview.photoIndex] : null
  const visibleCaseIndexes = Array.from(
    { length: visibleCases },
    (_, index) => (caseStart + index) % resultCases.length,
  )

  return (
    <>
      <div className="results-carousel" data-reveal="up">
        <div className="results-carousel__viewport">
          <div
            className={`results-grid results-grid--${caseDirection}`}
            key={`${caseStart}-${visibleCases}`}
          >
            {visibleCaseIndexes.map((caseIndex) => {
              const item = resultCases[caseIndex]
              return (
                <ResultCard
                  item={item}
                  caseIndex={caseIndex}
                  key={`${item.title}-${caseIndex}`}
                  onOpen={(selectedCaseIndex, photoIndex) => setPreview({ caseIndex: selectedCaseIndex, photoIndex })}
                />
              )
            })}
          </div>
        </div>
        <div className="results-carousel__controls">
          <button type="button" onClick={() => moveCases(-1)} aria-label="Попередні кейси">
            <ChevronLeft />
          </button>
          <div className="results-carousel__dots" aria-label="Навігація між кейсами">
            {resultCases.map((item, index) => (
              <button
                className={index === caseStart ? 'is-active' : ''}
                type="button"
                key={item.title}
                onClick={() => selectCase(index)}
                aria-label={`Показати кейс ${index + 1}: ${item.title}`}
                aria-current={index === caseStart ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={() => moveCases(1)} aria-label="Наступні кейси">
            <ChevronRight />
          </button>
        </div>
      </div>

      {preview && (
        <div
          className="results-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Фото кейсу «${previewCase.title}»`}
          onMouseDown={(event) => event.target === event.currentTarget && setPreview(null)}
        >
          <button className="results-lightbox__close" type="button" onClick={() => setPreview(null)} aria-label="Закрити перегляд">
            <X />
          </button>
          <div className="results-lightbox__stage">
            <img src={`/images/result/${previewImage}.jpg`} alt={`${previewCase.title}, збільшене фото`} />
            <button className="results-lightbox__arrow results-lightbox__arrow--prev" type="button" onClick={() => movePreview(-1)} aria-label="Попереднє фото">
              <ChevronLeft />
            </button>
            <button className="results-lightbox__arrow results-lightbox__arrow--next" type="button" onClick={() => movePreview(1)} aria-label="Наступне фото">
              <ChevronRight />
            </button>
          </div>
          <div className="results-lightbox__caption">
            <div><span>Кейс {String(preview.caseIndex + 1).padStart(2, '0')}</span><strong>{previewCase.title}</strong></div>
            <span>{preview.photoIndex + 1} / {previewCase.images.length}</span>
          </div>
        </div>
      )}
    </>
  )
}

function FAQ() {
  const [active, setActive] = useState(0)
  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const open = active === index
        return (
          <div data-reveal="up" style={{ '--reveal-delay': `${index * 55}ms` }} className={`faq-item ${open ? 'faq-item--open' : ''}`} key={item.q}>
            <button type="button" aria-expanded={open} onClick={() => setActive(open ? -1 : index)}>
              <span>{item.q}</span><ChevronDown />
            </button>
            <div className="faq-answer" aria-hidden={!open}><p>{item.a}</p></div>
          </div>
        )
      })}
    </div>
  )
}

function useRevealAnimations() {
  useEffect(() => {
    const elements = [...document.querySelectorAll('[data-reveal]')]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function App() {
  useRevealAnimations()

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  if (pathname === '/success') return <SuccessPage />

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top">
          <img className="hero__image" src="/images/hero.webp" alt="Команда GDC Implants у кабінеті центру" fetchPriority="high" />
          <div className="hero__shade" />
          <div className="container hero__content">
            <div className="hero__inner">
              <div className="hero__tag"><MapPin size={16} /> Богуслав · 3D-томограф у центрі</div>
              <h1>
                <span className="hero__line">Нові зуби, які</span>
                <span className="hero__line"><span className="hero__accent">не соромно показати</span></span>
                <span className="hero__line">— без поїздок у Київ</span>
              </h1>
              <p>Цифрова діагностика, точне планування та сучасні протоколи імплантації — в одному центрі поруч із домом.</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">Записатися на консультацію <ArrowRight size={18} /></a>
                <a className="button button--ghost" href="#services">Переглянути рішення</a>
              </div>
              <div className="hero__metrics">
                <div><strong>70<span> км</span></strong><small>до найближчого альтернативного 3D-томографа</small></div>
                <div><strong>3D</strong><small>знімок і цифрове планування на місці</small></div>
                <div><strong>1<span> центр</span></strong><small>від первинного огляду до постійних зубів</small></div>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip" aria-label="Ключові переваги">
          <div className="container trust-strip__inner">
            <span><ScanLine />3D КТ на місці</span>
            <span><Target />Цифрове планування</span>
            <span><ShieldCheck />Гарантія на роботи</span>
            <span><WalletCards />Поетапна оплата</span>
          </div>
        </div>

        <section className="section" id="benefits">
          <div className="container">
            <SectionHeading eyebrow="Чому GDC" title="Ви отримуєте результат, а не набір процедур" text="Кожен етап підпорядкований одній меті — повернути комфорт, функцію та впевненість в усмішці." />
            <div className="benefit-grid">
              {benefits.map((benefit, index) => (
                <article data-reveal="up" style={{ '--reveal-delay': `${index * 75}ms` }} className="benefit-card" key={benefit.title}>
                  <span className="benefit-card__number">0{index + 1}</span>
                  {createElement(benefit.icon)}
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft pain-section">
          <div className="container pain-grid">
            <div data-reveal="left">
              <SectionHeading eyebrow="Знайома ситуація" title="Можливо, ви давно відкладаєте рішення" />
              <ul className="pain-list">
                <li>Болить зуб, і незрозуміло — лікувати чи видаляти</li>
                <li>Втратили зуб і не знаєте, з чого почати</li>
                <li>Втомилися від знімного протеза та обмежень у їжі</li>
                <li>Потрібне КТ, але не хочеться їхати в інше місто</li>
                <li>Боїтеся прихованих витрат і незрозумілих процедур</li>
              </ul>
            </div>
            <div className="pain-card" data-reveal="right">
              <HeartHandshake />
              <h3>Вам не потрібно розбиратися в цьому самостійно</h3>
              <p>На консультації лікар оцінить ситуацію, покаже дані 3D-знімка та пояснить можливі варіанти. Рішення про лікування залишається за вами.</p>
              <a className="button button--primary" href="#contact">Отримати консультацію</a>
            </div>
          </div>
        </section>

        <section className="section section--white" id="services">
          <div className="container">
            <SectionHeading title="Що ми повертаємо людям" text="Не «послуги», а конкретні результати: можливість жувати, усміхатися й не соромитися рота." />
            <div className="service-list">
              {services.map((service, index) => (
                <article data-reveal="up" style={{ '--reveal-delay': `${index * 60}ms` }} className={`service-row ${service.featured ? 'service-row--featured' : ''}`} key={service.number}>
                  <span className="service-row__number">{service.number}</span>
                  <div>
                    {service.featured && <span className="pill">Найпопулярніше</span>}
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <a className="button button--outline service-row__cta" href="#contact" aria-label={`${service.cta}: ${service.title}`}>{service.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="how">
          <div className="container process-grid">
            <div className="process-intro">
              <SectionHeading eyebrow="Етапи" title="Зрозумілий шлях без сюрпризів" text="Ви завжди знаєте, що відбувається зараз, який наступний крок і скільки він коштує." light />
              <img data-reveal="scale" src="/images/ct-scan.webp" alt="3D-томограф GDC Implants" loading="lazy" />
            </div>
            <div className="timeline">
              {journey.map(([title, text], index) => (
                <div data-reveal="right" style={{ '--reveal-delay': `${index * 55}ms` }} className="timeline-item" key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="doctor">
          <div className="container doctor-grid">
            <div className="doctor-photo" data-reveal="left">
              <img src="/images/doctor.webp" alt="Грудненко Юрій Петрович, хірург-стоматолог GDC Implants" loading="lazy" />
              <div><span>Хірург-стоматолог</span><strong>Грудненко Юрій Петрович</strong></div>
            </div>
            <div className="doctor-copy" data-reveal="right">
              <SectionHeading eyebrow="Хто вас лікує" title="Лікар веде ваш випадок від діагностики до результату" />
              <p>Планування відбувається за точним 3D-знімком і цифровим протоколом. Це дозволяє ще до операції визначити положення імпланта та обрати найбільш делікатний підхід.</p>
              <ul className="check-list">
                <li><Check />Хірургічна стоматологія та імплантація</li>
                <li><Check />Навігаційні шаблони й цифрове планування</li>
                <li><Check />Протоколи негайного навантаження</li>
                <li><Check />Особистий супровід на всіх етапах</li>
              </ul>
              <a className="button button--outline" href="#contact">Записатися до лікаря <ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="container clinic-gallery">
            <div data-reveal="up"><img src="/images/team.webp" alt="Команда GDC Implants у кабінеті" loading="lazy" /><span>Команда центру</span></div>
            <div data-reveal="up" style={{ '--reveal-delay': '75ms' }}><img src="/images/clinic.webp" alt="Сучасний стоматологічний кабінет GDC Implants" loading="lazy" /><span>Сучасний кабінет</span></div>
            <div data-reveal="up" style={{ '--reveal-delay': '150ms' }}><img src="/images/exterior.webp" alt="Вивіска GDC Implants у Богуславі" loading="lazy" /><span>Центр у Богуславі</span></div>
          </div>
        </section>

        <section className="section section--white" id="solutions">
          <div className="container">
            <SectionHeading eyebrow="Усе на місці" title="Технологія, команда й план — в одному центрі" text="Надані матеріали показують реальне обладнання та кабінети GDC Implants у Богуславі." />
            <div className="solution-grid">
              {solutions.map((item, index) => (
                <article data-reveal="up" style={{ '--reveal-delay': `${index * 75}ms` }} className="solution-card" key={item.title}>
                  <div className="solution-card__image"><img src={item.image} alt="" loading="lazy" /></div>
                  <div className="solution-card__body"><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section results-section" id="results">
          <div className="container">
            <SectionHeading eyebrow="Результати" title="Результати наших робіт" text="Реальні випадки до і після. Найкраще про якість говорять усмішки наших пацієнтів." />
            <ResultsGallery />
            <div className="results-cta" data-reveal="up">
              <p>Більше робіт — у нашому <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>. Хочете такий самий результат?</p>
              <a className="button button--outline" href="#contact">Почати з консультації <ArrowRight size={18} /></a>
              <small>Результат лікування індивідуальний і залежить від клінічної ситуації.</small>
            </div>
          </div>
        </section>

        <section className="section payment-section">
          <div className="container payment-grid">
            <div data-reveal="left">
              <SectionHeading eyebrow="Оплата" title="План лікування можна оплачувати поетапно" text="Ви отримуєте кошторис до початку лікування й сплачуєте відповідно до фактично виконаних етапів." />
              <ul className="check-list">
                <li><Check />Вартість погоджується до початку робіт</li>
                <li><Check />Оплата за етапами лікування</li>
                <li><Check />Без неочікуваних процедур без вашої згоди</li>
              </ul>
            </div>
            <div className="payment-card" data-reveal="right">
              <CircleDollarSign />
              <span>Спокійне планування бюджету</span>
              <h3>Точний кошторис після 3D-діагностики</h3>
              <p>Вартість залежить від кількості імплантів, обраної системи, стану кістки та типу майбутньої конструкції.</p>
              <a className="button button--primary button--wide" href="#contact">Отримати план і кошторис</a>
            </div>
          </div>
        </section>

        <section className="section guarantee-section" id="guarantee">
          <div className="container guarantee-card" data-reveal="scale">
            <div className="guarantee-card__icon"><ShieldCheck /></div>
            <div data-reveal="left">
              <span className="eyebrow">Гарантія</span>
              <h2>5 років на конструкції.<br />До 10 років на імплантацію.</h2>
              <p>Гарантійні умови залежать від клінічної ситуації, обраної системи, дотримання рекомендацій та регулярних контрольних оглядів. Усі умови фіксуються у вашому плані лікування.</p>
            </div>
            <div className="guarantee-stats">
              <div><strong>5</strong><span>років на постійні ортопедичні конструкції</span></div>
              <div><strong>10</strong><span>років гарантії на імплантацію за умовами центру</span></div>
            </div>
          </div>
        </section>

        <section className="section section--white" id="faq">
          <div className="container faq-grid">
            <div>
              <SectionHeading eyebrow="FAQ" title="Відповіді на часті запитання" text="Загальні відповіді допоможуть зорієнтуватися. Точні рекомендації можливі лише після огляду й діагностики." />
              <a className="button button--outline" href={`tel:${PHONE_HREF}`}><Phone size={18} /> Поставити питання</a>
            </div>
            <FAQ />
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy" data-reveal="left">
              <SectionHeading eyebrow="Запис" title="Зробіть перший крок до впевненої усмішки" text="Залиште номер або зателефонуйте. Адміністратор підкаже, який запис обрати: консультацію, 3D КТ чи повторний прийом." light />
              <div className="contact-list">
                <a href={`tel:${PHONE_HREF}`}><span><Phone /></span><div><small>Телефон</small><strong>{PHONE_DISPLAY}</strong></div></a>
                <div><span><MapPin /></span><div><small>Локація</small><strong>м. Богуслав</strong></div></div>
                <div><span><Clock3 /></span><div><small>Графік</small><strong>Будні, 09:00–17:00</strong></div></div>
              </div>
              <div className="social-links">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="GDC Implants в Instagram"><Instagram /></a>
              </div>
            </div>
            <div data-reveal="right"><LeadForm /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><Logo /><p>Центр імплантації та рентгендіагностики зубів у Богуславі.</p></div>
          <nav aria-label="Навігація у підвалі">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-contact"><a href={`tel:${PHONE_HREF}`}>{PHONE_DISPLAY}</a><span>Будні · 09:00–17:00</span></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} GDC Implants. Богуслав.</span><span>Інформація на сайті не замінює консультацію лікаря.</span></div>
      </footer>

      <div className="mobile-bar">
        <a href={`tel:${PHONE_HREF}`}><Phone />Зателефонувати</a>
        <a href="#contact"><CalendarCheck />Записатися</a>
      </div>
    </>
  )
}

export default App
