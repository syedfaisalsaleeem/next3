import React from 'react';

import { InstantSearch, SearchBox, Hits,Highlight} from 'react-instantsearch/dom';
import Head from "next/head"
const algoliasearch =require("algoliasearch")
const searchClient = algoliasearch(
    'EIBX1WTLJD',
    '3177db902196a1ed63816828758da5d3'
  );

 
export default function ContactGs1(){
    const hit=({hit})=>{
        return(
        <div>
          <img src={hit.image}/>
          {hit.t}
          <div>
          
          </div>
          
        </div>
        )}
    return(
       <>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css" integrity="sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8=" crossorigin="anonymous">
            </link>
            </Head>
            <main>
                <div>
                <InstantSearch
                indexName="CIH"
                searchClient={searchClient}
                
                >
                <SearchBox />
                <div style={{display:"none"}}>
                <Hits hitComponent={hit}/>
                </div>
                
            </InstantSearch>
            </div>
            </main>
    

       </>
    )
}