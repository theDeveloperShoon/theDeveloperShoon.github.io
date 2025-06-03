import React from "react";
import Link from "next/link"

export async function getStaticPaths(){
    const res = await fetch('https://api.github.com/users/theDeveloperShoon/repos');
    const repos = await res.json();

    const paths = repos.map((repo) => ({
        params: { name: repo.name },
    }));

    return {
        paths, 
        fallback: false, // can also be true or 'blocking'
    }
}


export async function generateStaticParams({ params }) {
    const res = await fetch(`https://api.github.com/repos/theDeveloperShoon/${params.name}`);
    const repo = await res.json();

    return {
        props: { repo },
    }
}

export function Projects({ repos }) {
    return (
        <section>
        {repos.map((repo) => (
            <div key={repo.name} className="p-4 border-b">
                <Link 
                    key={`/projects/${repo.name}`}
                    href={`/projects/${repo.name}`} 
                    className="block mb-2">{repo.name}</Link>
                <h2 className="text-2xl font-bold">{repo.name}</h2>
                <p className="text-lg mb-2">{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View on Github</a>
            </div>
        ))}
        </section>
    );
}

export function Project({ repo }) {
    return (
        <section>
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-4xl font-bold mb-4">{repo.name}</h1>
                <p className="text-lg mb-2">{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on Github</a>
                <p className="text-lg mb-2">This is a simple page built with Next.js.</p>
                <p className="text-lg mb-2">Feel free to explore and learn more about me.</p>
                <p className="text-lg mb-2">Check out the links below for more information.</p>
            </div>
        </section>
    );
}