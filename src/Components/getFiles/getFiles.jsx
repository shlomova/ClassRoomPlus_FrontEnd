import { useState, useEffect } from 'react';
import './getFiles.css'
import DeleteFile from '../deleteFile/DeleteFile';

const GetFiles = ({images}) => {
  const [openDeleteFile, setopenDeleteFile] = useState(null)
  const [selectedFileId, setSelectedFileId] = useState(null);

  const handleDeleteFile = (imageId) => {
    setSelectedFileId(imageId);
    setopenDeleteFile(true);
  };

  return (
    <div>
      {images && (
        <div className='d-flex flex-wrap'>
          {images.map(image => (
            <div key={image._id}>
              <a href={image.file} target='_blank'>link</a>
              <img src={image.file} alt="" />
              <button id='PostFile' onClick={() => handleDeleteFile(image._id)}>Delete file</button>
            </div>
          ))}
        </div>
      )}
        {openDeleteFile && (
        <DeleteFile theId={selectedFileId} images={images}/>
      )}
    </div>
  );
};

export default GetFiles;



