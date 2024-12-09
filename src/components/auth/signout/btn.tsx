import { signOut } from '@/contexts/auth'
import React from 'react'

export function SignoutBtn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<'button'>) {
  return (
    <form
      action={async () => {
        'use server'
        await signOut({ redirectTo: provider })
      }}
      className="w-full"
    >
      <button className="w-full p-0" {...props}>
        ログアウト
      </button>
    </form>
  )
}