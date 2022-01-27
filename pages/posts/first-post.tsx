import Link from 'next/link'
import Head from 'next/head'

const FirstPost: any = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="text-3xl font-bold underline bg-teal-200">First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default FirstPost