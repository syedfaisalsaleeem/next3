import React from 'react';
<<<<<<< HEAD
import { InstantSearch,Hits,Highlight} from 'react-instantsearch/dom';
import Head from "next/head";
import styles from "./ContactGs1.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {Button} from "@material-ui/core";
import { connectSearchBox } from 'react-instantsearch-dom';
=======

import { InstantSearch, SearchBox, Hits,Highlight} from 'react-instantsearch/dom';
import Head from "next/head"
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
const algoliasearch =require("algoliasearch")
const searchClient = algoliasearch(
    'EIBX1WTLJD',
    '3177db902196a1ed63816828758da5d3'
  );

<<<<<<< HEAD

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "600px",
      height:"60px"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      paddingTop: 5,
      paddingBottom:5,
      paddingLeft:10,
      paddingRight:10,
      marginRight:10
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
 
export default function ContactGs1(){
    const [search,changesearch]=React.useState("")
    const classes = useStyles();
    
    const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
      <div>
                <Paper  className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      className={classes.input}
                      type="search"
                      value={currentRefinement}
                      placeholder="Ask a question ?"
                      inputProps={{ 'aria-label': 'search google maps' }}
                      onChange={event => refine(event.currentTarget.value)}
                    />
                    
                      <Button variant="contained" color="primary" onClick={hits} className={classes.iconButton}> Search</Button>
                    
                    
                    
                  </Paper>
    
      </div>
    );


const CustomSearchBox = connectSearchBox(SearchBox);
=======
 
export default function ContactGs1(){
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
    const hit=({hit})=>{
        return(
        <div>
          <img src={hit.image}/>
          {hit.t}
          <div>
          
          </div>
          
        </div>
        )}
<<<<<<< HEAD
      const handlechange=(event)=>{
        changesearch(event.target.value)
      }
      const hits=()=>{
        console.log("Hits")
        return(
          <div>
            <SearchBox value={"1"}/>
            <Hits hitComponent={hit}/>
          </div>
        )
      }
    return(
       <>
            <Head>
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css" integrity="sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8=" crossorigin="anonymous"></link>
=======
    return(
       <>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css" integrity="sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8=" crossorigin="anonymous">
            </link>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
            </Head>
            <main>
                <div>
                <InstantSearch
<<<<<<< HEAD
                
=======
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                indexName="CIH"
                searchClient={searchClient}
                
                >
<<<<<<< HEAD
                  
                 
                  <CustomSearchBox/>
            
=======
                <SearchBox />
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                <div style={{display:"none"}}>
                <Hits hitComponent={hit}/>
                </div>
                
            </InstantSearch>
            </div>
            </main>
    

       </>
    )
}