import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, GraduationCap, LineChart, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import {
  caseStudies,
  aquaPulseProject,
  education,
  portfolioImages,
  salesFunnelProject,
  samsungCQCProject,
} from '../content/siteContent'

const analyticsImageSrcSet = [
  'https://images.pexels.com/photos/7947997/pexels-photo-7947997.jpeg?auto=compress&cs=tinysrgb&w=640 640w',
  'https://images.pexels.com/photos/7947997/pexels-photo-7947997.jpeg?auto=compress&cs=tinysrgb&w=900 900w',
  'https://images.pexels.com/photos/7947997/pexels-photo-7947997.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w',
].join(', ')

const solarFarmImageSrcSet = [
  'https://images.pexels.com/photos/18316987/pexels-photo-18316987.jpeg?auto=compress&cs=tinysrgb&w=640 640w',
  'https://images.pexels.com/photos/18316987/pexels-photo-18316987.jpeg?auto=compress&cs=tinysrgb&w=900 900w',
  'https://images.pexels.com/photos/18316987/pexels-photo-18316987.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w',
].join(', ')

const infrastructureImageSrcSet = [
  'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=640 640w',
  'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=900 900w',
  'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w',
].join(', ')

const Page = styled(motion.div)`
  display: grid;
  gap: 5rem;

  @media (max-width: 680px) {
    gap: 3rem;
  }
`

const Intro = styled.section`
  display: grid;
  gap: 1.35rem;
  padding: clamp(1.7rem, 4vw, 3rem);
  border-radius: calc(var(--radius-xl) + 6px);
  border: 1px solid rgba(17, 32, 51, 0.08);
  background:
    linear-gradient(135deg, rgba(20, 32, 47, 0.95), rgba(23, 40, 60, 0.92)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent);
  color: white;
  box-shadow: var(--shadow);

  p {
    max-width: 65ch;
    color: rgba(255, 255, 255, 0.72);
  }
`

const Eyebrow = styled.span`
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 800;
`

const IntroTitle = styled.h1`
  max-width: 12ch;
  font-size: clamp(2.4rem, 7vw, 5.6rem);
  line-height: 0.96;
`

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const CaseCard = styled(motion.article)`
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(17, 32, 51, 0.08);
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-soft);
  transition: box-shadow 200ms ease;

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`

const CaseHeader = styled.div`
  display: grid;
  gap: 0.45rem;
`

const CaseContext = styled.span`
  color: var(--accent);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
`

const CaseBody = styled.div`
  display: grid;
  gap: 0.85rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const Tag = styled.span`
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  color: var(--text);
  font-size: 0.88rem;
  background: rgba(17, 32, 51, 0.05);
`

const Outcome = styled.div`
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(14, 143, 131, 0.08);
  border: 1px solid rgba(14, 143, 131, 0.14);
  font-size: 0.96rem;
  line-height: 1.65;
  color: var(--text);
`

const Split = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.08);
`

const FeatureRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
`

const IconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 18px;
  color: white;
  background: linear-gradient(135deg, var(--accent), #0d776e);
`

const EducationCard = styled.div`
  display: grid;
  gap: 0.8rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  background: rgba(17, 32, 51, 0.03);
`


const AccentLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  width: fit-content;
  padding: 0.95rem 1.4rem;
  border-radius: 999px;
  color: white;
  font-weight: 700;
  background: linear-gradient(135deg, var(--surface-dark), #21324a);
  box-shadow: 0 16px 36px rgba(20, 32, 47, 0.18);
  transition: opacity 180ms ease, transform 180ms ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
`

const FeaturedProjectsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const FullWidthProjectReveal = styled(Reveal)`
  grid-column: 1 / -1;
  min-width: 0;

  @media (max-width: 960px) {
    grid-column: 1 / -1;
  }
`

const HalfProjectReveal = styled(Reveal)`
  grid-column: span 6;
  min-width: 0;

  @media (max-width: 960px) {
    grid-column: 1 / -1;
  }
`

const ProjectTile = styled(Link)`
  position: relative;
  min-height: 430px;
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  display: block;
  transition: box-shadow 220ms ease, transform 220ms ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 500ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(10, 20, 36, 0.18) 0%,
      rgba(10, 20, 36, 0.82) 100%
    );
    transition: background 300ms ease;
  }

  &:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-3px);
  }

  &:hover img {
    transform: scale(1.04);
  }

  &:hover::after {
    background: linear-gradient(
      180deg,
      rgba(10, 20, 36, 0.22) 0%,
      rgba(10, 20, 36, 0.88) 100%
    );
  }
