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
        <header className="z-[999] relative">
            <nav className="flex fixed left-1/2 h-16 -translate-x-1/2 px-4 bg-white/80 backdrop-blur-md shadow-md rounded-full">
                <div className="flex items-center justify-center gap-6 ">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        return (
                            <Link
                                className="flex w-full items-center justify-center text-white hover:text-gray-950"
                                key={path}
                                href={path}
                                >
                                    {name}
                                </Link>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}