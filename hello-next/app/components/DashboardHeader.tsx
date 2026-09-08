'use client'

import { useState } from 'react'

export default function DashboardHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
      >
        Open Menu
      </button>

      {open && (
        <div>
        <a href='/dashboard/dashprofile'>
          Dashboard Menu
        </a>
        </div>
      )}
    </>
  )
}
