import { signIn } from '@/contexts/auth'
import React from 'react'

export function SigninBtn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<'button'>) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <button
        {...props}
        className="hover:bg-green-100 border-green-500"
      >
        <div className="ml-2" />
        <span>Googleでログイン</span>
      </button>
    </form>
  )
}