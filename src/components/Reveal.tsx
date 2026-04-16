import type { CSSProperties, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type RevealProps = PropsWithChildren<{
  delay?: number
  className?: string
  style?: CSSProperties
}>

export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
