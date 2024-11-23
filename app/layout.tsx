import Navbar from "@/components/Navbar"
import Link from "next/link"
import './globals.css'
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Witsanupong NextJS',
  description:'NextJS 15 Tutorial',
  keywords:'Witsanupong, Camping, Thiland, NextJS',
}

const layout = ({ children }:{children:React.ReactNode}) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout