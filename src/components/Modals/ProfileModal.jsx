import React, { useState } from 'react'

const ProfileModal = ({onClose,imgSet,removeSet}) => { 

  const [isImageChanged, setIsImageChanged] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      imgSet(e.target.result);
      setIsImageChanged(true);
    };

    reader.readAsDataURL(file);
    onClose();
  };

  const handleImageReset = () => {
    imgSet(removeSet);
    setIsImageChanged(false);
    onClose();
  };

  return (
    <div className='modal' >
      <div className="delete-modal">
        <h2 className='delete-Change'>Change Profile Photo</h2>


        <label htmlFor='upload-profile'  className='delete-Upload post-photo'>Upload Photo
          <input onChange={handleFileChange} type="file" id='upload-profile' />
        </label>

        
         <h3 className='delete-Remove post-photo' onClick={handleImageReset} >Remove Current Photo</h3>
        <h3 className='delete-Cancel post-photo' onClick={onClose}> Cancel</h3>
      </div>
    </div>
  )
}

export default ProfileModal
