import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, BookOpen, Brain, Briefcase, Code2, Database, Sparkles, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { experienceTimeline, focusAreas, impactStats, portfolioImages, siteMeta, skillGroups } from '../content/siteContent'

const analyticsImageSrcSet = [
  'https://images.pexels.com/photos/7947997/pexels-photo-7947997.jpeg?auto=compress&cs=tinysrgb&w=640 640w',
  'https://images.pexels.com/photos/7947997/pexels-photo-7947997.jpeg?auto=compress&cs=tinysrgb&w=900 900w',
  'https://images.pexels.com/photos/7947997/pexels-photo-7947997.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w',
].join(', ')

const Page = styled(motion.div)`
  display: grid;
  gap: 5rem;

  @media (max-width: 680px) {
    gap: 3rem;
  }
`

const Hero = styled.section`
  display: block;
`

const HeroCard = styled.div`
  position: relative;
  display: grid;
  gap: 1.4rem;
  padding: clamp(2.5rem, 5vw, 4.5rem);
  border-radius: calc(var(--radius-xl) + 6px);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 250, 242, 0.75)),
    linear-gradient(180deg, rgba(14, 143, 131, 0.09), transparent);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    width: 4px;
    background: linear-gradient(180deg, var(--accent), transparent);
    border-radius: 4px 0 0 4px;
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto -6% -24% auto;
    width: 22rem;
    height: 22rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14, 143, 131, 0.2), transparent 62%);
  }
`

const HeroTitle = styled.h1`
  max-width: 12ch;
  font-size: clamp(2.8rem, 8vw, 7.5rem);
  line-height: 0.94;
`

const Lead = styled.p`
  max-width: 56ch;
  font-size: 1.1rem;
  line-height: 1.78;
`

const InlineMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const MetaChip = styled.div`
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  font-size: 0.92rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(17, 32, 51, 0.06);
`

const OverviewGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const OverviewStack = styled.div`
  display: grid;
  gap: 1rem;
`

const InsightCard = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.35rem;
  border-radius: var(--radius-lg);
  background: rgba(20, 32, 47, 0.95);
  color: white;
  box-shadow: var(--shadow);
`

const InsightLabel = styled.span`
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
`

const InsightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const InsightMetric = styled.div`
  padding: 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.08);

  strong {
    display: block;
    font-size: 2rem;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -0.03em;
  }

  span {
    display: block;
    margin-top: 0.4rem;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    line-height: 1.55;
  }
`

const StoryCard = styled.div`
  display: grid;
  gap: 0.9rem;
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(17, 32, 51, 0.07);
  box-shadow: var(--shadow-soft);
`

const ImageCard = styled.div`
  position: relative;
  min-height: 300px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(17, 32, 51, 0.07);
  box-shadow: var(--shadow-soft);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.02);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(17, 32, 51, 0.02), rgba(17, 32, 51, 0.65));
  }
`

const ImageCaption = styled.div`
  position: absolute;
  left: 1.1rem;
  right: 1.1rem;
  bottom: 1.1rem;
  z-index: 1;
  display: grid;
  gap: 0.3rem;
  color: white;

  span {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.74);
    font-weight: 700;
  }

  a {
    width: fit-content;
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.78);
    text-decoration: underline;
    text-underline-offset: 0.18rem;
  }
`

/* ── Tech DNA card (replaces image card in overview) ──── */

const TechDnaCard = styled.div`
  position: relative;
  border-radius: var(--radius-lg);
  background: rgba(12, 18, 30, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: var(--shadow);
  overflow: hidden;
  padding: 1.8rem;
  display: grid;
  gap: 1.6rem;
  align-content: start;

  /* subtle dot-grid */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events: none;
  }

  /* teal glow */
  &::after {
    content: '';
    position: absolute;
    top: -5rem;
    right: -3rem;
    width: 22rem;
    height: 16rem;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14, 143, 131, 0.18), transparent 65%);
    pointer-events: none;
  }

  @media (max-width: 680px) {
    padding: 1.15rem;
    gap: 1.2rem;
  }
`

const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  position: relative;
  z-index: 1;

  @media (max-width: 680px) {
    flex-wrap: wrap;
    row-gap: 0.4rem;
  }
`

