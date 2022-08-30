import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Transition from "../components/Transition";
import styles from "../styles/About.module.css";
import "../styles/Mobile.module.css";

export default function About({}): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo app about</title>
        <meta name="description" content="Todo app bootstrapped with Bun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
        <a className={styles.top}>← Back</a>
      </Link>

      <Header />

      <main>
        <h1>Todo app</h1>
        <Transition>
          <article>
            <section>
              <h2>About</h2>
              <p>A dead simple todo app bootstrapped with bun.</p>
            </section>
            <section>
              <h2>Features</h2>
              <ul>
                <li>Add, remove todos</li>
                <li>Mark todos as done</li>
                <li>Drag and drop todos</li>
                <li>Save todos in local storage</li>
                <li>Open source</li>
              </ul>
            </section>
          </article>
        </Transition>
      </main>

      <Footer />
    </div>
  );
}
