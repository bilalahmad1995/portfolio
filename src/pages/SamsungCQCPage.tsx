import { motion } from 'framer-motion'
import { ArrowLeft, BarChart2, Bot, CheckCircle2, Gauge, Layers, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { samsungCQCProject } from '../content/siteContent'
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
  display: grid;
  gap: 1.5rem;
  padding: clamp(2.5rem, 5vw, 4.5rem);
  border-radius: calc(var(--radius-xl) + 6px);
  border: 1px solid rgba(17, 32, 51, 0.08);
  background: linear-gradient(135deg, rgba(20, 32, 47, 0.97), rgba(17, 28, 44, 0.95));
  color: white;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -4rem;
    right: -4rem;
    width: 22rem;
    height: 22rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(231, 167, 94, 0.14), transparent 62%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5rem;
    left: -3rem;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14, 143, 131, 0.16), transparent 62%);
    pointer-events: none;
  }
`

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  max-width: fit-content;
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--warm);
  background: rgba(231, 167, 94, 0.16);
  white-space: normal;
  line-height: 1.5;
`

const HeroTitle = styled.h1`
  max-width: 18ch;
  font-size: clamp(2.2rem, 7vw, 5.5rem);
  line-height: 0.97;
  color: white;
`

const Subtitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  width: fit-content;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
  font-weight: 600;
`

const HeroPara = styled.p`
  max-width: 60ch;
  font-size: 1.06rem;
  color: rgba(255, 255, 255, 0.7) !important;
  line-height: 1.75;
`

const ScopeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  width: fit-content;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const ModuleCard = styled.div<{ accent?: string }>`
  display: grid;
  gap: 0.85rem;
  padding: 1.6rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: inset 3px 0 0 ${({ accent }) => accent ?? 'var(--accent)'}, var(--shadow-soft);
`

const ModuleLabel = styled.span<{ color?: string }>`
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ color }) => color ?? 'var(--accent)'};
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  display: grid;
  gap: 0.75rem;
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

const AnalyticsCard = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: var(--radius-lg);
  background: rgba(20, 32, 47, 0.96);
  color: white;
  box-shadow: var(--shadow);
`

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const ChartItem = styled.div`
  display: flex;
  align-items: start;
  gap: 0.55rem;
  padding: 0.75rem 0.9rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.07);
  font-size: 0.88rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.82);
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

const AICard = styled(Card)`
  background: linear-gradient(135deg, rgba(20, 32, 47, 0.96), rgba(23, 38, 58, 0.95));
  color: white;
  border-color: rgba(255, 255, 255, 0.06);

  p {
    color: rgba(255, 255, 255, 0.7) !important;
  }
`

const AIFeatureRow = styled.div`
  display: flex;
  align-items: start;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.07);
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
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

const CtaCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.6rem 2rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.4rem;
  }
  box-shadow: var(--shadow-soft);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const CtaText = styled.div`
  display: grid;
  gap: 0.3rem;

  h3 { font-size: 1.1rem; }
`

const CtaActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
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

  &:hover { opacity: 0.88; transform: translateY(-1px); }
`

const SecondaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.3rem;
  border-radius: 999px;
  color: var(--text);
  font-weight: 700;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(17, 32, 51, 0.1);
  transition: border-color 180ms ease, transform 180ms ease;

  &:hover { border-color: rgba(17, 32, 51, 0.2); transform: translateY(-1px); }
