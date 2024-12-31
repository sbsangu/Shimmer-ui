

const Shimmer = () => {
  return (
   <div className="flex flex-wrap p-4 ">
     {Array(20).fill(0).map((n,i) => ( <div key={i} className='h-64 w-64 gap-4 m-4 bg-gray-400 border border-b' />))}
 
  
   </div>
  )
}

export default Shimmer