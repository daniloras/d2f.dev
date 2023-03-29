import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    id: string | unknown
    token: string
    user: {
      id: string | null
      email_verified: boolean
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    token: string | unknown
    user: {
      email_verified: boolean
    }
  }
}
