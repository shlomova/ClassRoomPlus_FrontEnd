import React, { useState } from 'react';
import './AddFile.css';
import axios from 'axios';

function AddFile({ courseId, onFileUpload }) {
  const [showForm, setShowForm] = useState(true);
  const [file, setFile] = useState(null);
  const [formDetails, setFormDetails] = useState({});
  const [image, setImage] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    Object.entries(formDetails).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(`http://localhost:3000/files/course/${courseId}`, formData, { withCredentials: true })
      .then((res) => {
        const imageUrl = `http://localhost:3000/${correctFilePath(res.data.file.file)}`;
        setImage(imageUrl);
        onFileUpload({ ...res.data.file, file: imageUrl });
        setShowForm(false);
      })
      .catch((err) => {
        console.error("Error during file upload:", err);
      });
  };

  const correctFilePath = (filePath) => {
    return filePath.replace(/\\/g, '/');
  };

  return (
    <>
      {showForm && (
        <main id='theFile'>
          <form className='form' onSubmit={handleSubmit}>
            <input
              id='theIn'
              type='file'
              name='file'
              accept='.jpg,.jpeg,.png,.doc,.docx,.pdf'
              onChange={handleFile}
            />
            <input
              id='inputs'
              type='text'
              name='post'
              placeholder='post'
              onChange={handleOnChange}
            />
            <input className='submit' type='submit' value='Upload' />
          </form>
        </main>
      )}
    </>
  );
}

export default AddFile;
