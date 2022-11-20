import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import type { Event } from '../types'

const events: Event[] = [
  { id:1, name: 'React Berlin', description: 'Some nice React conferace in berlin'},
  { id:2, name: 'jsconf Europe', description: 'javascript in Europe'},
  { id:3, name: 'Nextjs', description: 'nextjs conf to the next level'},
]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>bitconf - conference list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to bitconf
        </h1>

        <p className="mt-3 text-2xl">
          Get started to get an overview over new conferences
        </p>


        
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {events.map(event => <a key={event.id}
            href="//"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">{event.name} &rarr;</h3>
            <p className="mt-4 text-xl">
              {event.description}
            </p>
          </a>)}
  
    
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home