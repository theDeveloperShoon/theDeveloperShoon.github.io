import { Projects } from "../components/projects";

export default async function Page() {
  const res = await fetch('https://api.github.com/users/theDeveloperShoon/repos', { next: { revalidate: 3600 } });
  const repos = await res.json();
  
  return <Projects repos={repos} />;
}
// <section>
//     <div className="flex flex-col items-center justify-center min-h-screen p-4">
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Projects Page</h1>
//         <p className="text-lg mb-2">This is a simple page built with Next.js.</p>
//         <p className="text-lg mb-2">Feel free to explore and learn more about me.</p>
//         <p className="text-lg mb-2">Check out the links below for more information.</p>
//     </div>
// </section>