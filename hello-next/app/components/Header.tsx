'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b p-4">

      <div className="flex items-center justify-between">

        <h1 className="text-xl font-bold">
          My App
        </h1>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
        </nav>

      </div>

      {isOpen && (
        <nav className="flex flex-col gap-2 mt-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      )}

    </header>
  )
}
