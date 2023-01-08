import React from 'react'

const Search = ({query,setquery}) => {

  const handlesubmit=(e)=>{
    e.preventDefault()
    const item=e.target.ingredient.value;
    if (!query.includes(item) && item!=="") 
    {
      setquery([...query,item])
    }
  }

  function removeItem(index) {
    setquery([...query.slice(0, index), ...query.slice(index + 1)]);
  }

  return (
    <div className='flex items-center flex-col gap-5'>
      
      <form className="flex gap-1 md:gap-4 flex-row items-center text-sm md:text-lg" onSubmit={handlesubmit}>
        <input className='rounded-lg px-2 py-1 text-slate-900' placeholder='add ingredients' name="ingredient" type="text" />
        <button type='submit' className='bg-blue-700 px-2 py-1 rounded'>+</button>
      </form>

      <div className="font-bold text-xl">
      {query.length?
      "Ingredients:":
      "No ingredients added"}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {query.map((item,index)=>{
          return(<div key={index}  className="bg-slate-200 text-slate-700 rounded-lg py-1 px-2 flex justify-between gap-2">
                  <p>{item}</p>
                  <button onClick={() => removeItem(index)} className='text-black'>x</button>
                </div>)})}
        
      </div>
    </div>
  )
}

export default Search
