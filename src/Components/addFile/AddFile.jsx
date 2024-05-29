import { useState } from 'react'
import './AddFile.css'
import axios from 'axios';

function AddFile({courseId}) {

  const [file, setFile] = useState()
  const [formDetails, setFormDetails] = useState({})
  const [image, setImage] = useState('')

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormDetails({ ...formDetails, [name]: value })
  }

  const handleFile = e => {
    setFile(e.target.files[0])
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    Object.entries(formDetails).map(attr => formData.append(attr[0], attr[1]))
    axios.post(`http://localhost:3000/files/course/${courseId}`, formData, {withCredentials: true})
      .then((res) => {
        console.log(res.data)
        console.log(res.data.file.file);
        setImage(`http://localhost:3000${res.data.file.file}`)
        console.log(image);
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <main id='theFile'>
        <h1>Upload an image</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type="file" name="image" onChange={handleFile} />
          <input type="text" name="username" placeholder={'Username'} onChange={handleOnChange} />
          <input type="text" name="email" placeholder={'Email'} onChange={handleOnChange} />
          <input className='submit' type="submit" value="Upload" />
        </form>
        {image &&
        <div>
            הגיע לכאן
          <img src={image} alt="" />
          </div>
        }
      </main>
    </>
  )
}

export default AddFile
