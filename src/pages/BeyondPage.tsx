import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { Atom, BookOpen, Brain, Globe, MapPin, Star } from 'lucide-react'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const countries = [
  { flag: '🇵🇰', name: 'Pakistan',        note: 'Peshawar · Islamabad — where it all started' },
  { flag: '🇩🇪', name: 'Germany',          note: 'Munich (currently home) · Berlin' },
  { flag: '🇳🇱', name: 'Netherlands',      note: 'Amsterdam · The Hague · Rotterdam' },
  { flag: '🇦🇹', name: 'Austria',          note: 'Vienna · Salzburg' },
  { flag: '🇫🇷', name: 'France',           note: 'Paris' },
  { flag: '🇧🇪', name: 'Belgium',          note: 'Brussels · Ghent · Bruges' },
  { flag: '🇭🇷', name: 'Croatia',          note: 'Dubrovnik' },
  { flag: '🇮🇹', name: 'Italy',            note: 'Rome' },
  { flag: '🇨🇿', name: 'Czech Republic',   note: 'Prague' },
  { flag: '🇨🇭', name: 'Switzerland',      note: 'Zurich · Basel' },
  { flag: '🇱🇺', name: 'Luxembourg',       note: 'Luxembourg City' },
  { flag: '🇪🇸', name: 'Spain',            note: 'Barcelona · Madrid' },
]

const currentlyReading = {
  title: 'Quantum Physics',
  author: 'David D. Cox',
  note:
    'A rigorous yet accessible treatment of quantum mechanics — wave functions, superposition, entanglement, and the measurement problem. Working through it to build a more precise mathematical foundation for the ideas I find myself thinking about most.',
}

const booksRead = [
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    note: "Raskolnikov's psychological unravelling is one of the most gripping portraits of guilt and self-deception ever written. Dostoevsky understands the human mind in a way that most psychology textbooks don't.",
  },
  {
    title: 'Notes from the Underground',
    author: 'Fyodor Dostoevsky',
    note: "The underground man is unbearable and utterly honest — a study in how intelligence without humility becomes self-destructive. Short, brutal, unforgettable.",
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    note: "Dostoevsky's final novel and perhaps the greatest ever written. Faith, doubt, free will, and love — every argument is given its full force, none dismissed cheaply.",
  },
  {
    title: '21 Lessons for the 21st Century',
    author: 'Yuval Noah Harari',
    note: 'A clear-eyed look at the questions that actually matter now — AI, meaning, nationalism, meditation. Harari forces you to think about the present rather than escape into the past or future.',
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    note: "Written for no one but himself, which is exactly why it works. A daily practice of returning to what you can control and releasing what you cannot. I come back to it regularly.",
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    note: "The two-system model of thought permanently changed how I approach decisions, analytics, and my own cognitive biases. Essential reading for anyone who works with data.",
  },
  {
    title: 'Beyond Good and Evil',
    author: 'Friedrich Nietzsche',
    note: "A critique of every moral assumption we take for granted. Dense, provocative, and occasionally infuriating — but it sharpens your thinking whether you agree with it or not.",
  },
  {
    title: "Sophie's World",
    author: 'Jostein Gaarder',
    note: "A history of Western philosophy disguised as a novel. It was the first book that i read that made philosophy feel alive and urgent rather than academic — a gateway to everything else.",
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    note: "A sweeping account of how Homo sapiens came to dominate the planet through shared fictions — money, religion, nations. Harari makes you feel both awed and unsettled by your own species.",
  },
]

interface Interest {
  icon: ElementType
  title: string
  body: string
}

const interests: Interest[] = [
  {
    icon: Atom,
    title: 'Quantum Mechanics & High-Dimensional Spaces',
    body: "The counterintuitive world below the Planck scale — superposition, entanglement, and the Hilbert space formalism where a quantum system's state lives in an infinite-dimensional vector space. What draws me is the gap between the mathematical elegance and the complete absence of an intuitive picture. The math is clear; the reality it describes is anything but.",
  },

  {
    icon: Brain,
    title: 'Philosophy of Mind & Consciousness',
    body: "The hard problem of consciousness, integrated information theory, Chalmers, Dennett, and the question of why there is something it is like to be anything at all. Purely physical explanations seem to always leave the most interesting thing — subjective experience — sitting just outside their reach.",
  },



  
]