const TerminalDot = styled.span<{ $color: string }>`
  width: 0.62rem;
  height: 0.62rem;
  border-radius: 50%;
  background: ${(p) => p.$color};
  opacity: 0.85;
`

const TerminalTitle = styled.span`
  font-size: 0.79rem;
  color: rgba(255, 255, 255, 0.3);
  font-family: 'Space Grotesk', monospace;
  letter-spacing: 0.06em;
  margin-left: 0.35rem;

  @media (max-width: 680px) {
    flex-basis: 100%;
    margin-left: 0;
    font-size: 0.74rem;
    line-height: 1.35;
  }
`

const PipelineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
  z-index: 1;
  overflow-x: auto;
  padding-bottom: 0.1rem;

  @media (max-width: 680px) {
    flex-wrap: wrap;
    gap: 0.55rem;
    overflow-x: visible;
    padding-bottom: 0;
  }
`

const PipeNode = styled.div<{ $accent?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.48rem 0.85rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
  flex-shrink: 0;
  background: ${(p) => p.$accent ? 'rgba(14, 143, 131, 0.22)' : 'rgba(255, 255, 255, 0.07)'};
  border: 1px solid ${(p) => p.$accent ? 'rgba(14, 143, 131, 0.45)' : 'rgba(255, 255, 255, 0.09)'};
  color: ${(p) => p.$accent ? '#4dd8cc' : 'rgba(255, 255, 255, 0.72)'};

  @media (max-width: 680px) {
    flex: 1 1 calc(50% - 0.55rem);
    min-width: 0;
    padding: 0.58rem 0.75rem;
  }

  @media (max-width: 420px) {
    flex-basis: 100%;
  }
`

const PipeArrow = styled.span`
  color: rgba(255, 255, 255, 0.18);
  font-size: 0.85rem;
  padding: 0 0.3rem;
  flex-shrink: 0;

  @media (max-width: 680px) {
    display: none;
  }
`

const PillarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
`

const Pillar = styled.div`
  display: grid;
  gap: 0.65rem;
  align-content: start;
`

const PillarLabel = styled.span<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.71rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${(p) => p.$color};
  padding-bottom: 0.55rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`

const TechItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.87rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.4;

  &::before {
    content: '';
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
  }
`

const DnaMantra = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem 1.15rem;
  border-radius: var(--radius-md);
  background: rgba(14, 143, 131, 0.1);
  border-left: 3px solid rgba(14, 143, 131, 0.6);

  p {
    font-size: 0.93rem;
    color: rgba(255, 255, 255, 0.82);
    font-style: italic;
    line-height: 1.65;
  }
`

const DnaSupport = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0.85rem;
  padding-top: 0.2rem;
`

const DnaSupportHeader = styled.div`
  display: grid;
  gap: 0.2rem;

  span {
    display: block;
    font-size: 0.84rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.56);
  }

  p {
    font-size: 0.86rem;
    color: rgba(255, 255, 255, 0.58);
    line-height: 1.55;
  }
`

const DnaSupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

const DnaSupportPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
  padding: 0.7rem 0.8rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.84rem;
  font-weight: 600;

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }
`

const LiveBadge = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.38rem 0.75rem;
  border-radius: 999px;
  background: rgba(14, 143, 131, 0.16);
  border: 1px solid rgba(14, 143, 131, 0.3);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4dd8cc;

  &::before {
    content: '';
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 50%;
    background: #4dd8cc;
    box-shadow: 0 0 0 3px rgba(14, 143, 131, 0.28);
    animation: pulse 2.2s ease infinite;
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(14, 143, 131, 0.28); }
    50%       { box-shadow: 0 0 0 6px rgba(14, 143, 131, 0.08); }
  }

  @media (max-width: 680px) {
    position: static;
    justify-self: start;
  }
`

const StoryLabel = styled.span`
  color: var(--text-muted);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const MetricCard = styled(motion.article)`
  display: grid;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.07);
  box-shadow: var(--shadow-soft);
  transition: box-shadow 200ms ease;

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  strong {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.6rem;
    letter-spacing: -0.04em;
    line-height: 1;
    color: var(--surface-dark);
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
  }
`

