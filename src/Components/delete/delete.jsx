import React, { useState } from 'react';
import { useEffect } from 'react';
import './delete.css';
import axios from 'axios';

const Delete = ({ categories }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState("All");
    const [showConfirm, setShowConfirm] = useState(false);
    const [showErrror, setShowError] = useState(false);
    
    const userInfo = localStorage.getItem('userInfo');
    const {data} = JSON.parse(userInfo)
  
  
    useEffect(() => {
        console.log(data);
        console.log(categories)
    }, []);
    


    const handleSelect = async (event) => {
        const { value } = event.target;
        setSelectedCategoryId(value);
        const theValue = value
        if (value !== "All") {
            try{
                console.log(theValue);
                await axios.delete(`http://localhost:3000/courses/${theValue}`, {withCredentials: true})
                setShowConfirm(true);
            }catch(error){
                setShowError(true)
            }
            
        }
    };

    const handleConfirmDelete = async () => {
        try{
        await axios.delete(`http://localhost:3000/courses/${selectedCategoryId}`, {withCredentials: true})
        }
        catch (error) {
            console.error('Error delete course:', error);
        }
        setSelectedCategoryId("All");
        window.location.reload();

    };

    const handleCancelDelete = () => {
        setShowConfirm(false);
        setSelectedCategoryId("All");
    };
    const handleBotton = () =>{
        setShowError(false)
        setSelectedCategoryId("All")   
    }

    return (
            <div>
                <span className='title'>To Delete</span>
                <select value={selectedCategoryId} onChange={handleSelect}>
                    <option value="All">pick</option>
                    {categories?.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.courseName}
                        </option>
                    ))}
                </select>
            {showErrror && (
                <div className="confirm-modal">
                    <p>Sorry but you do not have permission</p>
                    <div className="buttons">
                        <button className="confirm" onClick={handleBotton}>ok</button>
                    </div>
                </div>
            )}
            {showConfirm && (
                <div className="confirm-modal">
                    <p>Are you sure you want to delete this course?</p>
                    <div className="buttons">
                        <button className="confirm" onClick={handleConfirmDelete}>Yes</button>
                        <button className="cancel" onClick={handleCancelDelete}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Delete;
