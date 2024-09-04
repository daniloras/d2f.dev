import { ReactElement, ReactNode } from 'react'

export interface Props {
  type: 'PRIMARY' | 'SECONDARY';
  title: string;
  slug: string;
  icon: ReactNode;
  metaDescription: string;
  content: string[]
}