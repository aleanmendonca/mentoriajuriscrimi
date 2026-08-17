import { useState, useEffect, useRef } from 'react'

// ============ STYLES ============
const styles = {
  // Navbar
  navmenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    padding: '24px 50px',
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    borderRadius: '20px',
    margin: '20px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'top 0.5s, opacity 0.7s',
  },
  navHidden: {
    top: '-150px',
  },
  navLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  navLinks: {
    display: 'flex',
    gap: '50px',
    listStyle: 'none',
  },
  navLink: {
    color: '#ACACAC',
    textDecoration: 'none',
    fontSize: '17px',
    fontWeight: 400,
    position: 'relative',
    cursor: 'pointer',
    transition: 'color 0.5s ease',
  },
  navButtons: {
    display: 'flex',
    gap: '15px',
  },

  // Buttons
  btn: {
    padding: '15px 20px',
    borderRadius: '8.826px',
    fontSize: '18px',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  btnPrimary: {
    background: '#22C55E',
    border: '0.883px solid rgba(34, 197, 94, 0.5561)',
    color: 'white',
    boxShadow: '0px 0px 22.064px rgba(34, 197, 94, 0.30), 0px 0px 13.238px rgba(6, 129, 6, 1) inset',
  },
  btnOutline: {
    background: 'transparent',
    border: '0.883px solid rgba(255, 159, 136, 0.5561)',
    color: 'white',
  },
  btnShiny: {
    position: 'relative',
    isolation: 'isolate',
    padding: '1.25rem 2.5rem',
    borderRadius: '360px',
    border: '1px solid transparent',
    color: 'white',
    fontSize: '20px',
    fontWeight: 600,
    background: 'linear-gradient(black, black) padding-box, conic-gradient(from var(--gradient-angle), transparent, #DC2626 5%, white 10%, #DC2626 15%, transparent 20%) border-box',
    boxShadow: 'inset 0 0 0 1px rgba(26, 24, 24, 1)',
    cursor: 'pointer',
    overflow: 'hidden',
    animation: 'gradient-rotate 3s linear infinite',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: '--gradient-angle 0.5s ease',
  },

  // Hero
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '800px',
    paddingBottom: '80px',
    paddingLeft: '30px',
    paddingRight: '30px',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
  },
  heroBgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
    zIndex: 1,
  },
  heroGlow: {
    position: 'absolute',
    top: '-60%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '00px',
    background: '#DC2626',
    borderRadius: '2000px',
    opacity: '60%',
    mixBlendMode: 'screen',
    filter: 'blur(120px)',
    zIndex: 2,
  },
  heroContent: {
    position: 'relative',
    zIndex: 3,
    maxWidth: '877px',
  },
  heroLabel: {
    color: '#ACACAC',
    fontSize: '16px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  heroH1: {
    fontSize: 'clamp(28px, 4vw, 48px)',
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: '20px',
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    color: '#ACACAC',
    fontSize: '18px',
    marginBottom: '20px',
    fontWeight: 400,
  },

  // Professors Mini
  profMini: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #DC2626, #DC2626)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '14px',
    border: '3px solid black',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  profMiniRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    margin: '40px 0',
  },

  // Cards Section
  cardsContainer: {
    display: 'flex',
    gap: '20px',
    padding: '50px 0',
    overflow: 'hidden',
    position: 'relative',
  },
  cardluz: {
    position: 'relative',
    borderRadius: '90000px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    flexShrink: 0,
  },
  cardluzInner: {
    background: 'black',
    borderRadius: '90000px',
    padding: '1px',
    position: 'relative',
    zIndex: 1,
  },
  cardluzContent: {
    background: 'black',
    borderRadius: '90000px',
    padding: '20px 30px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },

  // Sections
  section: {
    padding: '100px 30px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionLabel: {
    color: '#DC2626',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '15px',
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 600,
    marginBottom: '20px',
  },
  sectionSubtitle: {
    color: '#ACACAC',
    fontSize: '18px',
    maxWidth: '600px',
    margin: '0 auto',
  },

  // Topics Grid
  topicsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
  },
  topicCard: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '30px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  topicIcon: {
    width: '50px',
    height: '50px',
    background: 'rgba(220, 38, 38, 0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },

  // Differential
  diffGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  diffCard: {
    textAlign: 'center',
    padding: '40px 30px',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
  },
  diffIcon: {
    width: '70px',
    height: '70px',
    background: 'linear-gradient(135deg, #DC2626, #DC2626)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    margin: '0 auto 25px',
  },

  // Checklist
  checklist: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  checkItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '20px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  checkIcon: {
    width: '28px',
    height: '28px',
    background: '#DC2626',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontWeight: 'bold',
    fontSize: '14px',
  },

  // Professor Card
  professorCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '40px 30px',
    textAlign: 'center',
    transition: 'all 0.4s ease',
  },
  professorAvatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #DC2626, #DC2626)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    fontSize: '40px',
    fontWeight: 700,
    border: '4px solid #DC2626',
  },

  // Schedule
  scheduleDay: {
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '30px',
  },
  scheduleItem: {
    display: 'flex',
    gap: '25px',
    padding: '18px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },

  // Testimonials
  testiCard: {
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '35px',
  },
  testiAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#DC2626',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: '16px',
  },

  // Pricing
  priceCard: {
    background: 'rgba(0, 0, 0, 0.5)',
    border: '2px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '40px 35px',
    textAlign: 'center',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  priceFeatured: {
    borderColor: '#DC2626',
    boxShadow: '0 20px 60px rgba(220, 38, 38, 0.2)',
  },
  pricePremium: {
    borderColor: 'rgba(255, 215, 0, 0.5)',
  },
  priceBadge: {
    position: 'absolute',
    top: '-14px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#DC2626',
    color: 'white',
    padding: '6px 20px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  pricePremiumBadge: {
    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
    color: 'black',
  },

  // FAQ
  faqItem: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  faqQuestion: {
    width: '100%',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
    padding: '25px 0',
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'inherit',
  },
  faqAnswer: {
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
  },
  faqAnswerOpen: {
    maxHeight: '300px',
  },

  // Final CTA
  finalCta: {
    padding: '150px 30px',
    background: 'linear-gradient(180deg, black 0%, rgba(220, 38, 38, 0.1) 50%, black 100%)',
    textAlign: 'center',
    position: 'relative',
  },
  vagasBadge: {
    display: 'inline-block',
    background: '#DC2626',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '30px',
    marginTop: '20px',
  },

  // Footer
  footer: {
    padding: '40px 30px',
    background: 'black',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
}

// ============ COMPONENTS ============

// Navbar Component
function Navbar() {
  const isMobile = useIsMobile()
  const [hidden, setHidden] = useState(false)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > lastScrollRef.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollRef.current = currentScroll <= 0 ? 0 : currentScroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      ...styles.navmenu,
      padding: isMobile ? '16px 20px' : '24px 50px',
      margin: isMobile ? '10px 15px' : '20px 30px',
      ...(hidden ? styles.navHidden : {}),
    }}>
      <div style={styles.navLogo}>
        <img
          src="https://flameacademy.com.br/wp-content/uploads/2025/04/Group.svg"
          alt="Juriscrimi"
          style={{ height: isMobile ? '32px' : '40px', width: 'auto' }}
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
    </nav>
  )
}

