import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | IgNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>15 de setembro de 2021</time>
            <strong>Next.JS - Novidades na versão 10</strong>
            <p>
              Se você nos acompanhou nos últimos posts, já viu que criamos um
              blog com um contador de visitas usando o MongoDB e Next.js, depois
              adicionamos a funcionalidade de dark mode.
            </p>
          </a>

          <a href="#">
            <time>15 de setembro de 2021</time>
            <strong>Next.JS - Novidades na versão 10</strong>
            <p>
              Se você nos acompanhou nos últimos posts, já viu que criamos um
              blog com um contador de visitas usando o MongoDB e Next.js, depois
              adicionamos a funcionalidade de dark mode.
            </p>
          </a>

          <a href="#">
            <time>15 de setembro de 2021</time>
            <strong>Next.JS - Novidades na versão 10</strong>
            <p>
              Se você nos acompanhou nos últimos posts, já viu que criamos um
              blog com um contador de visitas usando o MongoDB e Next.js, depois
              adicionamos a funcionalidade de dark mode.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
