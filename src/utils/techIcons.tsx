import React from 'react'
import {
  SiAnthropic,
  SiExpress,
  SiFacebook,
  SiFastapi,
  SiGoogleads,
  SiJsonwebtokens,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiSnowflake,
  SiSqlalchemy,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons'
import { BarChart2, Bot, Boxes, Database, FileSpreadsheet, Linkedin } from 'lucide-react'

// dbt Labs brand icon (not in simple-icons v16 — inlined from brand assets)
function DbtIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="dbt">
      <path d="M21 8.25L12 3 3 8.25v7.5L12 21l9-5.25v-7.5zM12 5.19l6.75 3.93v5.76L12 18.81l-6.75-3.93V9.12L12 5.19zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  )
}

// Microsoft Power BI brand icon (not in simple-icons v16 — inlined from brand assets)
function PowerBiIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="Power BI">
      <rect x="3" y="14" width="4.5" height="7" rx="1.25" opacity="0.5" />
      <rect x="9.75" y="9" width="4.5" height="12" rx="1.25" opacity="0.75" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1.25" />
    </svg>
  )
}

// Microsoft Power Query — represented with the Excel/M query icon style
function PowerQueryIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="Power Query">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM7 17l2.5-3-2.5-3h2l1.5 2 1.5-2h2l-2.5 3 2.5 3h-2l-1.5-2-1.5 2H7z" />
    </svg>
  )
}

export type IconComponent = React.ComponentType<{ size?: number }>

export const techIconMap: Record<string, IconComponent> = {
  // ── Sales Funnel ──────────────────────────────────────────────
  Snowflake: SiSnowflake as IconComponent,
  dbt: DbtIcon,
  Streamlit: SiStreamlit as IconComponent,
  Plotly: SiPlotly as IconComponent,
  Python: SiPython as IconComponent,
  Pandas: SiPandas as IconComponent,
  SQL: Database as IconComponent,

  // ── Samsung CQC ───────────────────────────────────────────────
  'React 19': SiReact as IconComponent,
  TypeScript: SiTypescript as IconComponent,
  Vite: SiVite as IconComponent,
  'Tailwind CSS v4': SiTailwindcss as IconComponent,
  'Node.js': SiNodedotjs as IconComponent,
  Express: SiExpress as IconComponent,
  PostgreSQL: SiPostgresql as IconComponent,
  'Prisma ORM': SiPrisma as IconComponent,
  ApexCharts: BarChart2 as IconComponent,        // No official brand icon
  Zustand: Boxes as IconComponent,               // No official brand icon
  JWT: SiJsonwebtokens as IconComponent,
  'Claude API': SiAnthropic as IconComponent,

  // ── Aqua Pulse ────────────────────────────────────────────────
  'Power Query': PowerQueryIcon,
  'Power BI': PowerBiIcon,
  CSV: FileSpreadsheet as IconComponent,
  'Google Ads': SiGoogleads as IconComponent,
  'Facebook Ads': SiFacebook as IconComponent,
  'LinkedIn Ads': Linkedin as IconComponent,

  // ── Markt Pulse ──────────────────────────────────────────────
  'Next.js': SiNextdotjs as IconComponent,
  React: SiReact as IconComponent,
  'Tailwind CSS': SiTailwindcss as IconComponent,
  'Radix UI': SiRadixui as IconComponent,
  'Lucide Icons': Boxes as IconComponent,
  XLSX: FileSpreadsheet as IconComponent,
  FastAPI: SiFastapi as IconComponent,
  SQLAlchemy: SiSqlalchemy as IconComponent,
  Alembic: Database as IconComponent,
  Pydantic: Boxes as IconComponent,
  'Groq API': Bot as IconComponent,
  'Llama 3.3 70B': SiOllama as IconComponent,
}
