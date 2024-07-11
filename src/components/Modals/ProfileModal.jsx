import React, { useState } from 'react'

const ProfileModal = ({onClose,imgSet,removeSet}) => { 

          const fileChange = (e) =>{
          imgSet(URL.createObjectURL(e.target.files[0]))
          onClose()
          }

          const handleImageReset = () => {
            imgSet(removeSet)
          };


  return (
    <div className='modal' >
      <div className="delete-modal">
        <h2 className='delete-Change'>Change Profile Photo</h2>


        <label htmlFor='upload-profile'  className='delete-Upload post-photo'>Upload Photo
          <input onChange={fileChange} type="file" id='upload-profile' />
        </label>

        
         <h3 className='delete-Remove post-photo' onClick={handleImageReset} >Remove Current Photo</h3>
        <h3 className='delete-Cancel post-photo' onClick={onClose}> Cancel</h3>
      </div>
    </div>
  )
}

export default ProfileModal