// ---------------------------------------------------------------------------
// Styled components
// ---------------------------------------------------------------------------

const Page = styled(motion.div)`
  display: grid;
  gap: 5rem;

  @media (max-width: 680px) {
    gap: 3rem;
  }
`

const HeroCard = styled.div`
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: calc(var(--radius-xl) + 6px);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(255, 249, 240, 0.78)),
    linear-gradient(180deg, rgba(231, 167, 94, 0.1), transparent);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const HeroLeft = styled.div`
  display: grid;
  gap: 1.2rem;
`

const HeroEyebrow = styled.span`
  color: var(--accent);
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 800;
`

const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 5.5vw, 5rem);
  line-height: 0.95;
  overflow-wrap: break-word;
`

const HeroBody = styled.p`
  color: var(--text-muted);
  line-height: 1.65;
  max-width: 36rem;
`

const HeroRight = styled.div`
  display: grid;
  gap: 0.75rem;
`

const HeroStat = styled.div`
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  background: rgba(17, 32, 51, 0.04);
  display: flex;
  align-items: center;
  gap: 0.85rem;
`

const StatIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), #0d776e);
  color: white;
  flex-shrink: 0;
`

const StatText = styled.div`
  display: grid;
  gap: 0.15rem;

  strong {
    font-size: 0.94rem;
    color: var(--text);
  }

  span {
    font-size: 0.8rem;
    color: var(--text-muted);
  }
`

/* ── Travel ───────────────────────────────────────────────── */

const TravelSection = styled.section``

const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`

const CountryCard = styled.div`
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 0.6rem;
  transition: transform 180ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`

const CountryFlag = styled.span`
  font-size: 2rem;
  line-height: 1;
`

const CountryName = styled.strong`
  font-size: 1rem;
  color: var(--text);
`

const CountryNote = styled.span`
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.45;
`

/* ── Reading ───────────────────────────────────────────────── */

const ReadingSection = styled.section``

