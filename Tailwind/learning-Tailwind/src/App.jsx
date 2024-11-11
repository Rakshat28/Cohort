
function App() {
  return (
  <>
  {/* flexbox in CSS-- */}
    <div style={{display: "flex" , justifyContent: "center"}}>
      <div style={{backgroundColor: "red"}}>hi</div>
      <div style={{backgroundColor: "blue"}}>hi</div>
      <div style={{backgroundColor: "green"}}>hi</div>
    </div>
    {/* now doing the same thing in tailwind */}
    <div className='flex justify-center'>
      <div className='bg-yellow-500 '>hi</div>
      <div className='bg-blue-700 '>hi</div>
      <div className='bg-green-700 '>hi</div>
    </div>


    <div className='flex justify-center'>
      <div className='bg-yellow-500 w-full'>hi</div>
      <div className='bg-blue-700 w-full'>hi</div>
      <div className='bg-green-700 w-full'>hi</div>
    </div>
    {/* Now lets learn grid in tailwind */}
    <div className='grid grid-cols-3'>
      <div className='bg-yellow-500'>hi</div>
      <div className='bg-blue-700'>hi</div>
      <div className='bg-green-700'>hi</div>
    </div>

    <div className='grid grid-cols-12'>
      <div className='bg-yellow-500 col-span-5'>hi</div>
      <div className='bg-blue-700 col-span-2'>hi</div>
      <div className='bg-green-700 col-span-5'>hi</div>
    </div>

    {/* now we will try to make our page responsive
    
    we will define screen widhs for different spans of elements in a grid
    
    some standard breakpoints for a screen are - sm , md, lg,xl,2xl*/}

    {/* tailwind works mobile first 
    unpreffixed utilities like 'uppercase' will take effect on all screen sizeas 
    while prefixed utilities like 'md:uppercase' only takes effect at the specified
    beakkpoint and above */}

    <div className='bg-red-500 md:bg-blue-500 sm-green-500'>
      hello
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3'>

      <div className='bg-purple-400'>teri</div>
      <div className='bg-pink-900 rounded-full'>mummy</div>
      <div className='bg-red-700 text-white rounded-lg'>meri</div>

    </div>

    

  </>
  )
}

export default App
