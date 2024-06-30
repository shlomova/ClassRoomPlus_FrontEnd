import { useState, useEffect } from 'react';
import './getFiles.css'
import DeleteFile from '../deleteFile/DeleteFile';

const GetFiles = ({images, teacher}) => {
  const [openDeleteFile, setopenDeleteFile] = useState(null)
  const [selectedFileId, setSelectedFileId] = useState(null);

  const handleDeleteFile = (imageId) => {
    setSelectedFileId(imageId);
    setopenDeleteFile(true);
  };
  console.log(123 ,images);
 

  return (
    <div>
      {images && (
        <div className='d-flex flex-wrap'>
          {images.map((image) => {
            console.log(image.file);
            return (
              <div key={image._id}>
                <a href={`http://localhost:3000/${image.file}`} target='_blank' rel='noopener noreferrer'>
                  link
                </a>
                <img src={`http://localhost:3000/${image.file}`} alt="" />
                {teacher && (
                  <button id='PostFile' onClick={() => handleDeleteFile(image._id)}>
                    Delete file
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
      {openDeleteFile && selectedFileId && (
        <DeleteFile theId={selectedFileId} />
      )}
    </div>
  );
};



export default GetFiles;



