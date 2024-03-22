"use client"

import Link from 'next/link'
import React from 'react'
import style from "./navLink.module.css"
import { usePathname } from 'next/navigation'

const Navlink = ({ item }) => {
    const pathName = usePathname()
    return (
        <Link href={item.path} className={`${style.container} ${pathName === item.path && style.active}`}>{item.title}</Link>
    )
}

export default Navlink