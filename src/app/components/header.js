"use client";

import Link from 'next/link';
import styles from '../styles/Header.module.css'
import { usePathname } from 'next/navigation'

// took out history tab for now
//        <HeaderLink
//          name="History"
//          url="/history"
//        />

export function HeaderLink({ name, url }) {
  const currentPath = usePathname();

  return (
    <Link className={currentPath === url ? styles.headerLinkActive : styles.headerLink} href={url}>{name}</Link>
  )
}

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
      </div>
      <div className={styles.linkContainer}>
        <HeaderLink
          name="Overview"
          url="/"
        />
        <HeaderLink
          name="Student Services Fee"
          url="/student-services-fee"
        />
        <HeaderLink
          name="Campus-Based Fees"
          url="/campus-fee"
        />
      </div>
    </div>
  )
}
