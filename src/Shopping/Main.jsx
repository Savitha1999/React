import React, { useEffect, useState } from "react";

import Shop from "./Shop";
import Cart from "./Cart";
 import Local from "./Local";

export default function Main()
{
   const[productinfo , setproductifo] = useState([]);
   const[cart, setcart] = useState("")
   const[error, seterror] = useState("");
  
 
   useEffect(() =>
{
     const cval= localStorage.getItem("cart");
     setcart(cval);

    if(cval == 0)
        {
            setcart("")
        }

},[cart])

    const addproduct = (id,name,price,image,qty,total)=>
        {
          
          const exist = productinfo.find((item) => item.id == id);

          if(!exist)
            {
              
              
                setproductifo([...productinfo, {id,name,price,image,qty,total}])
                localStorage.setItem("product", JSON.stringify([...productinfo, {id,name,price,image,qty,total}]));
                localStorage.setItem("cart", productinfo.length + parseInt(1) );
                setcart( productinfo.length + parseInt(1));

            }
            else
            {
                seterror("Already Product Added")
            }
                        
        }

        const  productdelete = (rdata) =>
            {

                setproductifo(rdata)
                
                localStorage.setItem("product", JSON.stringify(rdata));
                localStorage.setItem("cart", parseInt(productinfo.length) - parseInt(1))
                setcart(localStorage.getItem("cart"))
            }


            const updatedata = (udata) =>
                {
                    setproductifo(udata)
                
                    localStorage.setItem("product", JSON.stringify(udata));
                    localStorage.setItem("cart", parseInt(JSON.stringify(productinfo.length)) - parseInt(1))             
                }

                
     return(
         <div className="containter">
           
           
           <div className="container text-center bg-primary p-3 text-white">

            <div className="row">
                <div className="col-8 text-center">
                <h1> Simple Shopping Site</h1>
                <p>{error}</p>

                </div>

                <div className="col-4 text-end">
                <img src={require('./img/cart.png')} width={50} height={50}/> {cart}
                
                </div>-

            </div>

             </div> 

              <div className="container   p-2">

                <div className="row text-center">

                <div className="col-4 card ">

                        <Shop id={"1"} name={"Apple"} price={"100"} image={require('./img/apple.png')} addtocart={addproduct} qty="1"/>
                        </div>
           
            
              
              <div className="col-4 card">
                        <Shop id={"2"} name={"Grape"} price={"200"} image={require('./img/grape.png')} addtocart={addproduct} qty="1"/>
                        </div>
              <div className="col-4 card">
                        <Shop id={"3"} name={"Orange"} price={"300"} image={require('./img/orange.png')} addtocart={addproduct} qty="1"/>
                        </div>
                        
                         </div>
              </div>
              {/* <Cart sendcart={productinfo} removedata={productdelete}/> */}

              <Local  sendcart={cart} removedata={productdelete} update={updatedata}/>
          </div>

        
    )
}









