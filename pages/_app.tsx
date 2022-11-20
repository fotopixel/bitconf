import '../styles/globals.css'
import type { AppProps } from 'next/app'

import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { AuthContextProvider } from '#/context/AuthContext'


function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=59',
  )

  return {
    props: {},
  }
}

export default MyApp
