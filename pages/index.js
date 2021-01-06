import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-screen bg-gray-900 text-gray-200'>
      <Head>
        <title>Cinecast Films</title>
      </Head>

      <div className='flex justify-center min-h-screen flex flex-col text-center p-8'>
        <h1 className='font-black tracking-tight text-6xl md:text-8xl leading-tight'>
          Cinecast Films
        </h1>
        <h2 className='pt-6 font-bold text-yellow-500 text-3xl md:text-5xl animate-fade-in'>
          Coming soon
        </h2>
      </div>
    </div>
  )
}
