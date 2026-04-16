import type { FormEvent } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Briefcase, CheckCircle2, Copy, Linkedin, Mail } from 'lucide-react'
import styled from 'styled-components'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { collaborationAreas, siteMeta } from '../content/siteContent'

const Page = styled(motion.div)`
  display: grid;
  gap: 5rem;

  @media (max-width: 680px) {
    gap: 3rem;
  }
`

const Hero = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1.4rem;
  align-items: start;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`

const HeroCard = styled.div`
  display: grid;
  gap: 1.35rem;
  align-content: start;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: calc(var(--radius-xl) + 6px);
  border: 1px solid rgba(17, 32, 51, 0.08);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 249, 240, 0.72)),
    linear-gradient(180deg, rgba(231, 167, 94, 0.08), transparent);
  box-shadow: var(--shadow);
`


const Title = styled.h2`
  max-width: 10ch;
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.95;
`

const ContactPanel = styled.div`
  display: grid;
  gap: 1.2rem;
  align-content: start;
`

const ContactCard = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.55rem;
  border-radius: var(--radius-lg);
  background: rgba(20, 32, 47, 0.95);
  color: white;
  box-shadow: var(--shadow);

  p {
    color: rgba(255, 255, 255, 0.72);
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`

const ContactMethod = styled.a`
  display: grid;
  gap: 1rem;
  align-content: start;
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
  transition: box-shadow 200ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
`

const MethodIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 18px;
  color: white;
  background: linear-gradient(135deg, var(--accent), #0d776e);
`

const IntroText = styled.div`
  display: grid;
  gap: 1.3rem;
  max-width: 34rem;
`

const ContactMeta = styled.div`
  display: grid;
  gap: 0.35rem;

  strong {
    font-size: 1rem;
    line-height: 1.1;
  }

  span {
    line-height: 1.45;
    color: var(--text);
    word-break: break-word;
  }
`

const Split = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1rem;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`

const NotesCard = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 32, 51, 0.08);
`

const Areas = styled.div`
  display: grid;
  gap: 0.75rem;
`

const Area = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: start;
  padding: 0.9rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(17, 32, 51, 0.04);
`

const FormCard = styled.form`
  display: grid;
  gap: 1rem;
  padding: 1.45rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(17, 32, 51, 0.08);
  box-shadow: var(--shadow-soft);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Field = styled.label`
  display: grid;
  gap: 0.5rem;
  color: var(--text);
  font-weight: 700;
`

const Input = styled.input`
  width: 100%;
  padding: 0.95rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(17, 32, 51, 0.12);
  background: rgba(255, 255, 255, 0.8);
  outline: none;

  &:focus {
    border-color: rgba(14, 143, 131, 0.48);
    box-shadow: 0 0 0 4px rgba(14, 143, 131, 0.08);
  }
`

const Textarea = styled.textarea`
  width: 100%;
  min-height: 180px;
  resize: vertical;
  padding: 0.95rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(17, 32, 51, 0.12);
  background: rgba(255, 255, 255, 0.8);
  outline: none;

  &:focus {
    border-color: rgba(14, 143, 131, 0.48);
    box-shadow: 0 0 0 4px rgba(14, 143, 131, 0.08);
  }
`

const Submit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  padding: 1rem 1.4rem;
  border: 0;
  border-radius: 999px;
  color: white;
  font-weight: 700;
  background: linear-gradient(135deg, var(--surface-dark), #21324a);
  box-shadow: 0 14px 30px rgba(20, 32, 47, 0.18);
  cursor: pointer;
  transition: opacity 180ms ease, transform 180ms ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

const Status = styled.p`
  color: var(--accent);
  font-weight: 700;
