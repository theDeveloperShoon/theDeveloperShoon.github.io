
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center text-white px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sean Cotter. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js, Tailwind CSS, GitHub Pages, GitHub API and GitHub Actions
        </p>
    </footer>
  );
}