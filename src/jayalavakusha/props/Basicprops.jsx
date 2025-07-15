import React from "react";


function Basicprops({name , age = 19}) {
  return (
    <div>
      <h2 >name: {name}</h2>
      <h2>age: {age}</h2>
    </div>
  )
}
export { Basicprops };