import Document, { Head, Html, Main, NextScript } from "next/document";

/* tslint:disable */
/* eslint-disable */

export default class RootDocument extends Document {
    render() {
        return (
          <Html>
              <Head>
                  <script src="https://apis.google.com/js/api.js" />
                  <script dangerouslySetInnerHTML={{
                    __html : `
                        var apiKey = '${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}';
                        var clientId = '${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}';
                        var scopes = 'profile';
                        
                        gapi.load('client:auth2', function() {
                          gapi.client.init({
                              apiKey: apiKey,
                              clientId: clientId,
                              scope: scopes
                          }).then(r => {
                            console.log(r)
                          }).catch(r => {
                            console.log(r)
                          })
                        })
                    `
                  }}/>

              </Head>
              <body>
              <Main />
              <NextScript />
              </body>
          </Html>
        );
    }
}


