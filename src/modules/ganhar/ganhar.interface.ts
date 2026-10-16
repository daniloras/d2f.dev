import type { ReactNode } from 'react'

export interface Platform {
  name: string
  domain: string
  url: string
  logo: ReactNode
}

export interface Fact {
  label: string
  value: string
  detail: string
}

export interface Clip {
  label: string
  share: number
}
