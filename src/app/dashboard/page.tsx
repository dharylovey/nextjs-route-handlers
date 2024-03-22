'use client'


import { useState } from 'react'


const DashboardPage = () => {
    console.log('dashboard')
    const [name, setName] = useState('')
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />

      <p>{name}</p>
    </div>
  )
}

export default DashboardPage
