import React, { useState } from 'react';
import { useEffect } from 'react';
import './delete.css';
import axios from 'axios';

const Delete = ({ categories }) => {
    
    const userInfo = localStorage.getItem('userInfo');
    const {data} = JSON.parse(userInfo)

    const [selectedCategoryId, setSelectedCategoryId] = useState("All");
    const [showConfirm, setShowConfirm] = useState(false);
    const [showErrror, setShowError] = useState(false);
    const [updetedCategory, setUpdetedCategory] = useState({})
    


    const handleSelect = async (event) => {
        const { value } = event.target;
        setSelectedCategoryId(value);   
        const selectedCategory = categories.find(category => category._id === value);
        const selectedCategoryByUserId = selectedCategory.userId;
        const selectedRole = selectedCategory.subscription.find(sub => sub.role == 'teacher')
        console.log(selectedRole);
        setUpdetedCategory({
            theCategory: selectedCategory.courseName,
            role: selectedRole.role
        })
        console.log(updetedCategory);
        console.log();
        console.log(selectedCategoryByUserId);
        console.log(data.user._id);
        if(selectedCategoryByUserId !== data.user._id){
            setShowError(true)
            return
        }

        const theValue = value
        if (value !== "All") {
            try{
                console.log(updetedCategory);
                await axios.delete(`http://localhost:3000/courses/${theValue}`, {withCredentials: true})
                console.log('put');
                setShowConfirm(true);
            }catch(error){
                setShowError(true)
            }
            
        }
    };

    const handleConfirmDelete = async () => {
        console.log(updetedCategory);
        try{
        await axios.delete(`http://localhost:3000/courses/${selectedCategoryId}`, updetedCategory, {withCredentials: true})
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
