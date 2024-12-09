import { auth } from '@/contexts/auth'
import { SigninBtn } from '@/components/auth/signin/btn'
import { SignoutBtn } from '@/components/auth/signout/btn'

export default async function Home() {
  const session = await auth()
  if (!session?.user) return <SigninBtn provider="Google" />

  return (
    <>
      {session && (
        <>
          <p>ユーザーはログインしています。</p>
          <SignoutBtn />
        </>
      )}
    </>
  )
}