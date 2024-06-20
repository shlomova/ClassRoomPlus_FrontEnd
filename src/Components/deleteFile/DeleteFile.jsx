import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GetFiles from '../getFiles/getFiles';

const DeleteFile = ({ theId}) => {
    useEffect( () => {
        console.log(theId);
        const fetchData = async() => {
        try{
        const respons = await axios.delete(`http://localhost:3000/files/${theId}`, {withCredentials: true})
        console.log('hey hey hey');
        window.location.reload()
    }catch(err) {
        console.log(err)
    }
}
    fetchData()
    }, [theId]); 
  
    return (
        <>
        <div>Deleted File</div>
     
        </>
    )
}

export default DeleteFile
