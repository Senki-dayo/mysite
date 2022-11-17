import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div id="mainimg">
        <img src="images/mainimg_bg.png" alt="" id="kazari"></img>
        </div>
      </header>

      <main className={styles.main}>

        <div className={styles.frame1}>
          <div className={styles.text}>title</div>
          <div className={styles.photo}>image</div>
        </div>

        <div className={styles.frame2}>
          <div className={styles.photo}>image</div>
          <div className={styles.text}>text</div>
        </div>

        <div className={styles.frame3}>
          <div className={styles.photo}>image</div>
          <div className={styles.text}>text</div>
        </div>

        <div className={styles.frame4}>
          <p>Mさんの1日</p>
          <div className={styles.flexbox}>
            <div className={styles.photo}>image</div>
            <div className={styles.text}>text</div>
          </div>
        </div>

        <div className={styles.frame5}>
          <div className={styles.photo}>image</div>
          <div className={styles.text}>text</div>
        </div>




        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <img src="images/images.JPG"></img>
      </main>
    </div>
  )
}
