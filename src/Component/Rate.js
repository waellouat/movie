import React from 'react'

const Rate = ({rate,setRate}) => {
  const arrStar=[1,2,3,4,5]
  return (
    
    <div className='ratecounter'>
      {
        arrStar.map(el=> 
          <span onClick={()=>{setRate(el)}}>
            {el <= rate ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
          </span>
           )
      }
    </div>
  )
}

export default Rate
