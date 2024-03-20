import Link from "next/link"

const Links = () => {

    const navLinks = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ]

    return (
        <div>
            {navLinks.map(link => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            ))}
        </div>
    )
}

export default Links