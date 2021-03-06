
import Link from 'next/link'
import fetch from 'node-fetch'

function Page({ stars }) {
console.log({stars})
  return (

    <div>
      <p>Next.js has {stars} ⭐️</p>
      <Link href="/preact-stars">
        <a>How about preact?</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default Page
