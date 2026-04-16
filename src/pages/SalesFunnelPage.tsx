import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Layers, TrendingUp, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { salesFunnelProject } from '../content/siteContent'
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
  background:
    linear-gradient(135deg, rgba(20, 32, 47, 0.97), rgba(23, 40, 60, 0.93));
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
    background: radial-gradient(circle, rgba(14, 143, 131, 0.22), transparent 62%);
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
  color: var(--accent);
  background: rgba(14, 143, 131, 0.18);
  white-space: normal;
  line-height: 1.5;
`

const HeroTitle = styled.h1`
  max-width: 16ch;
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

const TaglinePara = styled.p`
  max-width: 58ch;
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
  background: rgba(14, 143, 131, 0.1);
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 600;
  border: 1px solid rgba(14, 143, 131, 0.16);
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

  h4 {
    font-size: 0.95rem;
    color: var(--text);
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
  transition: opacity 180ms ease, transform 180ms ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
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

  &:hover {
    border-color: rgba(17, 32, 51, 0.2);
    transform: translateY(-1px);
  }
`

const impactIcons = [TrendingUp, Zap, Layers]


export function SalesFunnelPage() {
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
          <Eyebrow>{salesFunnelProject.context}</Eyebrow>
          <HeroTitle>{salesFunnelProject.title}</HeroTitle>
          <Subtitle>{salesFunnelProject.subtitle}</Subtitle>
          <TaglinePara>{salesFunnelProject.overview}</TaglinePara>
        </Hero>
      </Reveal>

      <TwoCol>
        <Reveal>
          <Card>
            <SectionTitle
              eyebrow="Problem"
              title="No unified view of the funnel."
              body={salesFunnelProject.problem}
            />
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <DarkCard>
            <SectionTitle
              eyebrow="Tech Stack"
              title="Modern data stack."
              body="End-to-end pipeline built with tools designed for scale, reproducibility, and business usability."
            />
            <StackRow>
              {salesFunnelProject.techStack.map((tech) => {
                const Icon = techIconMap[tech] ?? Layers

                return (
                  <StackPill key={tech} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>
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
            title="Three layers from raw data to business insight."
            body="Each layer of the pipeline had a clear responsibility — from modeled data in dbt, to a unified table in Snowflake, to an interactive dashboard in Streamlit."
          />
        </Reveal>

        <ApproachGrid style={{ marginTop: '1.5rem' }}>
          <ApproachWrap>
            {salesFunnelProject.approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <ApproachCard>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </ApproachCard>
              </Reveal>
            ))}
          </ApproachWrap>
        </ApproachGrid>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Features"
            title="Five analytical capabilities, one dashboard."
            body="Each feature was designed to answer a specific business question around the sales funnel."
          />
        </Reveal>

        <FeaturesGrid style={{ marginTop: '1.5rem' }}>
          {salesFunnelProject.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <FeatureCard>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <p>{feature.body}</p>
              </FeatureCard>
            </Reveal>
          ))}
        </FeaturesGrid>
      </section>

      <TwoCol>
        <Reveal>
          <Card>
            <SectionTitle
              eyebrow="Key Insights"
              title="What the data revealed."
              body="Three findings that directly shaped how the business understood and acted on its funnel."
            />
            <InsightList>
              {salesFunnelProject.insights.map((insight) => (
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
              eyebrow="Business Impact"
              title="Measurable outcomes for stakeholders."
              body="The dashboard moved the business from guesswork to grounded decision-making."
            />
            <ImpactGrid style={{ gridTemplateColumns: '1fr' }}>
              {salesFunnelProject.impact.map((item, index) => {
                const Icon = impactIcons[index]
                return (
                  <ImpactCard key={item.label} style={{ gridTemplateColumns: 'auto 1fr', display: 'grid', gap: '0.75rem', alignItems: 'start' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '2.6rem', height: '2.6rem', borderRadius: '14px', background: 'rgba(14,143,131,0.1)', color: 'var(--accent)' }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ display: 'grid', gap: '0.25rem' }}>
                      <h4 style={{ fontSize: '0.95rem' }}>{item.label}</h4>
                      <p style={{ fontSize: '0.9rem' }}>{item.detail}</p>
                    </div>
                  </ImpactCard>
                )
              })}
            </ImpactGrid>
          </Card>
        </Reveal>
      </TwoCol>

      <Reveal>
        <CtaCard>
          <CtaText>
            <h3>Interested in the technical details?</h3>
            <p>Happy to walk through the dbt models, Snowflake schema, or Streamlit architecture in more depth.</p>
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
