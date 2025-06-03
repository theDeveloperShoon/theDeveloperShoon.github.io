import { Project } from '../../components/projects';

export async function generateStaticParams() {
  const res = await fetch('https://api.github.com/users/theDeveloperShoon/repos');
  const repos = await res.json();
  return repos.map(repo => ({ slug: repo.name }));
}

export default async function RepoPage({ params }) {
  const resolvedParams = await params;
  const res = await fetch(`https://api.github.com/repos/theDeveloperShoon/${resolvedParams.slug}`);
  const repo = await res.json();

  return <Project repo={repo} />;
}