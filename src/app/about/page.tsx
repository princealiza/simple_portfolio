import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <div>
        <h1>About:</h1>
        <br/>      
        <p>This is about page of my website.</p>
        <br/>
        <h3>"My name is Aliza Fatima, and I am an initial web developer."</h3>
        <br/>
        <Link href="/contact">Go to Contact page</Link>
        <br/>
        <Link href="/home">Go to Home page</Link>
        <br/>
        <Link href="/">Go to Main page</Link>

    </div>
  )
}

export default page