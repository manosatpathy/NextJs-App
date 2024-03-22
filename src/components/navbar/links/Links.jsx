import Link from "next/link"
import style from "./links.module.css"
import NavLink from "./navLink/NavLink"

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

    const session = true;
    const isAdmin = true;

    return (
        <div className={style.links}>
            {navLinks.map(link => (
                <NavLink item={link} key={link.title} />
            ))}
            {session ? (
                <>
                    {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                    <button className={style.logoutBtn}>Logout</button>
                </>
            ) : (
                <NavLink item={{ title: "Login", path: "/login" }} />
            )
            }
        </div>
    )
}

export default Links