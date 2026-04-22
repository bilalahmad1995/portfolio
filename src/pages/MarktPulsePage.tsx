import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart2,
  Bot,
  CheckCircle2,
  Gauge,
  Layers,
  LineChart,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { marktPulseProject } from '../content/siteContent'
import { techIconMap } from '../utils/techIcons'

const Page = styled(motion.div)`
  display: grid;
  gap: 5rem;

  @media (max-width: 680px) {
    gap: 3rem;
  }
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: color 180ms ease;

  &:hover {
    color: var(--text);
  }
`

const Hero = styled.section`
  position: relative;
  display: grid;
  gap: 1.5rem;
  padding: clamp(2.5rem, 5vw, 4.5rem);
  border-radius: calc(var(--radius-xl) + 6px);
  border: 1px solid rgba(17, 32, 51, 0.08);
  background:
    radial-gradient(circle at 86% 14%, rgba(231, 167, 94, 0.16), transparent 30rem),
    radial-gradient(circle at 5% 90%, rgba(14, 143, 131, 0.18), transparent 24rem),
    linear-gradient(135deg, rgba(20, 32, 47, 0.98), rgba(18, 31, 46, 0.95));
  color: white;
  overflow: hidden;
  box-shadow: var(--shadow);
`

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--warm);
  background: rgba(231, 167, 94, 0.16);
  line-height: 1.5;
`

const HeroTitle = styled.h1`
  max-width: 17ch;
  font-size: clamp(2.2rem, 7vw, 5.4rem);
  line-height: 0.97;
  color: white;
`

const Subtitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  width: fit-content;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
  font-weight: 600;

  @media (max-width: 680px) {
    align-items: flex-start;
    border-radius: var(--radius-md);
    line-height: 1.5;
  }
`

const HeroPara = styled.p`
  max-width: 62ch;
  font-size: 1.06rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.72) !important;
`

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: grid;
  gap: 1.2rem;
  padding: 1.6rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
`

const DarkCard = styled(Card)`
  background: linear-gradient(135deg, rgba(20, 32, 47, 0.96), rgba(23, 38, 58, 0.95));
  color: white;
  border-color: rgba(255, 255, 255, 0.06);

  h2,
  h3 {
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.7) !important;
  }
`

const GoalList = styled.div`
  display: grid;
  gap: 0.75rem;
`

const GoalItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: start;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.55;
`

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const PlatformCard = styled.div`
  display: grid;
  gap: 0.85rem;
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: inset 3px 0 0 var(--accent), var(--shadow-soft);
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const FeatureReveal = styled(Reveal)`
  grid-column: span 6;
  display: grid;

  @media (max-width: 960px) {
    grid-column: span 6;
  }

  &:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }

  @media (max-width: 760px) {
    grid-column: 1 / -1;
  }
`

const FeatureCard = styled.div`
  display: grid;
  gap: 0.75rem;
  height: 100%;
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
`

const IconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 14px;
  color: var(--accent);
  background: rgba(14, 143, 131, 0.1);
`

const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`

const StackPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: rgba(14, 143, 131, 0.1);
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(14, 143, 131, 0.16);
`

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

const ImpactCard = styled.div`
  display: grid;
  gap: 0.55rem;
  padding: 1.35rem;
  border-radius: var(--radius-lg);
  background: rgba(20, 32, 47, 0.96);
  color: white;
  box-shadow: var(--shadow-soft);

  strong {
    font-size: 1.75rem;
    line-height: 1;
    color: var(--warm);
  }

  p {
    color: rgba(255, 255, 255, 0.68) !important;
    font-size: 0.92rem;
  }
`

const CtaCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.6rem 2rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.4rem;
  }
`

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.3rem;
  border-radius: 999px;
  color: white;
  font-weight: 700;
  background: linear-gradient(135deg, var(--surface-dark), #21324a);
  box-shadow: 0 14px 30px rgba(20, 32, 47, 0.18);
  transition: opacity 180ms ease, transform 180ms ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
`

const featureIcons = [Gauge, LineChart, BarChart2, Target, Bot, Layers, CheckCircle2]

