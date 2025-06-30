import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Contact – My Next.js Project',
  description: 'This page will have details to contact me',
  openGraph: {
    title: 'Contact – My Next.js Project',
    description: 'From here you can contact me',
  },
};
const Contact = () => {
  return (
    <div>Contact
      <Link href="/">Back to Home</Link></div>
  )
}

export default Contact