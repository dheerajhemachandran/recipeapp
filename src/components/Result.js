import React from 'react'
import { useState,useEffect } from 'react'

const Result = ({query}) => {
  const [results, setresults] = useState(null)
  const [next, setnext] = useState([])
  
  console.log(process.env)
  async function nextresult(){
    const response=await fetch(next)
    const json=await response.json();
    setresults(results.concat(json.hits))
    setnext(json._links.next.href)
  }



  useEffect(() => {
  async function fetchresult(){
    const response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query.join(" ")}&app_id=d391c1f2&app_key=${process.env.REACT_APP_APPID}`)
    const json = await response.json();
    console.log(results)
    setresults(json.hits)
    setnext(json._links.next.href)
  }
  fetchresult() 
  }, [query])

  return (
    <div className='flex flex-col items-center py-8 bg-slate-800'>
      {query.length?<div className="text-lg font-bold mb-6">{results.length} results found</div>:<></>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {results?
        results.map((result,index)=>{
          return(
            
            <a class="rounded-lg shadow-lg bg-slate-600 w-[300px] hover:bg-slate-400" target="__blank" key={index} href={result.recipe.url}>
             
                <img class="rounded-t-lg w-[300px] h-[200px]" src={result.recipe.image} alt=""/>
              
              <div class="py-6 px-2">
                <h5 class="text-gray-300 text-xl font-medium mb-2">{result.recipe.label}</h5>
                <p class="text-gray-200 text-base mb-4">
                  calories: {Math.round(result.recipe.calories)}
                </p>
                </div>
            </a>
          )
        }):
        <></>}
      </div>
      {query.length?
      <div className="my-4">
        <button className='px-2 py-1 bg-slate-200 rounded text-slate-900' onClick={nextresult}>more</button>
      </div>:<></>}
      
    </div>
  )
}

export default Result
