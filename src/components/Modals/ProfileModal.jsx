import React from 'react'

const ProfileModal = ({onClose}) => {


  return (
    <div className='modal' >
      <div className="delete-modal">
        <h2 className='delete-Change'>Change Profile Photo</h2>
        <h3 className='delete-Upload post-photo'>Upload Photo</h3>
        <h3 className='delete-Remove post-photo'>Remove Current Photo</h3>
        <h3 className='delete-Cancel post-photo' onClick={onClose}> Cancel</h3>
      </div>
    </div>
  )
}

export default ProfileModal
