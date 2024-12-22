import styles from "./page.module.css";
import { ImageBasePath } from "./../components/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ImageBasePath
          src={"/next.svg"}
          width={180}
          height={38}
          alt="Next.js logo"
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageBasePath
              src={"/vercel.svg"}
              className={styles.logo}
              width={20}
              height={20}
              alt="Vercel logomark"
            />
            Deploy now
          </a>
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
          <ImageBasePath
            aria-hidden
            src={"/file.svg"}
            width={16}
            height={16}
            alt="File icon"
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageBasePath
            aria-hidden
            src={"/window.svg"}
            width={16}
            height={16}
            alt="window icon"
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageBasePath
            aria-hidden
            src={"/globe.svg"}
            width={16}
            height={16}
            alt="Globe icon"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
