import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { blogPosts } from '../content/blogContent'
import { aquaPulseProject, salesFunnelProject, samsungCQCProject, siteMeta } from '../content/siteContent'

const defaultTitle = 'Bilal Ahmad | Data Engineering, Analytics & AI'
const defaultDescription =
  'Bilal Ahmad portfolio website showcasing software engineering, data engineering, analytics, and data science work.'
const socialImageUrl = 'https://connectwithbilal.com/og-image.png'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

function getMeta(pathname: string) {
  const staticRoutes: Record<string, { title: string; description: string; type?: 'website' | 'article' }> = {
    '/': {
      title: defaultTitle,
      description:
        'Portfolio of Bilal Ahmad, focused on software engineering, data engineering, analytics, BI, and applied AI systems.',
    },
    '/portfolio': {
      title: `Portfolio | ${siteMeta.name}`,
      description:
        'Selected case studies across data engineering, analytics, dashboards, enterprise systems, and applied machine learning.',
    },
    '/portfolio/aqua-pulse': {
      title: `${aquaPulseProject.title} | ${siteMeta.name}`,
      description: aquaPulseProject.tagline,
      type: 'article',
    },
    '/portfolio/sales-funnel': {
      title: `${salesFunnelProject.title} | ${siteMeta.name}`,
      description: salesFunnelProject.tagline,
      type: 'article',
    },
    '/portfolio/samsung-cqc': {
      title: `${samsungCQCProject.title} | ${siteMeta.name}`,
      description: samsungCQCProject.tagline,
      type: 'article',
    },
    '/blog': {
      title: `Blog | ${siteMeta.name}`,
      description:
        'Essays and writing on AI agents, data engineering, modern analytics, machine learning, and thoughtful software systems.',
    },
    '/beyond': {
      title: `Beyond Work | ${siteMeta.name}`,
      description:
        'A more personal side of Bilal Ahmad: places lived, books read, and interests beyond software and data work.',
    },
    '/contact': {
      title: `Contact | ${siteMeta.name}`,
      description:
        'Get in touch with Bilal Ahmad for roles, freelance collaborations, and conversations around data engineering, analytics, and applied AI.',
    },
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '')
    const post = blogPosts.find((item) => item.slug === slug)

    if (post) {
      return {
        title: `${post.title} | ${siteMeta.name}`,
        description: post.excerpt,
        type: 'article' as const,
      }
    }
  }

  return staticRoutes[pathname] ?? {
    title: defaultTitle,
    description: defaultDescription,
  }
}

export function Seo() {
  const location = useLocation()

  useEffect(() => {
    const { title, description, type = 'website' } = getMeta(location.pathname)
    const canonicalUrl = `${window.location.origin}${location.pathname}`

    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteMeta.name })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: socialImageUrl })
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Bilal Ahmad portfolio preview card' })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: socialImageUrl })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })
  }, [location.pathname])

  return null
}
