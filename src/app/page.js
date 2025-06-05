import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./page.module.css";
import { skills, socials } from "../../lib/data";



export default function Home() {
  return (
    <div>
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

          {/* <div className={styles.ctas}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div> */}

        </main>
        <footer className={styles.footer}>
          <a
            href="#about-me"
            className="cursor-pointer flex flex-col items-center"
          >
            {/* <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            /> */}
            Read More About Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="mt-1 animate-bounce"
            >
              <path d="M12 16l-6-6h12l-6 6z" fill="currentColor" />
            </svg>
          </a>
        </footer>
      </div>
      <div>
        <div id="about-me" className="flex flex-col px-[1.50rem] py-10 bg-gray-700">
          <h2 className="text-2xl mb-4 max-w-2xl pb-10 tracking-widest">ABOUT ME</h2>
          <p className="text-lg text-white-700 max-w-2xl">
            I am a Software Engineer with a passion for Android development and web technologies.
            From a young age I've been compelled in understanding how the world operates.  
            I love learning how things work and exploring new technologies.
            I also love to hike and do photography in my free time.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col px-[1.50rem] py-10 bg-gray-800 text-white">
          <h2 className="text-2xl mb-4 max-w-2xl pb-10 tracking-widest">FEATURED PROJECTS</h2>
          <div className="flex flex-col gap-3 pb-3">
            <a
              href="https://github.com/theDeveloperShoon/DataLift"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div 
                className="w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded-lg hover:opacity-80 transition-opacity duration-200"
                style={{ backgroundImage: "url('/dataliftscreenshot-left.jpg')" }}
              />
            </a>
            <div>
              <a
                href="https://github.com/theDeveloperShoon/DataLift"
                target="_blank"
                rel="noopener"
              >
                <p className="text-base font-medium leading-normal">Datalift</p>
              </a>
              <p className="text-sm font-normal text-gray-400">
                An Android app that helps you track your data usage and manage your data plans.
                </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col px-[1.50rem] bg-gray-900 py-10 text-white">
          <h2 className="text-2xl tracking-widest py-3">SKILLS</h2>
          <div className="flex flex-wrap gap-4 mt-4 pr-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center px-[1.50rem] py-10 text-white">
          <h2 className="text-center text-2xl pb-3">STAY CONNECTED</h2>
          <div className="flex gap-4">
            {Object.entries(socials).map(([platform, { url, icon: Icon }]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 p-3 transition-colors"
                style={{ width: 'auto' }}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}