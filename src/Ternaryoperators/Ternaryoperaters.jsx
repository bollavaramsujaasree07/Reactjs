import React from "react";
const isLogin = true;
function Ternaryoperators() {
return (
  <div>
    {isLogin ? <h2>Welcome Back!</h2> :<h2>Please Login!</h2> }
  </div>
);
}
export default Ternaryoperators; 