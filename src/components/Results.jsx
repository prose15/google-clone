import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading';

export const Results = () => {
    const {getResults, results, searchTerm, isLoading} = useResultContext();
    console.log(searchTerm)
    const location = useLocation();

    useEffect(()=>{
        getResults(`/?q=${searchTerm}&limit=100`)
    },[searchTerm]);

    if(isLoading) return <Loading />;

switch (location.pathname) {
    case '/search':
        return (
            <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                {results?.results?.map(({url,title},index)=>(
                    <div>
                        <a href={url}></a>
                        <p className='text-sm'>
                            {url.length > 30 ? url.substring(0,30) : url}
                        </p>
                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                            {title}
                        </p>
                    </div>
                ))}
            </div>
        )
        
    case '/images':
        return (
            <div className='flex flex-wrap justify-center items-center'>
                {console.warn(results?.knowledge_panel?.image?.url)}
               <img src= {results?.knowledge_panel?.image?.url} alt=''/>
            </div>
        )
    case '/news':
        return (
            <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
            
                <div>
                    <a href={results?.knowledge_panel?.description.url}></a>
                    <p className='hover:underline dark:text-blue-300 text-blue-700'>
                        {results?.knowledge_panel?.description.url.length > 30 ? results?.knowledge_panel?.description.url.substring(0,30) : results?.knowledge_panel?.description.url}
                    </p>
                    <p className='text-sm'>
                        {results?.knowledge_panel?.description.text}
                    </p>
                </div>
        </div>
        )

    default:
       return 'ERROR';
}
}