`

export function ContactPage() {
  const formRecipient = 'bilal.ahmad@fau.de'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`)
    const rawBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const body = encodeURIComponent(rawBody)

    window.location.href = `mailto:${formRecipient}?subject=${subject}&body=${body}`

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(`To: ${formRecipient}\nSubject: Portfolio inquiry from ${name || 'a visitor'}\n\n${rawBody}`)
        .then(() => {
          setStatus('Your email app should open. If it does not, the full message has already been copied for manual sending.')
        })
        .catch(() => {
          setStatus('Your email app should open with the message prefilled. If it does not, email me directly at bilal.ahmad@fau.de.')
        })
      return
    }

    setStatus('Your email app should open with the message prefilled. If it does not, email me directly at bilal.ahmad@fau.de.')
  }

  return (
    <Page
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero>
        <Reveal>
          <HeroCard>
            <Title>Let&apos;s build something meaningful.</Title>
            <IntroText>
              <p>
                I&apos;m interested in thoughtful roles and collaborations across software engineering,
                data engineering, analytics, and applied machine learning.
              </p>
              <p>
                If your team needs someone who can connect business context, clean engineering,
                and data-driven execution, I&apos;d love to hear about it.
              </p>
            </IntroText>
          </HeroCard>
        </Reveal>

        <ContactPanel>
          <Reveal delay={0.08}>
            <ContactCard>
              <h2>Best for</h2>
              <p>
                Full-time roles, freelance collaborations, and technical conversations
                around forecasting, analytics platforms, internal tools, or data pipeline design.
              </p>
            </ContactCard>
          </Reveal>

          <Reveal delay={0.16}>
            <ContactGrid>
              <ContactMethod href={`mailto:${siteMeta.email}`}>
                <MethodIcon>
                  <Mail size={20} />
                </MethodIcon>
                <ContactMeta>
                  <strong>Email</strong>
                  <span>{siteMeta.email}</span>
                </ContactMeta>
              </ContactMethod>

              <ContactMethod href={siteMeta.linkedin} target="_blank" rel="noreferrer">
                <MethodIcon>
                  <Linkedin size={20} />
                </MethodIcon>
                <ContactMeta>
                  <strong>LinkedIn</strong>
                  <span>in/bilaalahmad</span>
                </ContactMeta>
              </ContactMethod>

              <ContactMethod href={siteMeta.upwork} target="_blank" rel="noreferrer">
                <MethodIcon>
                  <Briefcase size={20} />
                </MethodIcon>
                <ContactMeta>
                  <strong>Upwork</strong>
                  <span>Hire me on Upwork</span>
                </ContactMeta>
              </ContactMethod>
            </ContactGrid>
          </Reveal>
        </ContactPanel>
      </Hero>

      <Split>
        <Reveal>
          <NotesCard>
            <SectionTitle
              eyebrow="Collaboration"
              title="The kinds of work I’m especially excited about."
              body="I add the most value where technical execution stays tied to decision-making and measurable user or business outcomes."
            />

            <Areas>
              {collaborationAreas.map((item) => (
                <Area key={item}>
                  <CheckCircle2 size={17} style={{ marginTop: '0.1rem', flexShrink: 0, color: 'var(--accent)' }} />
                  <span>{item}</span>
                </Area>
              ))}
            </Areas>
          </NotesCard>
        </Reveal>

        <Reveal delay={0.08}>
          <FormCard onSubmit={handleSubmit}>
            <SectionTitle
              eyebrow="Message"
              title="Send a quick note."
              body="This form opens your email app with a prefilled message and also copies the draft as a fallback."
            />

            <Grid>
              <Field>
                Name
                <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
              </Field>

              <Field>
                Email
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </Field>
            </Grid>

            <Field>
              Message
              <Textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me a little about your role, project, or idea."
                required
              />
            </Field>

            <Submit type="submit">
              Start the email <ArrowUpRight size={16} />
            </Submit>

            {status ? <Status>{status}</Status> : null}
            <Status style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              <Copy size={14} />
              Direct email fallback: bilal.ahmad@fau.de
            </Status>
          </FormCard>
        </Reveal>
      </Split>
    </Page>
  )
}
