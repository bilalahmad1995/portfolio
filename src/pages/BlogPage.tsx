import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Rss, Send } from 'lucide-react'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { blogPosts, categoryConfig } from '../content/blogContent'

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
  padding: clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 3.5rem);
  border-radius: calc(var(--radius-xl) + 6px);
  background: linear-gradient(145deg, var(--surface-dark) 0%, #1c2f46 100%);
  color: white;
  display: grid;
  gap: 1.2rem;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 85% 50%, rgba(14, 143, 131, 0.18), transparent 60%);
    pointer-events: none;
  }
`

const HeroEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 800;
`

const HeroTitle = styled.h1`
  font-size: clamp(2.8rem, 6vw, 6rem);
  line-height: 0.95;
  color: white;
  overflow-wrap: break-word;
  max-width: 18ch;
`

const HeroBody = styled.p`
  color: rgba(255, 255, 255, 0.65);
  max-width: 38rem;
  line-height: 1.65;
`


const PostsSection = styled.section`
  display: grid;
  gap: 1.4rem;
`

/* ── Featured post ─────────────────────────────────────── */

const FeaturedLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease;
  text-decoration: none;

  &:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-3px);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const FeaturedAccent = styled.div`
  background: linear-gradient(145deg, var(--surface-dark) 0%, #1c2f46 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  min-height: 280px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 70% 30%, rgba(14, 143, 131, 0.25), transparent 65%);
  }

  @media (max-width: 760px) {
    min-height: 160px;
  }
`

const FeaturedLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.55);
  position: relative;
  z-index: 1;
  margin-bottom: 0.75rem;
`

const FeaturedNumber = styled.span`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 900;
  line-height: 0.9;
  color: rgba(255, 255, 255, 0.08);
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`

const FeaturedTitle = styled.h2`
  font-size: clamp(1.4rem, 2.2vw, 1.8rem);
  line-height: 1.15;
  color: white;
  position: relative;
  z-index: 1;
`

const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
  position: relative;
  z-index: 1;
  margin-top: 0.4rem;
`

const FeaturedBody = styled.div`
  padding: 2rem;
  display: grid;
  gap: 1.2rem;
  align-content: start;
`

const CategoryPill = styled.span<{ $bg: string; $color: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.32rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: ${(p) => p.$bg};
  color: ${(p) => p.$color};
  width: fit-content;
`

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: var(--text-muted);
`

const Excerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-muted);
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`

const TagPill = styled.span`
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  background: rgba(17, 32, 51, 0.06);
  color: var(--text-muted);
`

/* ── Post grid ─────────────────────────────────────────── */

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const PostCardLink = styled(Link)`
  display: grid;
  gap: 1rem;
  align-content: start;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  transition: box-shadow 200ms ease, transform 200ms ease;
  text-decoration: none;

  &:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-4px);
  }
`

const PostTitle = styled.h3`
  font-size: 1.05rem;
  line-height: 1.3;
  color: var(--text);
`

const CardReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  margin-top: 0.2rem;
`

const NewsletterSection = styled.section`
  padding: clamp(2rem, 4vw, 2.8rem);
  border-radius: var(--radius-xl);
  background: linear-gradient(145deg, var(--surface-dark) 0%, #1c2f46 100%);
  color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem 3rem;
  align-items: center;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 90% 50%, rgba(231, 167, 94, 0.15), transparent 55%);
    pointer-events: none;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const NewsletterInfo = styled.div`
  display: grid;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
`

const NewsletterSectionLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--accent);
`

const NewsletterSectionTitle = styled.h2`
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: 1.15;
  color: white;
`

const NewsletterSectionBody = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.55;
`

const NewsletterFormRow = styled.form`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  align-items: center;
`

const NewsletterEmailInput = styled.input`
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.92rem;
  outline: none;
  min-width: 220px;

  &::placeholder { color: rgba(255, 255, 255, 0.4); }

  &:focus {
    border-color: rgba(14, 143, 131, 0.6);
    background: rgba(255, 255, 255, 0.14);
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 100%;
  }
`

const NewsletterSubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.3rem;
  border: 0;
  border-radius: 999px;
  color: var(--surface-dark);
  font-weight: 700;
  font-size: 0.88rem;
  background: white;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 180ms ease, transform 180ms ease;

  &:hover { opacity: 0.9; transform: translateY(-1px); }
`

const NewsletterSuccess = styled.p`
  font-size: 0.88rem;
  color: var(--accent);
  font-weight: 700;
  position: relative;
  z-index: 1;
`

const ComingSoonBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.2rem 1.6rem;
  border-radius: var(--radius-lg);
  background: rgba(14, 143, 131, 0.06);
  border: 1px solid rgba(14, 143, 131, 0.18);
`

const BannerText = styled.p`
  font-size: 0.92rem;
  color: var(--text-muted);

  strong { color: var(--text); }
`

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function BlogPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  const featured = blogPosts.find((p) => p.featured)!
  const rest = blogPosts.filter((p) => !p.featured)

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
          <HeroEyebrow><Rss size={13} />Writing</HeroEyebrow>
          <HeroTitle>Thinking out loud on software, data &amp; AI.</HeroTitle>
          <HeroBody>
            Long-form pieces on the things I build, the problems I run into, and the ideas I
            find worth thinking through carefully. No fluff, no listicles — just honest writing
            from someone who actually builds things.
          </HeroBody>
        </HeroCard>
      </Reveal>

      {/* ── Posts ─────────────────────────────────────────── */}
      <PostsSection>
        <SectionTitle eyebrow="Latest" title="Recent writing." />

        {/* Featured post */}
        <Reveal>
          <FeaturedLink to={`/blog/${featured.slug}`}>
            <FeaturedAccent>
              <FeaturedNumber>01</FeaturedNumber>
              <FeaturedLabel>Featured post</FeaturedLabel>
              <FeaturedTitle>{featured.title}</FeaturedTitle>
              <ReadMore>Read full post <ArrowUpRight size={13} /></ReadMore>
            </FeaturedAccent>

            <FeaturedBody>
              <CategoryPill
                $bg={categoryConfig[featured.category]?.bg ?? 'rgba(17,32,51,0.06)'}
                $color={categoryConfig[featured.category]?.color ?? 'var(--text-muted)'}
              >
                {featured.category}
              </CategoryPill>

              <PostMeta>
                <MetaItem>{featured.date}</MetaItem>
                <MetaItem>·</MetaItem>
                <MetaItem><Clock size={12} />{featured.readTime}</MetaItem>
              </PostMeta>

              <Excerpt>{featured.excerpt}</Excerpt>

              <TagRow>
                {featured.tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
              </TagRow>
            </FeaturedBody>
          </FeaturedLink>
        </Reveal>

        {/* Remaining posts */}
        <PostsGrid>
          {rest.map((post, i) => {
            const config = categoryConfig[post.category] ?? { bg: 'rgba(17,32,51,0.06)', color: 'var(--text-muted)' }
            return (
              <Reveal key={post.id} delay={i * 0.07}>
                <PostCardLink to={`/blog/${post.slug}`}>
                  <CategoryPill $bg={config.bg} $color={config.color}>
                    {post.category}
                  </CategoryPill>

                  <PostTitle>{post.title}</PostTitle>

                  <PostMeta>
                    <MetaItem>{post.date}</MetaItem>
                    <MetaItem>·</MetaItem>
                    <MetaItem><Clock size={11} />{post.readTime}</MetaItem>
                  </PostMeta>

                  <Excerpt>{post.excerpt}</Excerpt>

                  <TagRow>
                    {post.tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
                  </TagRow>

                  <CardReadMore>Read full post <ArrowUpRight size={12} /></CardReadMore>
                </PostCardLink>
              </Reveal>
            )
          })}
        </PostsGrid>

        {/* Coming soon */}
        <Reveal delay={0.12}>
          <ComingSoonBanner>
            <BannerText>
              <strong>More posts on the way.</strong> Subscribe below to get notified when new
              pieces go live — typically one or two per month.
            </BannerText>
            <ArrowUpRight size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          </ComingSoonBanner>
        </Reveal>
      </PostsSection>

      {/* ── Newsletter ───────────────────────────────────────── */}
      <Reveal>
        <NewsletterSection>
          <NewsletterInfo>
            <NewsletterSectionLabel><Rss size={12} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }} />Newsletter</NewsletterSectionLabel>
            <NewsletterSectionTitle>Get new posts in your inbox.</NewsletterSectionTitle>
            <NewsletterSectionBody>
              Occasional, focused writing on software engineering, data, and AI. No spam —
              unsubscribe anytime.
            </NewsletterSectionBody>
          </NewsletterInfo>

          {subscribed ? (
            <NewsletterSuccess>✓ You're on the list. Talk soon.</NewsletterSuccess>
          ) : (
            <NewsletterFormRow onSubmit={handleSubscribe}>
              <NewsletterEmailInput
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <NewsletterSubmitBtn type="submit">
                <Send size={14} />Subscribe
              </NewsletterSubmitBtn>
            </NewsletterFormRow>
          )}
        </NewsletterSection>
      </Reveal>
    </Page>
  )
}
