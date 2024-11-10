import Image from "next/image";
import Link from "next/link";
import head from "next/head"
export default function Home() {
  return (
    <div>
      <h1>"Welcome to My Simple Portfolio"</h1> 
      <br></br>
    
      <Link href="/home">Go to Home page</Link> 
      <br/>
      <Link href="/about">Go to About page</Link>
      <br/>
      <Link href="/contact">Go to Contact page</Link>
      
      
           
    </div>
  );
}
