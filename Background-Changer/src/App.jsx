import React ,{ useState } from 'react'


function App() {
  const [color, setColor] = useState('black')

  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}} >
        <div className='fixed flex flex-wrap justify-center align-bottom bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className={`outline-none px-4 py-1 rounded-full shadow-lg bg-red-600 cursor-pointer ${color === 'red' ? 'ring-3 ring-black' : ''}`} 
            onClick={()=>setColor(color === 'red' ? 'black' : 'red')}
            >Red</button>
            <button className={`outline-none px-4 py-1 rounded-full shadow-lg bg-blue-600 cursor-pointer ${color === 'blue' ? 'ring-3 ring-black' : ''}`}  onClick={()=>setColor(color === 'blue' ? 'black' : 'blue')}>Blue</button>
            <button className={`outline-none px-4 py-1 rounded-full shadow-lg bg-orange-600 cursor-pointer ${color === 'orange' ? 'ring-3 ring-black' : ''}`} onClick={()=>setColor(color === 'orange' ? 'black' : 'orange')}>Orange</button>
          </div>
        </div>
      </div>
      
   
  )
}

export default App
