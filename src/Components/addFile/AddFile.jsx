import { useState } from 'react';
import './AddFile.css';
import axios from 'axios';

function AddFile({ courseId }) {
  const [file, setFile] = useState();
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
    const formData = new FormData();
    formData.append('file', file);
    Object.entries(formDetails).map((attr) => formData.append(attr[0], attr[1]));
    axios
      .post(`http://localhost:3000/files/course/${courseId}`, formData, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.file.file);
        const imageUrl = `http://localhost:3000/${res.data.file.file.replace(/\\/g, '/')}`;
        // console.log(imageUrl);
        setImage(imageUrl);
        console.log(image);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main id='theFile'>
        <form className='form' onSubmit={handleSubmit}>
          <input id='theIn' type="file" name="file" accept=".jpg,.jpeg,.png,.doc,.docx,.pdf" onChange={handleFile} />
          <input id='inputs' type="text" name="post" placeholder='post' onChange={handleOnChange} />
          <input className='submit' type="submit" value="Upload" />
        </form>
        {image && (
          <div>
            <a href={image} target='_blank' rel='noopener noreferrer'>link</a>
            <img src={image} alt="" />
          </div>
        )}
      </main>
    </>
  );
}

export default AddFile;


// import { useState } from 'react'
// import './AddFile.css'
// import axios from 'axios';

// function AddFile({courseId}) {

//   const [file, setFile] = useState()
//   const [formDetails, setFormDetails] = useState({})
//   const [image, setImage] = useState('')
  

//   const handleOnChange = e => {
//     const { name, value } = e.target
//     setFormDetails({ ...formDetails, [name]: value })
//   }

//   const handleFile = e => {
//     setFile(e.target.files[0])
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append('file', file)
//     Object.entries(formDetails).map(attr => formData.append(attr[0], attr[1]))
//     axios.post(`http://localhost:3000/files/course/${courseId}`, formData, {withCredentials: true})
//       .then((res) => {
//         console.log(res.data)
//         console.log(res.data.file.file);
//         const imageUrl = `http://localhost:3000/${res.data.file.file}`;
//         console.log(imageUrl);
//         setImage(imageUrl);
//         console.log(image); 
//       })
//       .catch(err => console.log(err))
//   }
  
//   return (
//     <>
//       <main id='theFile'>
//         {/* <h1>Upload an image</h1> */}
//         <form className='form' onSubmit={handleSubmit}>
//         <input id='theIn'  type="file" name="file" accept=".jpg,.jpeg,.png,.doc,.docx,.pdf" onChange={handleFile} />
//         <input  id='inputs' type="text" name="post" placeholder='post'  onChange={handleOnChange} />
//           {/* <input type="text" name="username" placeholder={'Username'} onChange={handleOnChange} />
//           <input type="text" name="email" placeholder={'Email'} onChange={handleOnChange} /> */}
//           <input className='submit' type="submit" value="Upload" />
//         </form>
//         {image &&
//         <div>
//           <a href={image} target='_blank'>link</a>
//           <img src={image} alt="" />
//           </div>
//         }
//       </main>
//     </>
//   )
// }

// export default AddFile
