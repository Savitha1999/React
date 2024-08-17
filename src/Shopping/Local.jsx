import React, { useEffect, useState } from "react";
import './normal.css';


export default function Local(props)
{

    const[data, setdatas] = useState([]);
    const[nqty,setnqty] = useState("1")

    useEffect(()=>
    {
        const localdata = localStorage.getItem("product")

        if(localdata)
            {
                const abc = JSON.parse(localdata)
                setdatas(abc);
            }
       
    },[props])

    const rem = (id) =>
        {
            const ritem = data.filter((item) => item.id !== id)
            setdatas(ritem)
            props.removedata(ritem)
             
        }

        const updateqty = (e,id)=>
            {
                setnqty(e.target.value);

                const checkqty =e.target.value;

                if(checkqty != "0")
                {
                    const newdata=data.map( (item) => item.id === id  ? {...item , qty : parseInt(e.target.value)}: item )
                    props.update(newdata);
                }
                else
                {
                    alert("Quantity Unable 0 ")
                }

               
              
            }
               
        const totalcall =()=>
            {
                let total=0;
                return data.reduce((total, item) => total + (item.price * item.qty), 0);
            }                 


            
    return(
        <div className="container">
            <table>
                <tr>
                    <th>slno</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product QTY</th>
                    <th>Product Total</th>
                    <th>Action</th>
                </tr>
       {data.map((data,index) => (

            <tr>
                <td>{index +1}</td>
                <td><img src={data.image} width={50} height={50} /></td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td><input type="number" value={data.qty} onChange={(e) => updateqty(e , data.id, data.price)} /></td>
                <td>{data.price * data.qty }</td>
                <td onClick={() => rem(data.id)}><img  src={require('./img/remove.png')} width={30} height={30} /></td>

            </tr>



       ))}
        
        </table>

        <h3> Total : {totalcall()} </h3>
    </div>
    )
}