`

const featureIcons = [ShieldCheck, Layers, BarChart2, Zap, CheckCircle2, Bot]
const moduleAccents = ['var(--warm)', 'var(--accent)', 'rgba(14,143,131,0.6)']
const moduleColors = ['var(--warm)', 'var(--accent)', 'rgba(14,143,131,0.85)']


export function SamsungCQCPage() {
  return (
    <Page
      initial={{ opacity: 0, y: 18 }}
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
          <Eyebrow>{samsungCQCProject.context}</Eyebrow>
          <HeroTitle>{samsungCQCProject.title}</HeroTitle>
          <Subtitle>{samsungCQCProject.subtitle}</Subtitle>
          <HeroPara>{samsungCQCProject.overview}</HeroPara>
          <ScopeBadge>{samsungCQCProject.scope}</ScopeBadge>
        </Hero>
      </Reveal>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Modules"
            title="Three business areas, one platform."
            body="Each division has its own dedicated module and dashboards, all sharing a single authentication layer and data foundation."
          />
        </Reveal>

        <ModulesGrid style={{ marginTop: '1.5rem' }}>
          {samsungCQCProject.modules.map((mod, index) => (
            <Reveal key={mod.title} delay={index * 0.08}>
              <ModuleCard accent={moduleAccents[index]}>
                <ModuleLabel color={moduleColors[index]}>{mod.title}</ModuleLabel>
                <h3>{mod.title}</h3>
                <p>{mod.description}</p>
              </ModuleCard>
            </Reveal>
          ))}
        </ModulesGrid>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Features"
            title="Enterprise-grade capabilities built end-to-end."
            body="Every feature was designed around real complaint management workflows — from intake and tracking to AI-assisted analysis."
          />
        </Reveal>

        <FeaturesGrid style={{ marginTop: '1.5rem' }}>
          {samsungCQCProject.features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <FeatureCard>
                  <IconWrap><Icon size={18} /></IconWrap>
                  <h4 style={{ fontSize: '1rem' }}>{feature.title}</h4>
                  <p style={{ fontSize: '0.93rem' }}>{feature.body}</p>
                </FeatureCard>
              </Reveal>
            )
          })}
        </FeaturesGrid>
      </section>

      <Reveal>
        <AnalyticsCard>
          <SectionTitle
            eyebrow="Post-Sale Analytics"
            title="30+ charts built from scratch."
            body="The analytics dashboard gives stakeholders a complete picture of complaint trends, resolution quality, and process health — all in one view."
          />
          <ChartGrid>
            {samsungCQCProject.analytics.map((chart) => (
              <ChartItem key={chart}>
                <BarChart2 size={14} style={{ marginTop: '0.15rem', flexShrink: 0, color: 'var(--accent)', opacity: 0.8 }} />
                {chart}
              </ChartItem>
            ))}
          </ChartGrid>
        </AnalyticsCard>
      </Reveal>

      <TwoCol>
        <Reveal>
          <AICard>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '18px', background: 'rgba(14,143,131,0.2)', color: 'var(--accent)' }}>
              <Bot size={22} />
            </div>
            <SectionTitle
              eyebrow="CQC-AI Assistant"
              title="Claude-powered chatbot with live context."
              body="Sliding drawer powered by Claude claude-sonnet-4-5 with streaming responses and real database context injected on every query."
            />
            {[
              'Live DB context: complaint counts, OEM breakdown, PPM, and open cases injected per request',
              'Streaming responses via Anthropic API with cancel support',
              'Samsung-branded UI with suggestion chips and full markdown rendering',
            ].map((item) => (
              <AIFeatureRow key={item}>
                <CheckCircle2 size={15} style={{ marginTop: '0.1rem', flexShrink: 0, color: 'var(--accent)' }} />
                {item}
              </AIFeatureRow>
            ))}
          </AICard>
        </Reveal>

        <Reveal delay={0.08}>
          <Card>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '18px', background: 'rgba(14,143,131,0.2)', color: 'var(--accent)' }}>
            <Gauge size={22} />
          </div>

            <SectionTitle
              eyebrow="Quality Health Score"
              title="One composite KPI for the platform overall health."
              body="An animated SVG ring gauge (0–100) combining TAT performance, FA score, and complaint trend into a single at-a-glance metric."
            />
            {[
              'TAT performance weight — how many cases close within target',
              'FA score component — failure analysis completion rate',
              'Complaint trend factor — MoM volume change penalty/reward',
              'Smart Insights Panel auto-generates contextual YoY comparison cards'
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', fontSize: '0.93rem', lineHeight: '1.55' }}>
                <CheckCircle2 size={15} style={{ marginTop: '0.15rem', flexShrink: 0, color: 'var(--accent)' }} />
                <span style={{ color: 'var(--text-muted)' }}>{item}</span>
              </div>
            ))}
          </Card>
        </Reveal>
      </TwoCol>

      <Reveal>
        <Card>
          <SectionTitle
            eyebrow="Tech Stack"
            title="Modern full-stack from DB to UI."
            body="Built on a typed, production-grade stack with a clean separation between the React frontend and the Express + Prisma backend."
          />
          <StackGrid>
            {samsungCQCProject.techStack.map((tech) => {
              const Icon = techIconMap[tech] ?? Layers

              return (
                <StackPill key={tech}>
                  <Icon size={14} />
                  <span>{tech}</span>
                </StackPill>
              )
            })}
          </StackGrid>
        </Card>
      </Reveal>

      <Reveal>
        <CtaCard>
          <CtaText>
            <h3>Want a walkthrough of the platform?</h3>
            <p>Happy to demo the dashboard, 8D tracker, or AI assistant in a live session.</p>
          </CtaText>
          <CtaActions>
            <PrimaryBtn to="/contact">Get in touch</PrimaryBtn>
            <SecondaryBtn to="/portfolio">All projects</SecondaryBtn>
          </CtaActions>
        </CtaCard>
      </Reveal>
    </Page>
  )
}
