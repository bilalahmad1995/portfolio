import { useState, useEffect, type FormEvent } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Send, Star } from 'lucide-react'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
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

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 160ms ease;

  &:hover {
    color: var(--text);
  }
`

/* ── Hero ─────────────────────────────────────────────────── */

const Hero = styled.div`
  padding: clamp(2rem, 5vw, 3.5rem);
  border-radius: calc(var(--radius-xl) + 6px);
  background: linear-gradient(145deg, var(--surface-dark) 0%, #1c2f46 100%);
  color: white;
  display: grid;
  gap: 1.4rem;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 80% 20%, rgba(14, 143, 131, 0.2), transparent 60%);
    pointer-events: none;
  }
`

const CategoryPill = styled.span<{ $bg: string; $color: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.32rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: ${(p) => p.$bg};
  color: ${(p) => p.$color};
  width: fit-content;
  position: relative;
  z-index: 1;
`

const PostTitle = styled.h1`
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  line-height: 1.05;
  color: white;
  max-width: 22ch;
  overflow-wrap: break-word;
  position: relative;
  z-index: 1;
`

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  position: relative;
  z-index: 1;
`

const TagPill = styled.span`
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.55);
`

/* ── Article body ─────────────────────────────────────────── */

const ArticleWrap = styled.article`
  max-width: 720px;
  width: 100%;
`

const Lead = styled.p`
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  line-height: 1.75;
  color: var(--text);
  font-weight: 450;
`

const SectionHeading = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  line-height: 1.2;
  color: var(--text);
  margin-top: 0.5rem;
`

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.78;
  color: var(--text-muted);
`

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 1.4rem 1.6rem;
  border-left: 3px solid var(--accent);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  background: rgba(14, 143, 131, 0.06);

  p {
    font-size: 1.1rem;
    line-height: 1.65;
    font-style: italic;
    color: var(--text);
    font-weight: 500;
    margin: 0;
  }
`

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
`

const BulletItem = styled.li`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.96rem;
  line-height: 1.6;
  color: var(--text-muted);

  &::before {
    content: '';
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: var(--accent);
    margin-top: 0.55rem;
  }
`

const BodyGrid = styled.div`
  display: grid;
  gap: 1.4rem;
`

/* ── Review section ───────────────────────────────────────── */

const ReviewCard = styled.div`
  padding: clamp(1.5rem, 3vw, 2.2rem);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1.4rem;
  max-width: 720px;
`

const ReviewHeading = styled.h2`
  font-size: 1.35rem;
  color: var(--text);
`

const ReviewSub = styled.p`
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-top: -0.8rem;
`

const StarRow = styled.div`
  display: flex;
  gap: 0.4rem;
`

const StarButton = styled.button<{ $filled: boolean }>`
  background: none;
  border: none;
  padding: 0.1rem;
  cursor: pointer;
  color: ${(p) => (p.$filled ? '#e7a75e' : 'rgba(17,32,51,0.2)')};
  transition: color 140ms ease, transform 120ms ease;

  &:hover {
    transform: scale(1.15);
    color: #e7a75e;
  }
`

const RatingLabel = styled.span`
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
`

const FeedbackArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  resize: vertical;
  padding: 0.95rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(17, 32, 51, 0.12);
  background: rgba(255, 255, 255, 0.8);
  font-family: inherit;
  font-size: 0.94rem;
  color: var(--text);
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    border-color: rgba(14, 143, 131, 0.48);
    box-shadow: 0 0 0 4px rgba(14, 143, 131, 0.08);
  }
`

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.3rem;
  border: 0;
  border-radius: 999px;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  background: linear-gradient(135deg, var(--surface-dark), #21324a);
  box-shadow: 0 10px 28px rgba(20, 32, 47, 0.18);
  cursor: pointer;
  transition: opacity 180ms ease, transform 180ms ease;
  width: fit-content;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
  }
`

const ThanksBox = styled.div`
  padding: 1.2rem 1.4rem;
  border-radius: var(--radius-md);
  background: rgba(14, 143, 131, 0.08);
  border: 1px solid rgba(14, 143, 131, 0.2);
  display: grid;
  gap: 0.3rem;

  strong {
    color: var(--accent);
    font-size: 0.95rem;
  }

  span {
    font-size: 0.86rem;
    color: var(--text-muted);
  }
