import React from "react";


export default function Shop(props)
{
    const addprod = (e) =>
    {
    
        props.addtocart(props.id, props.name,props.price,props.image ,props.qty)

    }
    return( 
        <>
            <div className="card-body">
            <img src={props.image}  width="150px" height="150px"/>

               <p> {props.name}</p>
                <h3> {props.price}</h3>
                <button className="btn btn-success" onClick={(e) => addprod()}>Add to Cart</button>
                
            </div>

        </>
               
                
    )
}