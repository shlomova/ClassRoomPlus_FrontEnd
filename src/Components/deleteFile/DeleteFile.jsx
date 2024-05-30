import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GetFiles from '../getFiles/getFiles';

const DeleteFile = ({ theId, images }) => {
    const [toGet, setToGet] = useState(false)
    useEffect( () => {
        console.log(theId);
        const fetchData = async() => {
        try{
        const respons = await axios.delete(`http://localhost:3000/files/find/${theId}`, {withCredentials: true})
        window.location.reload()
        console.log(respons);
    }catch(err) {
        console.log(err)
    }
}
    fetchData()
    setToGet(true)
    }, [theId]); 
  
    return (
        <>
        <div>Deleted File</div>
        {toGet&&(
            <GetFiles images={images}/>
        )}
        </>
    )
}

export default DeleteFile
