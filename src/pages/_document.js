import { Head, Html, Main, NextScript } from "next/document";

function Document(props) {
  return (
    <Html lang="fa" className="bg-primary-dark">
      <Head>
        {(props.userAgent.isMobile || props.userAgent.isTablet) && (
          <meta name="viewport" content="width=1280" />
        )}
        <link rel="shortcut icon" href="/images/barnomz-logo.svg" />
        <link
          rel="preload"
          href="/fonts/Vazirmatn/woff2/Vazirmatn-Regular.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Vazirmatn/woff2/Vazirmatn-Bold.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Inter/woff2/Inter-Regular.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Inter/woff2/Inter-Bold.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
      </Head>
      <body dir="rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const userAgent = ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent;

  return {
    ...initialProps,
    userAgent: {
      isMobile: /mobile/i.test(userAgent),
      isTablet: /tablet/i.test(userAgent),
    },
  };
};

export default Document;
