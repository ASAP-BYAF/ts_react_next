import { NextPage, GetStaticProps, NextPageContext } from "next";
import Head from "next/head";
import { ReactNode } from "react";

type SSGProps = {
  message: string;
};

const SSG = async () => {
  const message = (await getStaticProps()) as ReactNode;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

const getStaticProps = () => {
  return new Promise((resolve) => {
    const timestamp = new Date();
    const message = `${timestamp} に getStaticProps が実行されました。`;
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
};

export default SSG;
