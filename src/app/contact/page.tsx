import React from 'react'
import Link from "next/link"
import next from 'next'
const page = () => {
  return (
    <div>
        <h1>Contact:</h1>
        <br/>
      <p>This is a contact page of website.</p>
      <br/> 
      <h3><b>Email:</b><a href="mailto:princealiza29@gmail.com">princealiza29@gmail.com</a></h3>
      <br/>
      <Link href="/about">Go to About page</Link>
      <br/>
      <Link href="/home">Go to Home page</Link>
      <br/>
      <Link href="/">Go to Main page</Link>
    </div>
  )
}

export default page