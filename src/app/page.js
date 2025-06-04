import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: "url(/picture_background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <main className={styles.main}>
        <div className="@container w-full">
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-bold">Sean Cotter</h1>
            <h2 className="text-white text-2xl leading-tight">Software Engineer & Android Developer</h2>
          </div>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://www.linkedin.com/in/theseancotter/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <BsLinkedin />
              Connect on LinkedIn
            </a>
            <a
              className={styles.primary}
              href="https://github.com/theDeveloperShoon"
              target="_blank"
              rel="noopener noreferrer"
            >
              < BsGithub />
              View my GitHub
            </a>
        </div>

        <div className={styles.ctas}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

// export default function NewHome(){
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <header className={styles.header}>
//           <div>
//             <a>Projects</a>
//             <a>About Me</a>
//             <a>Contact</a>
//           </div>
//         </header>
//         <h1>Sean Cotter</h1>

//         <p>This is a new version of the home page.</p>
//       </main>
//     </div>
//   );
// }