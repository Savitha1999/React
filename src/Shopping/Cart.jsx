import React, { useEffect, useState } from "react";


export default function Cart(props)
{
   const[data, setdata] = useState([]);

   useEffect( () =>
{
     if(props.sendcart)
        {
            setdata(props.sendcart)

           
        }

        
},[props.sendcart])


    const rem = (id) =>
        {
            const ritem = data.filter((item) => item.id !== id)
            setdata(ritem)
            props.removedata(ritem)
             
        }

    return(
        <div>
            <table>
                <tr>
                    <th>slno</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Action</th>
                </tr>
       {data.map((data,index) => (

            <tr>
                <td>{index +1}</td>
                <td><img src={data.image} width={50} height={50} /></td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td onClick={() => rem(data.id)}><img  src={require('./img/remove.png')} width={30} height={30} /></td>

            </tr>



       ))}
        
        </table>
    </div>
    )
}