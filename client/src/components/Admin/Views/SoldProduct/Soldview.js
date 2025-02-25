import React, { useEffect, useState } from 'react'
import Soldside from './soldside'
function Soldview() {
    const [data,setdata]=useState([])

    const getdata = async () =>{
        fetch("http://localhost:8000/admin/view/soldout",{
            method:"get"
        }).then((res)=>res.json())
        .then((data)=>{
            // console.log(data.data)
            setdata(data.data)
        })
    }
useEffect(()=>{
getdata();
},[])
return (
    <div>
        <div>
            <Soldside data={data} getdata={getdata}/>
        </div>
        
    </div>
)
}

export default Soldview