`

const ReviewError = styled.p`
  font-size: 0.88rem;
  color: #d46a6a;
  font-weight: 700;
`

/* ── Newsletter CTA ───────────────────────────────────────── */

const NewsletterCard = styled.div`
  max-width: 720px;
  padding: clamp(1.8rem, 4vw, 2.8rem);
  border-radius: var(--radius-xl);
  background: linear-gradient(145deg, var(--surface-dark) 0%, #1c2f46 100%);
  color: white;
  display: grid;
  gap: 1.3rem;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 85% 50%, rgba(231, 167, 94, 0.18), transparent 60%);
    pointer-events: none;
  }
`

const NewsletterEyebrow = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--accent);
  position: relative;
  z-index: 1;
`

const NewsletterTitle = styled.h2`
  font-size: clamp(1.4rem, 3vw, 2rem);
  line-height: 1.15;
  color: white;
  position: relative;
  z-index: 1;
`

const NewsletterBody = styled.p`
  font-size: 0.92rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.6);
  max-width: 38rem;
  position: relative;
  z-index: 1;
`

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`

const EmailInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.92rem;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: rgba(14, 143, 131, 0.6);
    background: rgba(255, 255, 255, 0.14);
  }
`

const SubscribeBtn = styled.button`
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

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`

const SubscribedMsg = styled.p`
  font-size: 0.88rem;
  color: var(--accent);
  font-weight: 700;
  position: relative;
  z-index: 1;
`

// ---------------------------------------------------------------------------
// Rating labels
// ---------------------------------------------------------------------------

