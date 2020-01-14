import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          {/* 메타테그 */}
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent'></meta>
          <meta name='naver-site-verification' content='5a2b133713b38a2581d3bc0c5a223fa05f542834' />
          <meta name='application-name' content='자동차로 하나되는 세상, 차봇 ㅣ CHABOT Services' />
          <meta
            name='msapplication-tooltip'
            content='자동차로 하나되는 세상, 차봇 ㅣ CHABOT Services'
          />
          <meta
            id='meta_og_title'
            property='og:title'
            content='자동차로 하나되는 세상, 차봇 ㅣ CHABOT Services'
          />
          <meta name='description' content='자동차로 하나되는 세상, 차봇 ㅣ CHABOT Services' />
          <meta
            property='og:description'
            content='자동차로 하나되는 세상, 차봇 ㅣ CHABOT Services'
          />
          <meta
            id='og:image'
            property='og:image'
            content='https://www.chabot.kr/images/chabot_logo.gif?param'
          />
          <meta
            name='keywords'
            content='차봇,자동차 보험, 다이렉트 보험, 보험, 보험다모아, 자동차보험 비교견적'
          />
          <link rel='icon' href='/static/chabot_favicon.gif' type='image/x-icon' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
          />
          {/* <link
            rel='stylesheet'
            href='//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css'
          ></link> */}
          <link
            href='https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap'
            rel='stylesheet'></link>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
          {/* <link
            href='https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap'
            rel='stylesheet'></link> */}
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