export function MarktPulsePage() {
  return (
    <Page
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Reveal>
        <BackLink to="/portfolio">
          <ArrowLeft size={16} /> Back to Portfolio
        </BackLink>
      </Reveal>

      <Reveal>
        <Hero>
          <Eyebrow>{marktPulseProject.context}</Eyebrow>
          <HeroTitle>{marktPulseProject.title}</HeroTitle>
          <Subtitle>{marktPulseProject.subtitle}</Subtitle>
          <HeroPara>{marktPulseProject.overview}</HeroPara>
        </Hero>
      </Reveal>

      <TwoCol>
        <Reveal>
          <Card>
            <SectionTitle
              eyebrow="Context"
              title="Commercial data without the swivel-chair reporting."
              body={marktPulseProject.problem}
            />
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <DarkCard>
            <SectionTitle
              eyebrow="My Role"
              title="Full-stack delivery from dashboard to API."
              body={marktPulseProject.role}
            />
          </DarkCard>
        </Reveal>
      </TwoCol>

      <Reveal>
        <Card>
          <SectionTitle
            eyebrow="Goal"
            title="A single commercial command center."
            body="The product was designed around the questions leadership teams ask every week: what changed, where are the risks, and what should we do next?"
          />
          <GoalList>
            {marktPulseProject.goals.map((goal) => (
              <GoalItem key={goal}>
                <CheckCircle2 size={16} style={{ marginTop: '0.2rem', color: 'var(--accent)' }} />
                <span>{goal}</span>
              </GoalItem>
            ))}
          </GoalList>
        </Card>
      </Reveal>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Platform Layers"
            title="Frontend, backend, data models, and AI working together."
            body="The architecture connects a polished dashboard experience to API endpoints, modeled data, spreadsheet inputs, and AI-generated business summaries."
          />
        </Reveal>

        <PlatformGrid style={{ marginTop: '1.5rem' }}>
          {marktPulseProject.platformLayers.map((layer, index) => {
            const Icon = [LineChart, Layers, Bot][index]

            return (
              <Reveal key={layer.title} delay={index * 0.08}>
                <PlatformCard>
                  <IconWrap>
                    <Icon size={18} />
                  </IconWrap>
                  <h3>{layer.title}</h3>
                  <p>{layer.body}</p>
                </PlatformCard>
              </Reveal>
            )
          })}
        </PlatformGrid>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Key Features"
            title="Built around sales, marketing, attribution, and executive reporting."
            body="Each view turns messy commercial data into a usable workflow for monitoring performance and deciding where to focus."
          />
        </Reveal>

        <FeaturesGrid style={{ marginTop: '1.5rem' }}>
          {marktPulseProject.features.map((feature, index) => {
            const Icon = featureIcons[index] ?? CheckCircle2

            return (
              <FeatureReveal key={feature.title} delay={index * 0.05}>
                <FeatureCard>
                  <IconWrap>
                    <Icon size={18} />
                  </IconWrap>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </FeatureCard>
              </FeatureReveal>
            )
          })}
        </FeaturesGrid>
      </section>

      <Reveal>
        <Card>
          <SectionTitle
            eyebrow="Tech Stack"
            title="A modern commercial intelligence stack."
            body="The project combines frontend product work, backend API engineering, modeled analytics data, spreadsheet processing, and applied AI."
          />
          <StackGrid>
            {marktPulseProject.techStack.map((tech) => {
              const Icon = techIconMap[tech] ?? Layers

              return (
                <StackPill key={tech}>
                  <span>{tech}</span>
                  <Icon size={14} />
                </StackPill>
              )
            })}
          </StackGrid>
        </Card>
      </Reveal>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Impact"
            title="From scattered reports to leadership-ready intelligence."
            body="Markt Pulse shows how analytics and AI can reduce manual reporting effort while making pipeline, marketing, and revenue drivers easier to act on."
          />
        </Reveal>

        <ImpactGrid style={{ marginTop: '1.5rem' }}>
          {marktPulseProject.impact.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <ImpactCard>
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </ImpactCard>
            </Reveal>
          ))}
        </ImpactGrid>
      </section>

      <Reveal>
        <CtaCard>
          <div>
            <h3>Outcome</h3>
            <p>{marktPulseProject.outcome}</p>
          </div>
          <PrimaryBtn to="/contact">
            Discuss a data product <ArrowUpRight size={16} />
          </PrimaryBtn>
        </CtaCard>
      </Reveal>
    </Page>
  )
}
