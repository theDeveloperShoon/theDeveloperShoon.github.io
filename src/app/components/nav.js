import Link from "next/link"

const navItems = {
    "/" : {
        name: "Home",
    },
    "/about": {
        name: "About",
    },
    "/contact": {
        name: "Contact",
    },
    "/projects": {
        name: "Projects",
    },
}

export default function Navbar() {
    return (
        <aside>
            <div>
                <nav className="flex items-center justify-center ">
                    <div className="flex gap-6">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    >
                                        {name}
                                    </Link>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    )
}