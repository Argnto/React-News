import Head from 'next/head'
import NewsFetch from '../components/NewsFetch'

export default function Home() {
  return (
    <div >
      <Head>
        <title>React News</title>
      </Head>

      <main>
        <h1>
          React News
        </h1>
        <NewsFetch />
      </main>
    </div>
  )
}
