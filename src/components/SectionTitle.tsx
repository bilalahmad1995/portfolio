import styled from 'styled-components'

type SectionTitleProps = {
  eyebrow: string
  title: string
  body?: string
}

const Wrap = styled.div`
  display: grid;
  gap: 0.9rem;
  max-width: 760px;
  min-width: 0;
`

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(14, 143, 131, 0.1);
`

const Title = styled.h2`
  font-size: clamp(1.75rem, 5vw, 3.2rem);
  line-height: 1.08;
  overflow-wrap: break-word;
`

const Body = styled.p`
  max-width: 62ch;
  font-size: 1.02rem;
`

export function SectionTitle({ eyebrow, title, body }: SectionTitleProps) {
  return (
    <Wrap>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
      {body ? <Body>{body}</Body> : null}
    </Wrap>
  )
}
