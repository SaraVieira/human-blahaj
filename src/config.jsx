import Head from 'next/head'

const Header = () => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='theme-color' content='#000000' />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        <meta charSet='utf-8' />
        <title>Blåhaj{"'"}s being human</title>
        <meta
          name='description'
          content="Feeling sad? Want to see some Blåhaj's doing human things? You came to the right place"
        />
        <meta name='image' content='https://blahaj.xyz/twitter.jpg' />

        <meta itemProp='name' content="Blåhaj's being human" />
        <meta
          itemProp='description'
          content="Feeling sad? Want to see some Blåhaj's doing human things? You came to the right place"
        />
        <meta itemProp='image' content='https://blahaj.xyz/twitter.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='blahaj.xyz' />
        <meta property='twitter:url' content='https://blahaj.xyz/' />
        <meta name='twitter:title' content="Blåhaj's being human" />
        <meta
          name='twitter:description'
          content="Feeling sad? Want to see some Blåhaj's doing human things? You came to the right place"
        />
        <meta name='twitter:image' content='https://blahaj.xyz/open.jpg' />
        <meta name='twitter:creator' content='@NikkitaFTW' />

        <meta name='og:title' content="Blåhaj's being human" />
        <meta
          name='og:description'
          content="Feeling sad? Want to see some Blåhaj's doing human things? You came to the right place"
        />
        <meta name='og:image' content='https://blahaj.xyz/open.jpg' />
        <meta name='og:url' content='https://blahaj.xyz/' />
        <meta name='og:site_name' content="Blåhaj's being human" />
        <meta name='og:locale' content='en_us' />
        <meta name='og:type' content='website' />
      </Head>
    </>
  )
}

export default Header
