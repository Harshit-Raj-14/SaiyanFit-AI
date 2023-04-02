import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
        <meta
          property="og:title"
          content="build by team Eklavya."
          key="title"
        />
        <meta
          property="og:description"
          content="Get your personalized fitness and diet plan specially designed by a specialized trained AI."
          key="description"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
