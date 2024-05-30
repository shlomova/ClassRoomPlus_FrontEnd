// import React from 'react'

// const GetFilesById = ({ }) => {
//     const [images, setImages] = useState([]);
//     const [image, setImage] = useState([]);
//     useEffect(() => {
//         const fetchFiles = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:3000/files/course/${courseId}`, { withCredentials: true });
//                 console.log(res.data);
//                 const files = res.data.files.map(item => ({ ...item, file: `http://localhost:3000${item.file}` }))
//                 console.log(files);
//                 setImages(files);

//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchFiles();
//         const fetchFileById = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:3000/files/cours/find/${}`, { withCredentials: true });
//                 console.log(res.data);
//                 setImage(res);

//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchFileById();
//     }, [courseId]);

//     return (
//         <>
//             <select name="" id="">
//             {images.map(image => (
//             <option key={image._id}>
//               <img src={image.file} alt="" />
//             </option>
//           ))}
//             </select>

//             <div>
//                 {image &&
//                     <div>
//                         <a href={image} target='_blank'>link</a>
//                         <img src={image} alt="" />
//                     </div>
//                 }
//             </div>
//         </>
//     )
// }

// export default GetFilesById