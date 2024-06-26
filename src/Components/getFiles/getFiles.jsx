import React, { useState } from 'react';
import './getFiles.css';
import DeleteFile from '../deleteFile/DeleteFile';

const GetFiles = ({ images, teacher }) => {
  const [openDeleteFile, setOpenDeleteFile] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState(null);

  const handleDeleteFile = (imageId) => {
    setSelectedFileId(imageId);
    setOpenDeleteFile(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteFile(false);
    setSelectedFileId(null); // Reset selected file id after closing modal
  };

  return (
    <div className="file-container">
      {images && (
        <div className='file-grid'>
          {images.map((image, index) => (
            <div key={index} className='file-item'>
              <a href={image.file} target='_blank' rel='noopener noreferrer' className='file-link'>
                View File
              </a>
              {teacher && (
                <button className='delete-button' onClick={() => handleDeleteFile(image._id)}>
                  Delete File
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      {openDeleteFile && selectedFileId && teacher && (
        <DeleteFile theId={selectedFileId} onClose={handleCloseDeleteModal} />
      )}
    </div>
  );
};

export default GetFiles;
