import React from 'react'

function ProductList(props) {
  return (
    <div>
   {   props.details.map((val,id)=>{
     <ul>
        <li>{val}</li>
        <li>Home</li>
     </ul>
   })}
    </div>
  )
}

export default ProductList
