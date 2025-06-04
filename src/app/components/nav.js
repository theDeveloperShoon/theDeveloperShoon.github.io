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
            <nav className="flex fixed top-[0.15rem] left-1/2 h-16 -translate-x-1/2 px-4 bg-white/80 backdrop-blur-md shadow-md rounded-full">
                <div className="flex items-center justify-center gap-6 ">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        return (
                            <Link
                                className="flex w-full items-center justify-center text-white hover:bg-gray-300 rounded-full px-2"
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