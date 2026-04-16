import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f4efe7;
    --bg-elevated: rgba(255, 252, 247, 0.78);
    --surface: rgba(255, 255, 255, 0.7);
    --surface-strong: #fffaf2;
    --surface-dark: #14202f;
    --text: #112033;
    --text-muted: #5c6a7c;
    --border: rgba(17, 32, 51, 0.08);
    --border-strong: rgba(17, 32, 51, 0.16);
    --accent: #0e8f83;
    --accent-dim: #0d776e;
    --accent-soft: rgba(14, 143, 131, 0.12);
    --warm: #e7a75e;
    --surface-dark-2: #1c2f46;
    --surface-dark-3: #1f3148;
    --shadow: 0 20px 64px rgba(17, 32, 51, 0.10);
    --shadow-soft: 0 10px 30px rgba(17, 32, 51, 0.07);
    --shadow-hover: 0 24px 72px rgba(17, 32, 51, 0.13);
    --radius-xl: 32px;
    --radius-lg: 24px;
    --radius-md: 18px;
    --radius-sm: 12px;
    --container: min(1160px, calc(100vw - 48px));
  }

  @media (max-width: 480px) {
    :root {
      --container: min(1160px, calc(100vw - 32px));
    }
  }

  * {
    box-sizing: border-box;
    min-width: 0;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Manrope', sans-serif;
    color: var(--text);
    background:
      radial-gradient(circle at top left, rgba(14, 143, 131, 0.18), transparent 28%),
      radial-gradient(circle at 85% 10%, rgba(231, 167, 94, 0.2), transparent 22%),
      linear-gradient(180deg, #f8f3ec 0%, #f3eee6 45%, #f7f3eb 100%);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(17, 32, 51, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(17, 32, 51, 0.025) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(circle at center, black 42%, transparent 78%);
    opacity: 0.7;
    pointer-events: none;
    z-index: -2;
  }

  #root {
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.75;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  ::selection {
    background: rgba(14, 143, 131, 0.16);
    color: var(--text);
  }
`