const CurrentCard = styled.div`
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: var(--radius-xl);
  background: linear-gradient(145deg, var(--surface-dark), #1c2f46);
  color: white;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
  box-shadow: var(--shadow);
  margin-top: 1.5rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const BookSpine = styled.div`
  width: 3.5rem;
  height: 5rem;
  border-radius: 6px 2px 2px 6px;
  background: linear-gradient(135deg, var(--accent), #0d776e);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.35);
`

const BookInfo = styled.div`
  display: grid;
  gap: 0.6rem;
`

const ReadingLabel = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.45);
`

const BookTitle = styled.h3`
  font-size: 1.3rem;
  color: white;
  line-height: 1.2;
`

const BookAuthor = styled.span`
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
`

const BookNote = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  max-width: 46rem;
`

const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const LibraryCard = styled.div`
  padding: 1.3rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 0.55rem;
  align-content: start;
  transition: transform 180ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`

const LibraryTitle = styled.strong`
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.3;
`

const LibraryAuthor = styled.span`
  font-size: 0.78rem;
  color: var(--accent);
  font-weight: 700;
`

const LibraryNote = styled.p`
  font-size: 0.83rem;
  color: var(--text-muted);
  line-height: 1.55;
`

/* ── Interests ───────────────────────────────────────────────── */

const InterestsSection = styled.section``

const InterestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 1.5rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const InterestCard = styled.div`
  padding: 1.65rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1rem;
  align-content: start;
  transition: transform 180ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
`

const InterestIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 18px;
  color: white;
  background: linear-gradient(135deg, var(--surface-dark), #1f3148);
  box-shadow: var(--shadow-soft);
`

const InterestTitle = styled.h3`
  font-size: 1.05rem;
  line-height: 1.25;
  color: var(--text);
`

const InterestBody = styled.p`
  font-size: 0.9rem;
  line-height: 1.68;
  color: var(--text-muted);
`

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function BeyondPage() {
  return (
    <Page
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <Reveal>
        <HeroCard>
          <HeroLeft>
            <HeroEyebrow>Beyond the tech</HeroEyebrow>
            <HeroTitle>Life outside the terminal.</HeroTitle>
            <HeroBody>
              The parts of me that don't show up in a GitHub graph — where I've been, what I'm
              reading, and the questions I find impossible to stop thinking about.
            </HeroBody>
          </HeroLeft>

          <HeroRight>
            <HeroStat>
              <StatIcon><Globe size={16} /></StatIcon>
              <StatText>
                <strong>Travelling</strong>
                <span>{countries.length} countries explored</span>
              </StatText>
            </HeroStat>
            <HeroStat>
              <StatIcon><BookOpen size={16} /></StatIcon>
              <StatText>
                <strong>Reading</strong>
                <span>{booksRead.length + 114} books in the library</span>
              </StatText>
            </HeroStat>
            <HeroStat>
              <StatIcon><Atom size={16} /></StatIcon>
              <StatText>
                <strong>Curiosities</strong>
                <span>Quantum, cosmos, consciousness</span>
              </StatText>
            </HeroStat>
          </HeroRight>
        </HeroCard>
      </Reveal>

      {/* ── Travel ─────────────────────────────────────────── */}
      <TravelSection>
        <Reveal>
          <SectionTitle
            eyebrow="Travel"
            title="Countries I've called home, briefly or otherwise."
            body="Every country added a different lens on work, culture, and human connection. 
            Each one has influenced the way I approach people, problems, and perspective."
          />
        </Reveal>

        <CountryGrid>
          {countries.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <CountryCard>
                <CountryFlag>{c.flag}</CountryFlag>
                <CountryName>{c.name}</CountryName>
                <CountryNote>
                  <MapPin size={11} style={{ display: 'inline', marginRight: '0.3rem', verticalAlign: 'middle' }} />
                  {c.note}
                </CountryNote>
              </CountryCard>
            </Reveal>
          ))}
        </CountryGrid>
      </TravelSection>

      {/* ── Reading ─────────────────────────────────────────── */}
      <ReadingSection>
        <Reveal>
          <SectionTitle
            eyebrow="Reading"
            title="Books that have shaped how I think."
            body="Mostly physics, philosophy, and a few things that blur the line between them."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <CurrentCard>
            <BookSpine>
              <BookOpen size={20} color="white" />
            </BookSpine>
            <BookInfo>
              <ReadingLabel>Currently reading</ReadingLabel>
              <BookTitle>{currentlyReading.title}</BookTitle>
              <BookAuthor>by {currentlyReading.author}</BookAuthor>
              <BookNote>{currentlyReading.note}</BookNote>
            </BookInfo>
          </CurrentCard>
        </Reveal>

        <LibraryGrid>
          {booksRead.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.06}>
              <LibraryCard>
                <LibraryTitle>{book.title}</LibraryTitle>
                <LibraryAuthor>{book.author}</LibraryAuthor>
                <LibraryNote>{book.note}</LibraryNote>
              </LibraryCard>
            </Reveal>
          ))}
        </LibraryGrid>
      </ReadingSection>

      {/* ── Interests ─────────────────────────────────────────── */}
      <InterestsSection>
        <Reveal>
          <SectionTitle
            eyebrow="Curiosities"
            title="The questions I keep coming back to."
            body="These aren't hobbies in the conventional sense — they're more like obsessions that refuse to resolve."
          />
        </Reveal>

        <InterestGrid>
          {interests.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <InterestCard>
                <InterestIcon>
                  <item.icon size={18} />
                </InterestIcon>
                <InterestTitle>{item.title}</InterestTitle>
                <InterestBody>{item.body}</InterestBody>
              </InterestCard>
            </Reveal>
          ))}
        </InterestGrid>
      </InterestsSection>
    </Page>
  )
}
