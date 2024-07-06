import React from 'react'


const SideBarProfile = ({defaultImageSrc}) => {
  return (

    <div>
        <div className="ring-wrap">
            <div className="img-icon">
            <img src={defaultImageSrc} alt="" className='img-img-profile' />
            </div>
      </div>
    </div>

  )
}

export default SideBarProfile
