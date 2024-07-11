import React, { useState } from 'react'

const ProfileModal = ({onClose,imgSet,removeSet}) => {

             const [isImageChanged, setIsImageChanged] = useState(false);

          const fileChange = (e) =>{
          imgSet(URL.createObjectURL(e.target.files[0]))
          setIsImageChanged(false);
          onClose()
          }

          const handleImageReset = () => {
            imgSet(removeSet)
            onClose()
            setIsImageChanged(true);
          };


  return (
    <div className='modal' >
      <div className="delete-modal">
        <h2 className='delete-Change'>Change Profile Photo</h2>


        <label htmlFor='upload-profile'  className='delete-Upload post-photo'>Upload Photo
          <input onChange={fileChange} type="file" id='upload-profile' />
        </label>

        
         <h3 className='delete-Remove post-photo' >Remove Current Photo</h3>
        <h3 className='delete-Cancel post-photo' onClick={onClose}> Cancel</h3>
      </div>
    </div>
  )
}

export default ProfileModal
