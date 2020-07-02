import Head from 'next/head'
import Login from "./Login";
import React from 'react';
import Page from "./Page.jsx"
function Home ({data}) {
  
  console.log(data.userId)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
      
        
        
        <Login/>
        
        

      </main>

      <footer>
        
      </footer>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .percent-text{
          text-anchor: middle;
          font-family: 'Roboto', sans-serif;
          
        }
        
      `}</style>
    </div>
  )
      
}
export async function getStaticProps() {
  const res = await fetch('https://if.cyberintelligencehouse.com/api/partner')
  const data = await res.json()

  return {
    props:{
      data
    }
    
      
        
      
    
  }
}

export default Home;
