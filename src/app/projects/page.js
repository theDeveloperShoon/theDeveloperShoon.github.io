import { Projects } from "../components/projects";

export default async function Page() {
  const res = await fetch('https://api.github.com/users/theDeveloperShoon/repos', { next: { revalidate: 3600 } });
  const repos = await res.json();
  
  return <Projects repos={repos} />;
}