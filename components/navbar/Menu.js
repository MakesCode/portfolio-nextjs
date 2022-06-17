import Link from "next/link";

export default function Menu() {
  return (
    <ul>
      <li><Link href={'/home'}>Home</Link></li>
      <li><Link href={'/about'}>About</Link></li>
      <li><Link href={'/projects'}>Projects</Link></li>
      <li><Link href={'/post'}>Post</Link></li>
      <li><Link href={'contact'}>Contact</Link></li>
    </ul>
  )
}