import Head from "next/head";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/1
// - /product/2
// - /product/3
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  // ...
  return (
    <div>
      <Head>
        <title>Static Site Generation(Dynamic routing)</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです。
          Dynamic ルーティングが採用されています。
        </p>
        <p>このページの id は {id} です。</p>
      </main>
    </div>
  );
}
