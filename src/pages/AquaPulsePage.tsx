import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Database, Filter, LayoutDashboard, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { aquaPulseProject } from '../content/siteContent'
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
  background: linear-gradient(135deg, rgba(20, 32, 47, 0.97), rgba(23, 40, 60, 0.93));
  color: white;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: auto -5% -30% auto;
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(231, 167, 94, 0.22), transparent 62%);
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
  white-space: normal;
  line-height: 1.5;
  color: var(--warm);
  background: rgba(231, 167, 94, 0.18);
`

const HeroTitle = styled.h1`
  max-width: 14ch;
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
  letter-spacing: 0.04em;
`

const HeroPara = styled.p`
  max-width: 60ch;
  font-size: 1.08rem;
  color: rgba(255, 255, 255, 0.72) !important;
  line-height: 1.75;
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
  gap: 1rem;
  padding: 1.6rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
`

const DarkCard = styled(Card)`
  background: rgba(20, 32, 47, 0.96);
  color: white;

  p {
    color: rgba(255, 255, 255, 0.7) !important;
  }
`

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const StackPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.92rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.15);
`

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const ApproachCard = styled.div`
  display: grid;
  gap: 0.85rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  counter-increment: approach;

  &::before {
    content: '0' counter(approach);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--accent);
  }
`

const ApproachWrap = styled.div`
  counter-reset: approach;
  display: contents;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  display: grid;
  gap: 0.75rem;
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
`

const FeatureTitle = styled.h4`
  font-size: 1rem;
  color: var(--text);
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const MetricCard = styled.div`
  display: grid;
  gap: 0.7rem;
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);

  strong {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    letter-spacing: -0.04em;
    color: var(--accent);
  }
`

const InsightList = styled.div`
  display: grid;
  gap: 0.85rem;
`

const InsightItem = styled.div`
  display: flex;
  gap: 0.85rem;
  align-items: start;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(14, 143, 131, 0.07);
  border: 1px solid rgba(14, 143, 131, 0.12);
  font-size: 0.97rem;
  line-height: 1.6;
  color: var(--text);
`

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`

const ImpactCard = styled.div`
  display: grid;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);

  strong {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    letter-spacing: -0.03em;
    color: var(--accent);
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

const CtaText = styled.div`
  display: grid;
  gap: 0.3rem;

  h3 {
    font-size: 1.1rem;
  }
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
`

const icons = [Database, Filter, LayoutDashboard]
const impactIcons = [TrendingUp, Filter, LayoutDashboard]


export function AquaPulsePage() {
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
          <Eyebrow>{aquaPulseProject.context}</Eyebrow>
          <HeroTitle>{aquaPulseProject.title}</HeroTitle>
          <Subtitle>{aquaPulseProject.subtitle}</Subtitle>
          <HeroPara>{aquaPulseProject.overview}</HeroPara>
        </Hero>
      </Reveal>

      <TwoCol>
        <Reveal>
          <Card>
            <SectionTitle
              eyebrow="Problem"
              title="Separate ad exports created a fragmented picture."
              body={aquaPulseProject.problem}
            />
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <DarkCard>
            <SectionTitle
              eyebrow="Tech Stack"
              title="BI stack built for fast stakeholder reporting."
              body="Power Query handled ETL and normalization, while using to Power BI and DAX turned the prepared dataset into an interactive cross-channel dashboard."
            />
            <StackRow>
              {aquaPulseProject.techStack.map((tech) => {
                const Icon = techIconMap[tech] ?? Database

                return (
                  <StackPill key={tech}>
                    <Icon size={14} />
                    <span>{tech}</span>
                  </StackPill>
                )
              })}
            </StackRow>
          </DarkCard>
        </Reveal>
      </TwoCol>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Approach"
            title="From raw CSV files to a unified marketing model."
            body="The project centered on making multiple advertising exports comparable, trustworthy, and easy to analyze in one reporting surface."
          />
        </Reveal>

        <ApproachGrid style={{ marginTop: '1.5rem' }}>
          <ApproachWrap>
            {aquaPulseProject.approach.map((item, index) => {
              const Icon = icons[index]

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <ApproachCard>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </ApproachCard>
                </Reveal>
              )
            })}
          </ApproachWrap>
        </ApproachGrid>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Dashboard Features"
            title="Cross-channel reporting built for exploration."
            body="The dashboard was designed to surface marketing performance quickly while still allowing drill-downs by the business dimensions that mattered."
          />
        </Reveal>

        <FeaturesGrid style={{ marginTop: '1.5rem' }}>
          {aquaPulseProject.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <FeatureCard>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <p>{feature.body}</p>
              </FeatureCard>
            </Reveal>
          ))}
        </FeaturesGrid>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Key Metrics"
            title="Important numbers extracted from the data."
            body="These headline metrics capture the scale of the marketing activity and the kinds of KPIs the dashboard made accessible."
          />
        </Reveal>

        <MetricsGrid style={{ marginTop: '1.5rem' }}>
          {aquaPulseProject.metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.06}>
              <MetricCard>
                <strong>{metric.value}</strong>
                <h4>{metric.label}</h4>
                <p>{metric.detail}</p>
              </MetricCard>
            </Reveal>
          ))}
        </MetricsGrid>
      </section>

      <TwoCol>
        <Reveal>
          <Card>
            <SectionTitle
              eyebrow="Insights"
              title="What the dashboard made easier to see."
              body="The main value was not just prettier reporting. It was the ability to compare cost and conversion behavior consistently across channels."
            />
            <InsightList>
              {aquaPulseProject.insights.map((insight) => (
                <InsightItem key={insight}>
                  <CheckCircle2 size={17} style={{ marginTop: '0.1rem', flexShrink: 0, color: 'var(--accent)' }} />
                  <span>{insight}</span>
                </InsightItem>
              ))}
            </InsightList>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card>
            <SectionTitle
              eyebrow="Data Preparation"
              title="Important ETL and quality work behind the scenes."
              body="A lot of the project value came from getting the data into a dependable analytical shape before visualization."
            />
            <InsightList>
              {aquaPulseProject.dataChallenges.map((item) => (
                <InsightItem key={item}>
                  <CheckCircle2 size={17} style={{ marginTop: '0.1rem', flexShrink: 0, color: 'var(--warm)' }} />
                  <span>{item}</span>
                </InsightItem>
              ))}
            </InsightList>
          </Card>
        </Reveal>
      </TwoCol>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Impact"
            title="Cleaner reporting, faster marketing insight."
            body="This work turned messy platform-level exports into a dashboard that stakeholders could actually use to understand channel effectiveness."
          />
        </Reveal>

        <ImpactGrid style={{ marginTop: '1.5rem' }}>
          {aquaPulseProject.impact.map((item, index) => {
            const Icon = impactIcons[index]

            return (
              <Reveal key={item.label} delay={index * 0.06}>
                <ImpactCard>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '2.6rem', height: '2.6rem', borderRadius: '14px', background: 'rgba(14,143,131,0.1)', color: 'var(--accent)' }}>
                    <Icon size={18} />
                  </div>
                  <strong>{item.value}</strong>
                  <h4>{item.label}</h4>
                  <p>{item.detail}</p>
                </ImpactCard>
              </Reveal>
            )
          })}
        </ImpactGrid>
      </section>

      <Reveal>
        <CtaCard>
          <CtaText>
            <h3>Want the walkthrough behind the dashboard?</h3>
            <p>Happy to explain the Power Query transformations, KPI logic, and Power BI modeling choices in more detail.</p>
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