// Button Shiny Component
// Hook para detectar mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

function ButtonShiny({ children, onClick, style = {} }) {
  return (
    <button
      style={{ ...styles.btnShiny, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Hero Component
function Hero() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      ...styles.hero,
      paddingTop: '0',
      paddingBottom: isMobile ? '0' : '100px',
      paddingLeft: '0',
      paddingRight: '0',
    }}>
      {/* Imagem só na parte de cima (50vh no mobile) */}
      <img
        src={isMobile ? '/heromobile.jpg' : '/hero.jpg'}
        alt="Mentoria Juriscrimi"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: isMobile ? '50vh' : '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          zIndex: 0,
        }}
      />
      {/* Overlay gradiente preto embaixo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isMobile
          ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.95) 60%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)',
        zIndex: 1,
      }} />
      <div style={{
        ...styles.heroContent,
        paddingTop: isMobile ? '20vh' : '700px',
        paddingLeft: isMobile ? '20px' : '0',
        paddingRight: isMobile ? '20px' : '0',
      }}>
        <h1 style={{
          ...styles.heroH1,
          fontSize: isMobile ? '24px' : 'clamp(28px, 4vw, 48px)',
        }}>
          Formando <span style={{ color: '#DC2626' }}>criminalistas</span> que não pedem espaço. <span style={{ color: '#DC2626' }}>Ocupam.</span>
        </h1>

        <p style={{...styles.heroSubtitle, fontSize: isMobile ? '16px' : '18px'}}>Dois dias. Sete criminalistas. Um método.</p>

        <p style={{...styles.heroSubtitle, fontSize: isMobile ? '14px' : '18px'}}>
          Aprenda diretamente com advogados que atuam em casos reais e volte para o escritório com estratégias prontas para aplicar.
        </p>

        <button
          onClick={() => window.open('https://payfast.greenn.com.br/pre-checkout/a873tx5', '_blank')}
          style={{ ...styles.btn, ...styles.btnPrimary, fontSize: isMobile ? '16px' : '20px', padding: isMobile ? '15px 25px' : '18px 35px', borderRadius: '12px', marginTop: '20px' }}
        >
          Garantir Minha Vaga
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '15px' : '30px', flexWrap: 'wrap', marginTop: isMobile ? '25px' : '40px' }}>
          <MetaItem icon="📅" text="21 e 22 de Agosto de 2026" />
          <MetaItem icon="🕐" text="09h às 19h" />
          <MetaItem icon="📍" text="Hotel Luzeiros, Fortaleza" />
        </div>
      </div>
    </section>
  )
}

function MetaItem({ icon, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ACACAC', fontSize: '15px' }}>
      <span>{icon}</span>
      {text}
    </div>
  )
}

// Cards Professor Section
function CardsSection() {
  const professors = [
    { initials: 'VP', name: 'Viviane Pinheiro', role: 'Fundadora' },
    { initials: 'JR', name: 'João Ricardo', role: 'Tribunal do Júri' },
    { initials: 'MR', name: 'Marlon Ricardo', role: 'Lavagem' },
    { initials: 'WF', name: 'Welbert Freitas', role: 'Mestre' },
    { initials: 'LM', name: 'Leandro Morales', role: 'Perito' },
    { initials: 'AM', name: 'Augusto Mendes', role: 'Alta Complexidade' },
  ]

  return (
    <section>
      <div style={{ ...styles.cardsContainer, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '50px 30px' }}>
        {professors.map((p, i) => (
          <div key={i} style={styles.cardluz}>
            <div style={styles.cardluzInner}>
              <div style={styles.cardluzContent}>
                <div style={{ ...styles.profMini, width: '50px', height: '50px', fontSize: '12px', border: 'none' }}>
                  {p.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '3px' }}>{p.name}</h4>
                  <p style={{ color: '#ACACAC', fontSize: '13px' }}>{p.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// About Section
function About() {
  const isMobile = useIsMobile()
  return (
    <section style={{ ...styles.section, background: 'black' }} id="about">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Sobre a Mentoria</p>
          <h2 style={styles.sectionTitle}>O Que É a Mentoria Juriscrimi</h2>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#ACACAC', fontSize: isMobile ? '15px' : '18px', lineHeight: 1.8, marginBottom: '20px', textAlign: 'center' }}>
            A Mentoria Juriscrimi <strong style={{ color: 'white' }}>não é um congresso</strong>. <strong style={{ color: 'white' }}>Não é um curso online</strong>. <strong style={{ color: 'white' }}>Não é um evento com palestras genéricas</strong>.
          </p>

          <p style={{ color: '#ACACAC', fontSize: isMobile ? '15px' : '18px', lineHeight: 1.8, marginBottom: '20px', textAlign: 'center' }}>
            São dois dias de treinamento intensivo, das 9h às 19h, com sete dos mais experientes criminalistas do Brasil, transmitindo exatamente como atuam diante dos casos mais complexos da prática forense.
          </p>

          <div style={{ background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, transparent 100%)', borderLeft: '4px solid #DC2626', padding: isMobile ? '20px' : '30px 40px', margin: isMobile ? '30px 0' : '50px 0', borderRadius: '0 20px 20px 0' }}>
            <p style={{ fontStyle: 'italic', color: '#ACACAC', fontSize: isMobile ? '14px' : '17px', lineHeight: 1.8 }}>
              "O ambiente é propositalmente intimista. Isso permite que você pergunte, debata e construa conexões genuínas com outros advogados de alto nível vindos de diferentes estados do Brasil."
            </p>
          </div>

          <p style={{ color: 'white', fontSize: isMobile ? '15px' : '18px', lineHeight: 1.8, marginBottom: '20px', textAlign: 'center', fontWeight: 500 }}>
            A Juriscrimi foi concebida para quem leva a advocacia criminal a sério.
          </p>
        </div>
      </div>
    </section>
  )
}

// Topics Section
function Topics() {
  const isMobile = useIsMobile()
  const topics = [
    { icon: '🚔', title: 'Atuação em Delegacias', desc: 'Como se posicionar desde o primeiro momento da persecução penal.' },
    { icon: '⚖️', title: 'Audiência de Custódia', desc: 'Técnica e argumentação para audiências sensíveis.' },
    { icon: '❌', title: 'Nulidades', desc: 'Identificação e manejo das nulidades processuais com precisão.' },
    { icon: '🔗', title: 'Cadeia de Custódia', desc: 'A disciplina que mudou a produção probatória no Brasil.' },
    { icon: '💻', title: 'Provas Digitais', desc: 'O novo campo de batalha da advocacia criminal.' },
    { icon: '🔍', title: 'Investigação Defensiva', desc: 'Construção da prova pela defesa.' },
    { icon: '⚠️', title: 'Crimes Sexuais', desc: 'Atuação em casos de alta sensibilidade.' },
    { icon: '💣', title: 'Grandes Operações', desc: 'Como atuar quando o cliente está no centro.' },
    { icon: '💰', title: 'Lavagem de Capitais', desc: 'Fundamentos e estratégias de defesa.' },
    { icon: '🤖', title: 'IA aliada a Defesa', desc: 'Como usar inteligência artificial como ferramenta estratégica.' },
    { icon: '🎤', title: 'Sustentação Oral nos tribunais', desc: 'A arte de defender argumentos com clareza e convencimento nos tribunais.' },
    { icon: '🏴', title: 'Organizações Criminosas', desc: 'Atuação defensiva em casos envolvendo organizações criminosas.' },
  ]

  return (
    <section style={{ ...styles.section, background: 'linear-gradient(180deg, black 0%, #111 100%)' }} id="topics">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Programa</p>
          <h2 style={styles.sectionTitle}>O Que Você Vai Aprender</h2>
        </div>

        <div style={{ ...styles.topicsGrid, gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {topics.map((topic, i) => (
            <div
              key={i}
              style={{...styles.topicCard, padding: isMobile ? '15px' : '30px'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div style={{...styles.topicIcon, width: isMobile ? '40px' : '50px', height: isMobile ? '40px' : '50px', fontSize: isMobile ? '18px' : '24px', marginBottom: isMobile ? '12px' : '20px'}}>{topic.icon}</div>
              <h3 style={{ fontSize: isMobile ? '14px' : '20px', fontWeight: 600, marginBottom: '8px' }}>{topic.title}</h3>
              <p style={{ color: '#ACACAC', fontSize: isMobile ? '11px' : '14px', lineHeight: 1.5 }}>{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Differential Section
function Differential() {
  const isMobile = useIsMobile()
  const differentials = [
    { icon: '💰', title: 'Aumente seu faturamento', desc: 'Estratégias ensinadas nas Mentorias da Juriscrimi que fizeram advogados alcançarem faturamentos acima de R$ 30 mil reais na advocacia criminal.' },
    { icon: '👨‍⚖️', title: 'Professores que Vivem o Que Ensinam', desc: 'Criminalistas em exercício ativo com experiência real.' },
    { icon: '📁', title: 'Casos Reais como Fio Condutor', desc: 'Temas abordados a partir de casos concretos.' },
    { icon: '📅', title: 'Conteúdo Aplicável Já na Segunda-feira', desc: 'Estratégias prontas para aplicar no escritório.' },
    { icon: '❓', title: 'Perguntas e Respostas sem Filtro', desc: 'Espaço real para questionar os professores.' },
    { icon: '🏠', title: 'Ambiente Intimista e Qualificado', desc: 'Capacidade limitada para qualidade na interação.' },
    { icon: '🍷', title: 'Networking de Alto Nível', desc: 'Confraternização com degustação de vinhos.' },
  ]

  return (
    <section style={{ ...styles.section, background: 'black' }} id="differential">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Diferenciais</p>
          <h2 style={styles.sectionTitle}>O Diferencial Dessa Mentoria</h2>
          <p style={{ color: '#ACACAC', fontSize: isMobile ? '15px' : '18px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7, marginBottom: '30px' }}>
            Você não vai apenas assistir a aulas. Vai aprender com quem vive a advocacia criminal e sair com estratégias aplicáveis já no primeiro atendimento.
          </p>
        </div>

        <div style={{ ...styles.diffGrid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {differentials.map((d, i) => (
            <div
              key={i}
              style={{...styles.diffCard, padding: isMobile ? '25px 20px' : '40px 30px'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div style={{...styles.diffIcon, width: isMobile ? '60px' : '70px', height: isMobile ? '60px' : '70px'}}>{d.icon}</div>
              <h3 style={{ fontSize: isMobile ? '17px' : '20px', fontWeight: 600, marginBottom: '15px' }}>{d.title}</h3>
              <p style={{ color: '#ACACAC', fontSize: '14px', lineHeight: 1.7 }}>{d.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => window.open('https://payfast.greenn.com.br/pre-checkout/a873tx5', '_blank')}
            style={{ ...styles.btn, ...styles.btnPrimary, fontSize: isMobile ? '16px' : '18px', padding: isMobile ? '15px 30px' : '18px 40px', borderRadius: '12px' }}
          >
            Garantir Minha Vaga
          </button>
        </div>
      </div>
    </section>
  )
}

// For Who Section
function ForWho() {
  const isMobile = useIsMobile()
  const items = [
    'Advogados criminalistas que querem aprofundar a técnica',
    'Advogados que estão migrando para a área criminal',
    'Jovens advogados que querem encurtar a curva de aprendizado',
    'Quem deseja atuar com mais estratégia e segurança nos casos',
    'Quem busca elevar o nível da advocacia e da postura profissional',
    'Advogados que pretendem faturar acima de 30 mil por mês',
  ]

  return (
    <section style={{ ...styles.section, background: 'linear-gradient(180deg, black 0%, #111 100%)' }} id="who">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Para Quem é</p>
          <h2 style={styles.sectionTitle}>Essa Mentoria é Para Você?</h2>
        </div>

        <div style={styles.checklist}>
          {items.map((item, i) => (
            <div key={i} style={{...styles.checkItem, padding: isMobile ? '12px 0' : '20px 0'}}>
              <div style={{...styles.checkIcon, width: isMobile ? '24px' : '28px', height: isMobile ? '24px' : '28px'}}>✓</div>
              <p style={{ fontSize: isMobile ? '14px' : '17px', color: '#ACACAC' }}>
                <strong style={{ color: 'white' }}>{item}</strong>
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => window.open('https://payfast.greenn.com.br/pre-checkout/a873tx5', '_blank')}
            style={{ ...styles.btn, ...styles.btnPrimary, fontSize: isMobile ? '16px' : '18px', padding: isMobile ? '15px 30px' : '18px 40px', borderRadius: '12px' }}
          >
            Garantir Minha Vaga
          </button>
        </div>
      </div>
    </section>
  )
}

// Professors Section
function Professors() {
  const isMobile = useIsMobile()
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Drag handlers para carrossel
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    scrollRef.current.style.cursor = 'grabbing'
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch handlers para mobile
  const handleTouchStart = (e) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const professors = [
    {
      initials: 'VP',
      name: 'Viviane Pinheiro',
      role: 'Fundadora da Juriscrimi',
      desc: 'Advogada criminalista com atuação nacional e internacional, conhecida como a "Leoa do Criminal" pela forma combativa com que soluciona casos de alta complexidade, como tribunal do júri, execução penal, revisão criminal e organização criminosa. É fundadora e CEO do Congresso Penal JurisCrimi e criadora do método VP Criminal, dedicando-se à formação de advogados criminalistas. Atuou no caso internacional Marcelo Piloto, no Júri Federal do Rio de Janeiro, um dos casos criminais mais midiáticos do país.',
      image: '/palestrantes/novos/viviane.jpeg',
      instagram: 'https://www.instagram.com/vivianepinheiroadvogada/',
      video: false,
    },
    {
      initials: 'SF',
      name: 'Sérgio Figueiredo',
      role: 'Criminalista',
      desc: 'Advogado criminalista e especialista em grandes operações.',
      image: '/palestrantes/novos/sergio.jpeg',
      instagram: 'https://www.instagram.com/sergiofigueiredoadv/',
      video: false,
    },
    {
      initials: 'MR',
      name: 'Marlon Ricardo',
      role: 'Criminalista',
      desc: 'Autor do livro "Lavagem de Capitais: Teoria e Prática Defensiva".',
      image: '/palestrantes/novos/marlon.PNG',
      instagram: 'https://www.instagram.com/marlonricardocriminalista/',
      video: false,
    },
    {
      initials: 'WF',
      name: 'Welbert Freitas',
      role: 'Mestre em Direito',
      desc: 'Mestre em Direito, advogado criminalista e professor universitário.',
      image: '/palestrantes/novos/welbert.jpeg',
      instagram: 'https://www.instagram.com/welbertgfreitas/',
      video: false,
    },
    {
      initials: 'LM',
      name: 'Leandro Morales',
      role: 'Perito',
      desc: 'Leandro Morales é perito em informática e especialista em forense digital, com ampla experiência na análise técnica de provas digitais em processos judiciais, especialmente envolvendo celulares, computadores e sistemas. Atua frequentemente como assistente técnico da defesa, auxiliando advogados na compreensão técnica das evidências e na identificação de falhas metodológicas em perícias digitais.',
      image: '/palestrantes/novos/leandro.jpeg',
      instagram: 'https://www.instagram.com/leandro_pericia/',
      video: false,
    },
    {
      initials: 'J',
      name: 'Jader Aldrin',
      role: 'Criminalista',
      desc: 'Advogado criminalista e especialista em Tribunal do Júri.',
      image: '/palestrantes/novos/jader.jpeg',
      instagram: 'https://www.instagram.com/jader.aldrin/',
      video: false,
    },
    {
      initials: 'DA',
      name: 'David Alencar',
      role: 'Criminalista',
      desc: 'Ex acesso no tribunal de Justiça e direto da ESA no vale do Jaguaribe.',
      image: '/palestrantes/novos/david.jpeg',
      instagram: 'https://www.instagram.com/davidalencaradv/',
      video: false,
    },
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 280 : 325
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section style={{ ...styles.section, background: 'black' }} id="professors">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Nossos Professores</p>
          <h2 style={styles.sectionTitle}>Sete Criminalistas. Uma Metodologia.</h2>
        </div>

        {/* Card da Viviane em destaque */}
        {/* Card da Viviane em destaque - tamanho de 2 cards */}
        <div style={{
          maxWidth: isMobile ? '100%' : '900px',
          margin: '0 auto 30px auto',
        }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '2px solid #DC2626',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(220, 38, 38, 0.15)',
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
            }}>
              <div style={{
                position: 'relative',
                width: isMobile ? '100%' : '350px',
                paddingTop: isMobile ? '125%' : '280px',
                background: '#1a1a1a',
                overflow: 'hidden',
              }}>
                <img
                  src={professors[0].image}
                  alt={professors[0].name}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <div style={{ padding: '30px', flex: 1 }}>
                <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '5px' }}>{professors[0].name}</h3>
                <a href={professors[0].instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#DC2626', marginBottom: '10px', display: 'block' }}>
                  @{professors[0].instagram.replace('https://www.instagram.com/', '').replace('/', '')}
                </a>
                <p style={{
                  fontSize: '14px',
                  color: '#DC2626',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '15px',
                }}>{professors[0].role}</p>
                <p style={{ color: '#ACACAC', fontSize: '15px', lineHeight: 1.7 }}>{professors[0].desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid dos outros Professores */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {professors.slice(1).map((p, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Imagem no topo */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '125%', // Instagram 4:5 ratio
                background: '#1a1a1a',
                overflow: 'hidden',
              }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              {/* Texto embaixo */}
              <div style={{ padding: '15px 18px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '3px' }}>{p.name}</h3>
                <a href={p.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: '#DC2626', marginBottom: '6px', display: 'block' }}>
                  @{p.instagram.replace('https://www.instagram.com/', '').replace('/', '')}
                </a>
                <p style={{
                  fontSize: '11px',
                  color: '#DC2626',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                }}>{p.role}</p>
                <p style={{ color: '#ACACAC', fontSize: '12px', lineHeight: 1.4 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => window.open('https://payfast.greenn.com.br/pre-checkout/a873tx5', '_blank')}
            style={{ ...styles.btn, ...styles.btnPrimary, fontSize: isMobile ? '16px' : '18px', padding: isMobile ? '15px 30px' : '18px 40px', borderRadius: '12px' }}
          >
            Garantir Minha Vaga
          </button>
        </div>

        {/* Esconder scrollbar CSS */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  )
}

// Schedule Section
function Schedule() {
  const isMobile = useIsMobile()

  const sextaFeira = [
    { time: '09h00 às 11h00', desc: 'Viviane Pinheiro', bold: true },
    { time: '11h00 às 12h30', desc: 'Marlon Ricardo', bold: true },
    { time: '12h30 às 13h30', desc: 'INTERVALO PARA ALMOÇO', bold: false },
    { time: '13h30 às 16h00', desc: 'Welbert Freitas', bold: true },
    { time: '16h00 às 16h30', desc: 'COFFEE BREAK', bold: false },
    { time: '16h30 às 19h00', desc: 'Leandro Morales', bold: true },
  ]

  const sabado = [
    { time: '09h00 às 10h30', desc: 'Viviane Pinheiro', bold: true },
    { time: '10h30 às 12h30', desc: 'David Alencar', bold: true },
    { time: '12h30 às 13h30', desc: 'INTERVALO PARA ALMOÇO', bold: false },
    { time: '13h30 às 16h00', desc: 'Sérgio Figueiredo', bold: true },
    { time: '16h00 às 16h30', desc: 'COFFEE BREAK', bold: false },
    { time: '16h30 às 19h00', desc: 'Jader Aldrin', bold: true },
    { time: '19h00', desc: 'Sorteio da BECA e Vade Mecuns, Encerramento', bold: false },
  ]

  return (
    <section style={{
      ...styles.section,
      padding: isMobile ? '60px 20px' : '100px 30px',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%), url(/fundo.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    }} id="schedule">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Programação</p>
          <h2 style={styles.sectionTitle}>Como serão os dois dias?</h2>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: '#ACACAC', fontSize: isMobile ? '14px' : '17px', marginBottom: isMobile ? '30px' : '50px' }}>
            Cada dia começa às 9h e vai até às 19h. Três professores por dia.
          </p>

          {/* Sexta-Feira */}
          <div style={{ ...styles.scheduleDay, padding: isMobile ? '25px' : '40px', textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              marginBottom: '5px',
              textAlign: 'center'
            }}>Sexta-Feira</h3>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 400,
              marginBottom: '25px',
              textAlign: 'center'
            }}>21 de Agosto de 2026</p>
            {sextaFeira.map((item, i) => (
              <div key={i} style={{ ...styles.scheduleItem, padding: isMobile ? '12px 0' : '18px 0', borderBottom: i === sextaFeira.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ color: '#DC2626', fontWeight: 600, fontSize: isMobile ? '13px' : '15px', minWidth: isMobile ? '90px' : '110px' }}>{item.time}</span>
                <span style={{ color: '#ACACAC', fontSize: isMobile ? '13px' : '15px' }}>
                  {item.bold ? <strong style={{ color: 'white' }}>{item.desc}</strong> : item.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Sábado */}
          <div style={{ ...styles.scheduleDay, padding: isMobile ? '25px' : '40px', textAlign: 'center' }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              marginBottom: '5px',
              textAlign: 'center'
            }}>Sábado</h3>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 400,
              marginBottom: '25px',
              textAlign: 'center'
            }}>22 de Agosto de 2026</p>
            {sabado.map((item, i) => (
              <div key={i} style={{ ...styles.scheduleItem, padding: isMobile ? '12px 0' : '18px 0', borderBottom: i === sabado.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ color: '#DC2626', fontWeight: 600, fontSize: isMobile ? '13px' : '15px', minWidth: isMobile ? '90px' : '110px' }}>{item.time}</span>
                <span style={{ color: '#ACACAC', fontSize: isMobile ? '13px' : '15px' }}>
                  {item.bold ? <strong style={{ color: 'white' }}>{item.desc}</strong> : item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => window.open('https://payfast.greenn.com.br/pre-checkout/a873tx5', '_blank')}
            style={{ ...styles.btn, ...styles.btnPrimary, fontSize: isMobile ? '16px' : '18px', padding: isMobile ? '15px 30px' : '18px 40px', borderRadius: '12px' }}
          >
            Garantir Minha Vaga
          </button>
        </div>
      </div>
    </section>
  )
}

// Beca Section
function Beca() {
  const isMobile = useIsMobile()
  return (
    <section style={{ ...styles.section, background: 'black', padding: isMobile ? '40px 20px' : '60px 30px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <img
          src="/beca.jpeg"
          alt="Beca"
          style={{
            width: '100%',
            borderRadius: '16px',
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const isMobile = useIsMobile()
  const [playingVideo, setPlayingVideo] = useState(null)
  const [thumbnails, setThumbnails] = useState({})
  const videoRefs = useRef({})

  const testimonials = [
    { video: 'https://pub-fbdc5d92c1ea483291b4cb2d51e8f6f7.r2.dev/juriscrimi/IMG_4480.MP4', name: 'Advogada Rayelle Alburquerque' },
    { video: 'https://pub-fbdc5d92c1ea483291b4cb2d51e8f6f7.r2.dev/juriscrimi/IMG_4481.MP4', name: 'Advogada Roberta Studart' },
    { video: 'https://pub-fbdc5d92c1ea483291b4cb2d51e8f6f7.r2.dev/juriscrimi/IMG_4482.MP4', name: 'Advogado Luciano Dantas' },
  ]

  // Gerar thumbnails após carregamento
  useEffect(() => {
    testimonials.forEach((t, i) => {
      if (thumbnails[i]) return
      const video = document.createElement('video')
      video.crossOrigin = 'anonymous'
      video.src = t.video
      video.muted = true
      video.preload = 'metadata'
      video.onloadeddata = () => {
        video.currentTime = 0.1
      }
      video.onseeked = () => {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        setThumbnails(prev => ({ ...prev, [i]: canvas.toDataURL('image/jpeg', 0.8) }))
      }
    })
  }, [])

  return (
    <section style={{ ...styles.section, background: 'black' }} id="testimonials">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Depoimentos</p>
          <h2 style={styles.sectionTitle}>Quem Já Participou</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '20px' : '30px', maxWidth: isMobile ? '100%' : '900px', margin: '0 auto' }}>
          {testimonials.map((t, i) => (
            <div key={i}>
              {playingVideo === i ? (
                <div>
                  <video
                    controls
                    autoPlay
                    playsInline
                    disablePictureInPicture
                    style={{ width: '100%', aspectRatio: '9/16', borderRadius: '12px 12px 0 0', background: '#1a1a1a', objectFit: 'cover' }}
                    src={t.video}
                    onEnded={() => setPlayingVideo(null)}
                  />
                  <div style={{ background: '#1a1a1a', padding: '12px 15px', borderRadius: '0 0 12px 12px', textAlign: 'center' }}>
                    <p style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>{t.name}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    onClick={() => setPlayingVideo(i)}
                    style={{ width: '100%', aspectRatio: '9/16', background: thumbnails[i] ? `url('${thumbnails[i]}') center/cover` : `linear-gradient(135deg, #1a1a1a, #2a2a2a)`, borderRadius: '12px 12px 0 0', position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
                  >
                    {!thumbnails[i] && (
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#DC2626' }}>
                        <div style={{ width: '30px', height: '30px', border: '3px solid #DC2626', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                      </div>
                    )}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60px',
                      height: '60px',
                      background: 'rgba(220, 38, 38, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '4px' }}>
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div style={{ background: '#1a1a1a', padding: '12px 15px', borderRadius: '0 0 12px 12px', textAlign: 'center' }}>
                    <p style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>{t.name}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => window.open('https://payfast.greenn.com.br/pre-checkout/a873tx5', '_blank')}
            style={{ ...styles.btn, ...styles.btnPrimary, fontSize: isMobile ? '16px' : '18px', padding: isMobile ? '15px 30px' : '18px 40px', borderRadius: '12px' }}
          >
            Garantir Minha Vaga
          </button>
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  const isMobile = useIsMobile()
  return (
    <section style={{ ...styles.section, padding: isMobile ? '60px 20px' : '100px 30px', background: 'linear-gradient(180deg, black 0%, #111 100%)' }} id="pricing">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Ingressos</p>
          <h2 style={styles.sectionTitle}>Mentoria Premium</h2>
        </div>

        <div style={{ maxWidth: isMobile ? '100%' : '500px', margin: '0 auto' }}>
          <div
            style={{
              ...styles.priceCard,
              ...styles.priceFeatured,
              padding: isMobile ? '30px 20px' : '50px 40px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Badge Premium */}
            <div style={{ ...styles.priceBadge, ...styles.pricePremiumBadge, fontSize: isMobile ? '12px' : '14px', padding: isMobile ? '6px 18px' : '8px 25px' }}>Premium</div>

            {/* Selo de Desconto Grande */}
            <div style={{
              background: 'linear-gradient(135deg, #DC2626, #991B1B)',
              borderRadius: '20px',
              padding: isMobile ? '15px 20px' : '20px 30px',
              marginBottom: isMobile ? '15px' : '25px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                fontSize: isMobile ? '36px' : '48px',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1,
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}>40% OFF</div>
            </div>

            {/* Preço Original */}
            <div style={{ marginBottom: '5px' }}>
              <span style={{ color: '#ACACAC', fontSize: isMobile ? '18px' : '22px', textDecoration: 'line-through' }}>De R$ 1.499,99</span>
            </div>
            <div style={{ marginBottom: isMobile ? '15px' : '20px' }}>
              <span style={{ color: '#ACACAC', fontSize: isMobile ? '13px' : '15px' }}>ou 12x de R$ 154,22</span>
            </div>

            {/* Tarja Preço com Desconto */}
            <div style={{
              background: 'rgba(34, 197, 94, 0.15)',
              border: '2px solid #22C55E',
              borderRadius: '15px',
              padding: isMobile ? '15px 20px' : '20px 30px',
              marginBottom: isMobile ? '20px' : '30px',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#22C55E',
                fontWeight: 600,
                marginBottom: '5px',
              }}>COM O DESCONTO VOCÊ PAGARÁ:</div>
              <div style={{
                fontSize: isMobile ? '38px' : '52px',
                fontWeight: 800,
                color: '#22C55E',
                lineHeight: 1,
              }}>R$ 899,99</div>
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                color: 'rgba(255,255,255,0.7)',
                marginTop: '5px',
              }}>ou 12x de <strong style={{ color: '#22C55E' }}>R$ 92,53</strong></div>
            </div>

            <ul style={{ listStyle: 'none', marginBottom: isMobile ? '20px' : '30px', textAlign: 'left' }}>
              {[
                'Acesso completo aos 2 dias de imersão.',
                'Welcome kit premium exclusivo.',
                'Mesa VIP.',
                'Coffee break nos 2 dias.',
                'Certificado de 20 horas.',
                'Sorteio de livros jurídicos selecionados.',
                'Material de apoio.',
                'Grupo de WhatsApp exclusivo.',
                'Sorteio de uma BECA e de VADE MECUM PENAL 2026 da Confraria Criminal.',
              ].map((text, j) => (
                <li
                  key={j}
                  style={{
                    padding: isMobile ? '10px 0' : '12px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: isMobile ? '13px' : '15px',
                    color: 'white',
                  }}
                >
                  <img src="/icone.png" alt="check" style={{ width: '18px', height: '18px', flexShrink: 0 }} />
                  {text}
                </li>
              ))}
            </ul>

            <button
              style={{ ...styles.btn, ...styles.btnPrimary, width: '100%', padding: isMobile ? '15px' : '18px', fontSize: isMobile ? '16px' : '20px' }}
              onClick={() => window.open('https://payfast.greenn.com.br/pre-checkout/a873tx5', '_blank')}
            >
              Garantir Minha Vaga
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const isMobile = useIsMobile()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: 'Quem pode participar?', a: 'Advogados e advogadas com interesse em atualizações, estratégias e técnica na prática criminal real.' },
    { q: 'Qual o valor da mentoria?', a: 'R$ 897 à vista ou 12× de R$ 92,53. De R$ 1.499 por R$ 897 (40% OFF).' },
    { q: 'Posso parcelar a inscrição?', a: 'Sim, em até 12x sem juros no cartão de crédito.' },
    { q: 'O evento é presencial?', a: 'Sim. 100% presencial, no Hotel Luzeiros, em Fortaleza, nos dias 21 e 22 de agosto de 2026.' },
    { q: 'Haverá gravação das aulas?', a: 'Sim, as aulas serão gravadas, mas as gravações não serão disponibilizadas aos participantes.' },
    { q: 'As vagas são limitadas?', a: 'Sim, são apenas 55 profissionais. Quando esgotarem, não haverá lista de espera.' },
    { q: 'O que está incluso na inscrição?', a: 'Acesso integral aos dois dias, welcome kit premium, mesa VIP, coffee break, certificado de 20h, material de apoio, grupo com professores e sorteio de uma BECA e de VADE MECUM PENAL 2026 da Confraria Criminal.' },
  ]

  return (
    <section style={{ ...styles.section, padding: isMobile ? '60px 20px' : '100px 30px', background: 'black' }} id="faq">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionLabel}>Dúvidas</p>
          <h2 style={styles.sectionTitle}>Perguntas Frequentes</h2>
        </div>

        <div style={{ maxWidth: isMobile ? '100%' : '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={styles.faqItem}>
              <button
                style={{...styles.faqQuestion, fontSize: isMobile ? '15px' : '18px', padding: isMobile ? '18px 0' : '25px 0'}}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span style={{
                  fontSize: isMobile ? '20px' : '24px',
                  color: '#DC2626',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease'
                }}>+</span>
              </button>
              <div style={{
                ...styles.faqAnswer,
                ...(openIndex === i ? styles.faqAnswerOpen : {}),
                maxHeight: openIndex === i ? '300px' : '0'
              }}>
                <p style={{ color: '#ACACAC', fontSize: isMobile ? '13px' : '15px', lineHeight: 1.7, paddingBottom: isMobile ? '18px' : '25px' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTA() {
  const isMobile = useIsMobile()

  return (
    <section style={{...styles.finalCta, padding: isMobile ? '80px 20px' : '150px 30px'}}>
      <div style={{ maxWidth: isMobile ? '100%' : '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: isMobile ? 'clamp(22px, 4vw, 28px)' : 'clamp(28px, 4vw, 44px)', fontWeight: 600, lineHeight: 1.3, marginBottom: isMobile ? '20px' : '30px' }}>
          Existe uma diferença entre advogados que <span style={{ color: '#DC2626' }}>estudam direito penal</span> e advogados que <span style={{ color: '#DC2626' }}>sabem o que fazer</span> quando o caso começa de verdade.
        </h2>

        <p style={{ color: '#ACACAC', fontSize: isMobile ? '15px' : '18px', marginBottom: isMobile ? '15px' : '20px', lineHeight: 1.7 }}>
          A Mentoria Juriscrimi foi criada para encurtar essa distância. Dois dias com profissionais que estão nos tribunais, nas delegacias e nas salas de audiência.
        </p>

        <ButtonShiny onClick={() => window.open('https://payfast.greenn.com.br/177339?batch=15130_LdMxxN', '_blank')} style={{ fontSize: isMobile ? '16px' : '20px', padding: isMobile ? '15px 25px' : '1.25rem 2.5rem', marginTop: isMobile ? '15px' : '20px' }}>
          Quero Minha Vaga
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </ButtonShiny>

        <div style={{...styles.vagasBadge, fontSize: isMobile ? '12px' : '14px', padding: isMobile ? '10px 20px' : '12px 30px'}}>⚠️ Vagas Limitadas: 55 profissionais</div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '15px' : '30px', flexWrap: 'wrap', marginTop: isMobile ? '20px' : '30px' }}>
          <MetaItem icon="📅" text="21 e 22 de Agosto de 2026" />
          <MetaItem icon="📍" text="Hotel Luzeiros, Fortaleza" />
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer style={styles.footer}>
      <img
        src="https://flameacademy.com.br/wp-content/uploads/2025/04/Group.svg"
        alt="Juriscrimi"
        style={{ height: '40px', marginBottom: '20px' }}
        onError={(e) => e.target.style.display = 'none'}
      />
      <p style={{ color: '#DC2626', fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>Mentoria Juriscrimi</p>
      <p style={{ color: '#ACACAC', fontSize: '14px' }}>© 2026 Mentoria Juriscrimi. Todos os direitos reservados.</p>
    </footer>
  )
}

// ============ APP ============
export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Topics />
      <Differential />
      <ForWho />
      <Professors />
      <Schedule />
      <Beca />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
