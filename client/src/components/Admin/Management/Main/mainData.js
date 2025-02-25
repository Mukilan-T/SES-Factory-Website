import React, { useEffect, useState } from 'react'
import Mainside from './MainSite'

function MainData() {
    const [data,setdata]=useState([])
useEffect(()=>{
    fetch("http://localhost:8000/admin/data",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        setdata(data.data)
    })
},[])
return (
    <div>
        <div>
            <Mainside data={data}/>
        </div>
        
    </div>
)
}

export default MainData