const MetricCategory = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.7rem 0.3rem 0.4rem;
  border-radius: 999px;
  background: rgba(14, 143, 131, 0.1);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: fit-content;
`

const MetricDivider = styled.div`
  height: 1px;
  background: rgba(17, 32, 51, 0.07);
  margin: 0.1rem 0;
`

const ExpertiseCard = styled(MetricCard)`
  gap: 1rem;
`

const IconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 18px;
  color: var(--surface-dark);
  background: rgba(14, 143, 131, 0.12);
`

const Points = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const Point = styled.span`
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  font-size: 0.9rem;
  color: var(--text-muted);
  background: rgba(17, 32, 51, 0.04);
`

const Timeline = styled.div`
  display: grid;
  gap: 1rem;
`

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.07);
  box-shadow: inset 3px 0 0 var(--accent), var(--shadow-soft);
  transition: box-shadow 200ms ease;

  &:hover {
    box-shadow: inset 3px 0 0 var(--accent), var(--shadow-hover);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const Period = styled.span`
  color: var(--accent);
  font-weight: 800;
`

const TimelineBody = styled.div`
  display: grid;
  gap: 0.45rem;

  strong {
    font-size: 1.05rem;
  }

  span {
    color: var(--text-muted);
    font-weight: 700;
  }
`

const SkillsPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const SkillGroup = styled.div`
  display: grid;
  gap: 0.9rem;
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.07);
  box-shadow: var(--shadow-soft);
`

const SkillItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const SkillPill = styled.span`
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  background: rgba(14, 143, 131, 0.08);
  color: var(--text);
  font-size: 0.92rem;
`

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const VisualStoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const ActionCard = styled(StoryCard)`
  align-content: space-between;
  min-height: 100%;
`

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.4rem;

  @media (max-width: 480px) {
    flex-direction: column;

    a {
      justify-content: center;
    }
  }
`

const PrimaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.4rem;
  border-radius: 999px;
  color: white;
  font-weight: 700;
  background: linear-gradient(135deg, var(--surface-dark), #21324a);
  box-shadow: 0 16px 36px rgba(20, 32, 47, 0.2);
  transition: opacity 180ms ease, transform 180ms ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
`

const SecondaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.4rem;
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


export function HomePage() {
  const icons = [Database, BarChart3, Brain]
  const approachIcons = [Sparkles, Workflow, Briefcase]
  const collaborationTools = ['Office 365', 'MS Teams', 'Confluence', 'JIRA']
  const approach = [
    {
      title: 'Frame the real problem',
      body: 'I start by understanding the operational bottleneck, the business question, and the shape of the data before rushing into tools.',
    },
    {
      title: 'Engineer for clarity',
      body: 'Pipelines, analytics layers, and ML experiments only matter if they are reliable, explainable, and easy for teams to reuse.',
    },
    {
      title: 'Make insights usable',
      body: 'I like work that ends with cleaner decisions, faster workflows, and systems that someone else can confidently maintain.',
    },
  ]

  return (
    <Page
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero>
        <Reveal>
          <HeroCard>
            <HeroTitle>Building software & data systems into decisions people trust.</HeroTitle>
            <Lead>{siteMeta.intro}</Lead>
          </HeroCard>
        </Reveal>
      </Hero>

      <OverviewGrid>
        <Reveal>
          <TechDnaCard style={{ minHeight: '520px' }}>
            <LiveBadge>Available</LiveBadge>

            <TerminalBar>
              <TerminalDot $color="#ff5f57" />
              <TerminalDot $color="#febc2e" />
              <TerminalDot $color="#28c840" />
              <TerminalTitle>bilal.ahmad — stack.ts</TerminalTitle>
            </TerminalBar>

            <PipelineRow>
              <PipeNode>Ingest</PipeNode>
              <PipeArrow>→</PipeArrow>
              <PipeNode>Transform</PipeNode>
              <PipeArrow>→</PipeArrow>
              <PipeNode $accent>Model / BI</PipeNode>
              <PipeArrow>→</PipeArrow>
              <PipeNode>Insight</PipeNode>
              <PipeArrow>→</PipeArrow>
              <PipeNode>Decision</PipeNode>
            </PipelineRow>

            <PillarGrid>
              <Pillar>
                <PillarLabel $color="#60a5fa">
                  <Code2 size={11} /> Languages & Dev
                </PillarLabel>
                {['Python', 'SQL', 'TypeScript', 'React', 'REST APIs', 'Git / CI·CD'].map((t) => (
                  <TechItem key={t}>{t}</TechItem>
                ))}
              </Pillar>
              <Pillar>
                <PillarLabel $color="#f59e0b">
                  <Database size={11} /> Data & Cloud
                </PillarLabel>
                {['dbt', 'Snowflake', 'MS Fabric', 'AWS', 'Power BI', 'Tableau'].map((t) => (
                  <TechItem key={t}>{t}</TechItem>
                ))}
              </Pillar>
              <Pillar>
                <PillarLabel $color="#a78bfa">
                  <Brain size={11} /> AI / ML
                </PillarLabel>
                {['PyTorch', 'scikit-learn', 'Pandas', 'Matplotlib', 'Time Series', 'Predictive Analytics'].map((t) => (
                  <TechItem key={t}>{t}</TechItem>
                ))}
              </Pillar>
            </PillarGrid>

            <DnaMantra>
              <p>"I connect raw data to decisions people trust — through clean engineering, sharp analytics, and purposeful AI."</p>
            </DnaMantra>

            <DnaSupport>
              <DnaSupportHeader>
                <span>Project Management & Collaboration</span>
                <p>Office workflows, planning, handoff, and team communication tools I use comfortably in delivery environments.</p>
              </DnaSupportHeader>

              <DnaSupportGrid>
                {collaborationTools.map((tool) => (
                  <DnaSupportPill key={tool}>
                    <Workflow size={15} />
                    <span>{tool}</span>
                  </DnaSupportPill>
                ))}
              </DnaSupportGrid>
            </DnaSupport>
          </TechDnaCard>
        </Reveal>

        <OverviewStack>
          <Reveal delay={0.08}>
            <InsightCard>
              <InsightLabel>Snapshot</InsightLabel>
              <h2>From software engineering foundations to AI-driven analytics systems.</h2>
              <p>
                My background spans internal tools, manufacturing analytics,
                enterprise data pipelines, and transformer-based forecasting research.
              </p>

              <InsightGrid>
                <InsightMetric>
                  <strong>3</strong>
                  <span>interconnected pillars: software, data engineering, and data science</span>
                </InsightMetric>
                <InsightMetric>
                  <strong>3+</strong>
                  <span>years of professional experience across Germany and international clients</span>
                </InsightMetric>
              </InsightGrid>
            </InsightCard>
          </Reveal>

          <Reveal delay={0.16}>
            <ActionCard>
              <div>
                <StoryLabel>Current focus</StoryLabel>
                <h3>{siteMeta.role}</h3>
                <p>
                  I work across enterprise software and data pipelines, KPI design, internal tooling with a bias toward elegant, usable systems.
                </p>
              </div>

              <InlineMeta>
                <MetaChip>{siteMeta.location}</MetaChip>
                {/* <MetaChip>English fluent</MetaChip> */}
                <MetaChip>Open to impactful data and product work</MetaChip>
              </InlineMeta>

              <ActionRow>
                <PrimaryCta to="/portfolio">
                  Explore portfolio <ArrowRight size={18} />
                </PrimaryCta>
                <SecondaryCta to="/contact">Let&apos;s work together</SecondaryCta>
              </ActionRow>
            </ActionCard>
          </Reveal>
        </OverviewStack>
      </OverviewGrid>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Scope of Work"
            title="Delivered across software, data, and AI — end-to-end."
            body="Every project listed here reflects full ownership: from understanding the problem and designing the solution to shipping, iterating, and handing off something that lasts."
          />
        </Reveal>

        <StatsGrid>
          {impactStats.map((stat, index) => {
            const statIcons = [Code2, Database, Brain, BookOpen]
            const StatIcon = statIcons[index]

            return (
              <Reveal key={stat.label} delay={index * 0.08}>
                <MetricCard whileHover={{ y: -6 }}>
                  <MetricCategory>
                    <StatIcon size={12} />
                    {stat.category}
                  </MetricCategory>
                  <strong>{stat.value}</strong>
                  <MetricDivider />
                  <h3>{stat.label}</h3>
                  <p>{stat.detail}</p>
                </MetricCard>
              </Reveal>
            )
          })}
        </StatsGrid>
      </section>

      <section>
        <VisualStoryGrid>
          <Reveal>
            <ImageCard style={{ minHeight: '420px' }}>
              <img
                src={portfolioImages.analytics.src}
                srcSet={analyticsImageSrcSet}
                sizes="(max-width: 860px) 100vw, 58vw"
                alt={portfolioImages.analytics.alt}
                loading="lazy"
              />
              <ImageCaption>
                <span>Analytics</span>
                <h3>Making data legible enough to drive decisions.</h3>
              </ImageCaption>
            </ImageCard>
          </Reveal>

          <Reveal delay={0.08}>
            <StoryCard style={{ minHeight: '420px', alignContent: 'center' }}>
              <StoryLabel>What I enjoy most</StoryLabel>
              <h3>Building systems that move from messy inputs to measurable business outcomes.</h3>
              <p>
                That can mean designing a reporting pipeline, optimizing SQL for factory data,
                or testing whether a forecasting model actually captures temporal structure.
              </p>
              <p>
                The goal is not just technical correctness. It is clarity, repeatability,
                and trust in the result.
              </p>
            </StoryCard>
          </Reveal>
        </VisualStoryGrid>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Focus"
            title="The intersection where I do my best work."
            body="I’m especially energized by projects that need engineering discipline, analytics fluency, and just enough research thinking to push the solution further."
          />
        </Reveal>

        <CardsGrid style={{ marginTop: '1.5rem' }}>
          {focusAreas.map((area, index) => {
            const Icon = icons[index]

            return (
              <Reveal key={area.title} delay={index * 0.08}>
                <ExpertiseCard whileHover={{ y: -6 }}>
                  <IconWrap>
                    <Icon size={22} />
                  </IconWrap>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <Points>
                    {area.points.map((point) => (
                      <Point key={point}>{point}</Point>
                    ))}
                  </Points>
                </ExpertiseCard>
              </Reveal>
            )
          })}
        </CardsGrid>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Experience"
            title="A path through engineering, analytics, and research."
            body="Each role added a different layer: product thinking, software fundamentals, enterprise data handling, manufacturing analytics, and applied AI."
          />
        </Reveal>

        <Timeline style={{ marginTop: '1.5rem' }}>
          {experienceTimeline.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.06}>
              <TimelineItem>
                <Period>{item.period}</Period>
                <TimelineBody>
                  <strong>{item.role}</strong>
                  <span>{item.company}</span>
                  <p>{item.summary}</p>
                </TimelineBody>
              </TimelineItem>
            </Reveal>
          ))}
        </Timeline>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Toolkit"
            title="The stack behind the work."
            body="I’m comfortable moving between implementation and analysis, from Python and SQL to warehousing, dashboards, cloud services, and ML tooling."
          />
        </Reveal>

        <SkillsPanel style={{ marginTop: '1.5rem' }}>
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <SkillGroup>
                <h3>{group.title}</h3>
                <SkillItems>
                  {group.items.map((item) => (
                    <SkillPill key={item}>{item}</SkillPill>
                  ))}
                </SkillItems>
              </SkillGroup>
            </Reveal>
          ))}
        </SkillsPanel>
      </section>

      <section>
        <Reveal>
          <SectionTitle
            eyebrow="Approach"
            title="Minimal, modern, and built around communication."
            body="Good engineering is not only about clever implementation. It is also about reducing ambiguity, documenting clearly, and making systems easy to hand off."
          />
        </Reveal>

        <ApproachGrid style={{ marginTop: '1.5rem' }}>
          {approach.map((item, index) => {
            const Icon = approachIcons[index]

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <MetricCard whileHover={{ y: -6 }}>
                  <IconWrap>
                    <Icon size={22} />
                  </IconWrap>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </MetricCard>
              </Reveal>
            )
          })}
        </ApproachGrid>
      </section>
    </Page>
  )
}