`

const FullWidthProjectTile = styled(ProjectTile)`
  height: 430px;
  min-height: 430px;
  max-height: 430px;

  @media (max-width: 680px) {
    height: 300px;
    min-height: 300px;
    max-height: 300px;
  }
`

const HalfProjectTile = styled(ProjectTile)`
  min-height: 430px;

  @media (max-width: 680px) {
    min-height: 280px;
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 1.6rem;
  z-index: 1;
  display: grid;
  gap: 0.6rem;
`

const ProjectEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  width: fit-content;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(14, 143, 131, 0.22);
`

const ProjectOverlayTitle = styled.h3`
  font-size: 1.35rem;
  line-height: 1.2;
  color: white;
  max-width: 20ch;
`

const ProjectOverlayDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72) !important;
  max-width: 38ch;
`

const ProjectOverlayWide = styled(ProjectOverlay)`
  max-width: 720px;
`

const ProjectArrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.25rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 200ms ease, gap 200ms ease;

  ${ProjectTile}:hover & {
    color: white;
    gap: 0.65rem;
  }
`

export function PortfolioPage() {
  const icons = [Cpu, LineChart, ShieldCheck]

  return (
    <Page
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
            <Split>
                      <Reveal delay={0.1}>
          <FeatureCard>
            <SectionTitle
              eyebrow="Background"
              title="Academic foundation and continued learning."
              body=""
            />

            {education.map((item) => (
              <EducationCard key={item.school}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <GraduationCap size={20} />
                  <strong>{item.degree}</strong>
                </div>
                <div>{item.school}</div>
                <p>{item.detail}</p>
                <small style={{ color: 'var(--text-muted)' }}>{item.period}</small>
              </EducationCard>
            ))}

          </FeatureCard>
        </Reveal>
        <Reveal>
          <FeatureCard>
            <SectionTitle
              eyebrow="Working Style"
              title="What collaborators can expect."
              body="I enjoy projects that need both implementation and explanation, where the right answer is not only technically sound but also easy for other teams to adopt."
            />

            {[
              {
                title: 'Systems thinking',
                body: 'I look at pipelines, dashboards, models, and workflows as one connected product rather than separate tasks.',
              },
              {
                title: 'Evidence-led decisions',
                body: 'Whether it is analytics or modeling, I prefer measured conclusions over assumptions, especially when communicating tradeoffs.',
              },
              {
                title: 'Clean technical storytelling',
                body: 'Documentation, KPI definitions, and reproducibility matter because good work should survive handoff.',
              },
            ].map((item, index) => {
              const Icon = icons[index]

              return (
                <FeatureRow key={item.title}>
                  <IconWrap>
                    <Icon size={20} />
                  </IconWrap>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </FeatureRow>
              )
            })}
          </FeatureCard>
        </Reveal>


      </Split>
      <Reveal>
        <Intro>
          <Eyebrow>Portfolio</Eyebrow>
          <IntroTitle>Selected work across pipelines, products, and predictive systems.</IntroTitle>
          <p>
            This portfolio is grounded in real experience from enterprise data engineering,
            analytics, manufacturing intelligence, internal tooling, and transformer-based research.
          </p>
        </Intro>
      </Reveal>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Case Studies"
            title="Projects that blend technical depth with business value."
            body="I’m most interested in work where engineering quality and measurable outcomes both matter. These projects show that range."
          />
        </Reveal>

        <CaseGrid style={{ marginTop: '1.5rem' }}>
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.08}>
              <CaseCard whileHover={{ y: -6 }}>
                <CaseHeader>
                  <CaseContext>{study.context}</CaseContext>
                  <h3>{study.title}</h3>
                </CaseHeader>

                <CaseBody>
                  <p>
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p>
                    <strong>What I did:</strong> {study.work}
                  </p>
                </CaseBody>

                <Outcome>{study.impact}</Outcome>

                <Tags>
                  {study.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
              </CaseCard>
            </Reveal>
          ))}
        </CaseGrid>
      </section>

      <FeaturedProjectsGrid>
        <FullWidthProjectReveal>
          <FullWidthProjectTile to="/portfolio/aqua-pulse">
            <img
              src={portfolioImages.analytics.src}
              srcSet={analyticsImageSrcSet}
              sizes="(max-width: 640px) 100vw, 92vw"
              alt={portfolioImages.analytics.alt}
              loading="lazy"
            />
            <ProjectOverlayWide>
              <ProjectEyebrow style={{ color: 'var(--warm)', background: 'rgba(231,167,94,0.2)' }}>
                {aquaPulseProject.context}
              </ProjectEyebrow>
              <ProjectOverlayTitle>{aquaPulseProject.title}</ProjectOverlayTitle>
              <ProjectOverlayDesc>{aquaPulseProject.tagline}</ProjectOverlayDesc>
              <ProjectArrow>
                View case study <ArrowUpRight size={14} />
              </ProjectArrow>
            </ProjectOverlayWide>
          </FullWidthProjectTile>
        </FullWidthProjectReveal>

        <HalfProjectReveal delay={0.06}>
          <HalfProjectTile to="/portfolio/sales-funnel">
            <img
              src={portfolioImages.solarFarm.src}
              srcSet={solarFarmImageSrcSet}
              sizes="(max-width: 640px) 100vw, 46vw"
              alt={portfolioImages.solarFarm.alt}
              loading="lazy"
            />
            <ProjectOverlay>
              <ProjectEyebrow>{salesFunnelProject.context}</ProjectEyebrow>
              <ProjectOverlayTitle>{salesFunnelProject.title}</ProjectOverlayTitle>
              <ProjectOverlayDesc>{salesFunnelProject.tagline}</ProjectOverlayDesc>
              <ProjectArrow>
                View case study <ArrowUpRight size={14} />
              </ProjectArrow>
            </ProjectOverlay>
          </HalfProjectTile>
        </HalfProjectReveal>

        <HalfProjectReveal delay={0.1}>
          <HalfProjectTile to="/portfolio/samsung-cqc">
            <img
              src={portfolioImages.infrastructure.src}
              srcSet={infrastructureImageSrcSet}
              sizes="(max-width: 640px) 100vw, 46vw"
              alt={portfolioImages.infrastructure.alt}
              loading="lazy"
            />
            <ProjectOverlay>
              <ProjectEyebrow style={{ color: 'var(--warm)', background: 'rgba(231,167,94,0.2)' }}>
                {samsungCQCProject.context}
              </ProjectEyebrow>
              <ProjectOverlayTitle>{samsungCQCProject.title}</ProjectOverlayTitle>
              <ProjectOverlayDesc>{samsungCQCProject.tagline}</ProjectOverlayDesc>
              <ProjectArrow>
                View case study <ArrowUpRight size={14} />
              </ProjectArrow>
            </ProjectOverlay>
          </HalfProjectTile>
        </HalfProjectReveal>
      </FeaturedProjectsGrid>

      <Reveal>
        <FeatureCard>
          <SectionTitle
            eyebrow="Next Step"
            title="Interested in the work behind the summary?"
            body="I’m happy to walk through the context, technical choices, and business outcomes in more detail."
          />
          <AccentLink to="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </AccentLink>
        </FeatureCard>
      </Reveal>
    </Page>
  )
}
