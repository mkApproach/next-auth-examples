import Google from 'next-auth/providers/google'
import NextAuth, { NextAuthConfig } from 'next-auth'
import { Provider } from 'next-auth/providers'

const providers: Provider[] = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
]

export const config: NextAuthConfig = {
  theme: {
    logo: '/login.png',
  },
  providers: providers,
  basePath: '/api/auth',
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl
        // ログイン後のみ表示出来るページのパスを指定します。
        if (pathname === '/protected-page') return !!auth
      } catch (err) {
        console.error(err)
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === 'update') token.name = session.user.name
      return token
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)