import React from 'react'
import Link from "next/link"
import next from 'next'
const page = () => {
  return (
    <div>
        <h1>Home:</h1>
        <br/>
      <p>This is a home page of website.</p>
      <br/> 
      <h3>My Skills:</h3>
       <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
       </ul>
      <br/>
      <Link href="/about">Go to About page</Link>
      <br/>
      <Link href="/contact">Go to Contact page</Link>
      <br/>
      <Link href="/">Go to Main page</Link>
      

    </div>
  )
}

export default page