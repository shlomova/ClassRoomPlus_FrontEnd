import { useState } from 'react'
import './AddFile.css'
import axios from 'axios';

function AddFile({courseId}) {

  const [file, setFile] = useState(null);
  const [formDetails, setFormDetails] = useState({});
  const [image, setImage] = useState('');

  const handleOnChange = e => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    Object.entries(formDetails).forEach(attr => formData.append(attr[0], attr[1]));
    
    axios.post(`http://localhost:3000/files/course/${courseId}`, formData, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        const correctedFilePath = correctFilePath(res.data.file.file);
        console.log(correctedFilePath);
        axios.get(`http://localhost:3000/${correctedFilePath}`, {withCredentials: true})
          .then(res => {
            console.log(res.data);
            const aimage = `http://localhost:3000/${correctedFilePath}`;
            setImage(aimage);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  const correctFilePath = (filePath) => {
    return filePath.replace(/\\/g, '/');
  };

  return (
    <>
      <main id='theFile'>
        <h1>Upload an image</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleFile} />
          <input type="text" name="username" placeholder={'Username'} onChange={handleOnChange} />
          <input type="text" name="email" placeholder={'Email'} onChange={handleOnChange} />
          <input className='submit' type="submit" value="Upload" />
        </form>
        {image &&
          <div>
            <a href={image} target='_blank' rel='noopener noreferrer'>link</a>
            <img src={image} alt="" />
          </div>
        }
      </main>
    </>
  );
}

export default AddFile;
