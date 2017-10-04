import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import stylesheet from 'styles/app.styl';

// SEO stuff
const structuredData = `{
  "@context": "http://schema.org",
  "@type": "Organization",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "",
    "addressRegion": "GB-SCT",
    "streetAddress": ""
  },
  "email": "mailto:info@falconi.com",
  "name": "falconi ",
  "description": "Your online business service",
  "telephone": "",
  "url": "http://www.falconi.com",
  "sameAs": [
    "https://www.linkedin.com/company/falconi-com",
    "https://twitter.com/falconibusiness"
  ]
}`;

// segment
const analyticsScript = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("---");
analytics.page('Marketing Site', {
  platform: 'www'
});
}}();`;

// Chat
const chat = `window.$crisp=[];window.CRISP_WEBSITE_ID="dce53f8c-b3c4-44c1-982b-47a8b918db77";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`;

export default class MyDocument extends Document {

  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    const styles = flush();
    return { html, head, styles };
  }

  render() {
    return (
      <html lang="en-GB">
        <Head>
          <title>falconi - Your online business service</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="Accounting, expenses, team management, legal, HR, payroll, company secretarial and more… all in one smart place." />
          <meta name="keywords" content="accountancy services, accountant, small business, bookkeeping, accounting consultancy, tax, filing, tax preparation, expenses, company secretarial, company administration, company admin, company manager, hr, human resource, resource management, payroll, benefits, advice, legal aid, lawyer, legal, solicitor, compliance" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="falconi - Your online business service" />
          <meta property="og:type" content="business.business" />
          <meta property="og:url" content="https://www.falconi.com/" />
          <meta property="og:image" content="https://www.falconi.com/static/logos/logo-g-transparent.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="./static/favicons/apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="./static/favicons/favicon-32x32.png" sizes="32x32" />
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: analyticsScript }} />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
          <script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charSet="utf-8"></script>
        </Head>
        <body className="gc-body">
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: structuredData }} />
          <script type='text/javascript' dangerouslySetInnerHTML={{ __html: chat }} />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