const ratingLabels: Record<number, string> = {
  1: 'Not useful',
  2: 'Somewhat useful',
  3: 'Useful',
  4: 'Very useful',
  5: 'Excellent — really valuable',
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  const storageKey = `blog-review-${slug}`

  const [hoveredStar, setHoveredStar] = useState(0)
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [reviewError, setReviewError] = useState('')
  const [subEmail, setSubEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribeError, setSubscribeError] = useState('')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) setSubmitted(true)
    } catch {
      // localStorage unavailable
    }
  }, [storageKey])

  if (!post) return <Navigate to="/blog" replace />

  const config = categoryConfig[post.category] ?? { bg: 'rgba(17,32,51,0.06)', color: 'var(--text-muted)' }
  const displayStar = hoveredStar || rating

  const handleReview = async (e: FormEvent) => {
    e.preventDefault()

    if (rating === 0) return

    setReviewError('')

    const submittedAt = new Date().toISOString()

    try {
      const payload = new URLSearchParams({
        'form-name': 'blog-feedback',
        postSlug: post.slug,
        postTitle: post.title,
        rating: String(rating),
        feedback,
        submittedAt,
        'bot-field': '',
      }).toString()

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      })

      if (!response.ok) {
        throw new Error('Feedback submission failed')
      }

      try {
        localStorage.setItem(storageKey, JSON.stringify({ rating, feedback, date: submittedAt }))
      } catch {
        // localStorage unavailable
      }

      setSubmitted(true)
    } catch {
      setReviewError('Something went wrong. Please try again in a moment.')
    }
  }

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!subEmail) return

    setSubscribeError('')

    try {
      const payload = new URLSearchParams({
        'form-name': 'blog-newsletter',
        email: subEmail,
        source: `blog-post:${post.slug}`,
        'bot-field': '',
      }).toString()

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      })

      if (!response.ok) {
        throw new Error('Newsletter signup failed')
      }

      setSubscribed(true)
      setSubEmail('')
    } catch {
      setSubscribeError('Something went wrong. Please try again in a moment.')
    }
  }

  return (
    <Page
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Back ─────────────────────────────────────────── */}
      <Reveal>
        <BackLink to="/blog">
          <ArrowLeft size={15} /> Back to Blog
        </BackLink>
      </Reveal>

      {/* ── Hero ─────────────────────────────────────────── */}
      <Reveal delay={0.05}>
        <Hero>
          <CategoryPill $bg={config.bg} $color={config.color}>
            {post.category}
          </CategoryPill>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            <MetaItem>{post.date}</MetaItem>
            <MetaItem>·</MetaItem>
            <MetaItem>
              <Clock size={12} />
              {post.readTime}
            </MetaItem>
          </PostMeta>
          <TagRow>
            {post.tags.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </TagRow>
        </Hero>
      </Reveal>

      {/* ── Article body ─────────────────────────────────── */}
      <Reveal delay={0.08}>
        <ArticleWrap>
          <BodyGrid>
            {post.body.map((block, i) => {
              if (block.type === 'lead') {
                return <Lead key={i}>{block.text}</Lead>
              }
              if (block.type === 'h2') {
                return <SectionHeading key={i}>{block.text}</SectionHeading>
              }
              if (block.type === 'p') {
                return <Paragraph key={i}>{block.text}</Paragraph>
              }
              if (block.type === 'quote') {
                return (
                  <Blockquote key={i}>
                    <p>{block.text}</p>
                  </Blockquote>
                )
              }
              if (block.type === 'bullets') {
                return (
                  <BulletList key={i}>
                    {block.items?.map((item, j) => (
                      <BulletItem key={j}>{item}</BulletItem>
                    ))}
                  </BulletList>
                )
              }
              return null
            })}
          </BodyGrid>
        </ArticleWrap>
      </Reveal>

      {/* ── Review section ───────────────────────────────── */}
      <Reveal delay={0.06}>
        <ReviewCard>
          <div>
            <ReviewHeading>Was this post useful?</ReviewHeading> <br  />
            <ReviewSub>Your feedback helps me write better — takes 30 seconds.</ReviewSub>
          </div>

          {submitted ? (
            <ThanksBox>
              <strong>Thank you for the feedback!</strong>
              <span>It genuinely helps shape what I write next.</span>
            </ThanksBox>
          ) : (
            <form
              name="blog-feedback"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleReview}
              style={{ display: 'grid', gap: '1rem' }}
            >
              <input type="hidden" name="form-name" value="blog-feedback" />
              <input type="hidden" name="postSlug" value={post.slug} />
              <input type="hidden" name="postTitle" value={post.title} />
              <input type="hidden" name="rating" value={rating > 0 ? String(rating) : ''} />
              <input type="hidden" name="submittedAt" value={new Date().toISOString()} />
              <input type="hidden" name="bot-field" />
              <div>
                <StarRow>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <StarButton
                      key={n}
                      type="button"
                      $filled={n <= displayStar}
                      onMouseEnter={() => setHoveredStar(n)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setRating(n)}
                      aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
                    >
                      <Star size={28} fill={n <= displayStar ? '#e7a75e' : 'none'} strokeWidth={1.5} />
                    </StarButton>
                  ))}
                </StarRow>
                {displayStar > 0 && (
                  <RatingLabel>{ratingLabels[displayStar]}</RatingLabel>
                )}
              </div>

              <FeedbackArea
                name="feedback"
                placeholder="Anything you'd like me to dig deeper on, cover differently, or write about next? (optional)"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              <SubmitBtn type="submit" disabled={rating === 0}>
                <Send size={14} />
                Submit feedback
              </SubmitBtn>
              {reviewError ? <ReviewError>{reviewError}</ReviewError> : null}
            </form>
          )}
        </ReviewCard>
      </Reveal>

      {/* ── Newsletter CTA ───────────────────────────────── */}
      <Reveal delay={0.06}>
        <NewsletterCard>
          <NewsletterEyebrow>Newsletter</NewsletterEyebrow>
          <NewsletterTitle>Get the next post in your inbox.</NewsletterTitle>
          <NewsletterBody>
            Writing on software engineering, data, and AI — occasional and focused. No spam,
            no noise. Unsubscribe anytime.
          </NewsletterBody>

          {subscribed ? (
            <SubscribedMsg>✓ You're on the list. Talk soon.</SubscribedMsg>
          ) : (
            <NewsletterForm
              name="blog-newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubscribe}
            >
              <input type="hidden" name="form-name" value="blog-newsletter" />
              <input type="hidden" name="source" value={`blog-post:${post.slug}`} />
              <input type="hidden" name="bot-field" />
              <EmailInput
                type="email"
                name="email"
                placeholder="your@email.com"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                required
              />
              <SubscribeBtn type="submit">
                <Send size={14} />
                Join newsletter
              </SubscribeBtn>
            </NewsletterForm>
          )}
          {!subscribed && subscribeError ? <SubscribedMsg>{subscribeError}</SubscribedMsg> : null}
        </NewsletterCard>
      </Reveal>
    </Page>
  )
}
