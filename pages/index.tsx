import { useAuthContext } from '#/context/AuthContext'
import type { AuthContext } from '#/types/context'
import type { NextPage } from 'next'
import Head from 'next/head'
import type { Event } from '../types'

const events: Event[] = [
  {
    id: 1,
    name: 'React Berlin',
    description: 'Some nice React conferace in berlin',
  },
  { id: 2, name: 'jsconf Europe', description: 'javascript in Europe' },
  { id: 3, name: 'Nextjs', description: 'nextjs conf to the next level' },
]

const Home: NextPage = () => {
  const { user }: AuthContext = useAuthContext()

  return (
    <>
      <Head>
        <title>bitconf - conference list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!user && `you are not logged in`}
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {events.map((event) => (
            <a
              key={event.id}
              href="//"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">{event.name} &rarr;</h3>
              <p className="mt-4 text-xl">{event.description}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
