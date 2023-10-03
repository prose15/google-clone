import React,{createContext , useContext, useEffect, useState } from 'react'

const ResultContext = createContext();
const baseUrl = 'https://web-search30.p.rapidapi.com';

export const ResultContextProvider = ({children}) => {
    const [results,Setresults] = useState([]);
    const [isLoading,SetIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    // const [knowlege_panel,Setknowlege_panel] = useState([]);
    useEffect(()=>{
      console.warn(searchTerm)
    },[searchTerm])

    const getResults = async (type) =>{
        SetIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '416f2e3a11mshd9dc8e70ce72d7ep13c998jsnd3d816f82888',
              'X-RapidAPI-Host': 'web-search30.p.rapidapi.com'
            }
        });
        const data= await response.json();
        console.log(data)
        Setresults(data);
        SetIsLoading(false);
    }
  return (
    <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
        {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = ()=> useContext(ResultContext);