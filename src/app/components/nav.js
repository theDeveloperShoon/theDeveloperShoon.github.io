import Link from "next/link"

const navItems = {
    "/" : {
        name: "Sean Cotter",
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
                <nav>
                    <div>
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