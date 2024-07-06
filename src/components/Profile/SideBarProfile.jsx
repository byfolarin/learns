import React from 'react'



const SideBarProfile = ({defaultImageSrc, setdefaultImageSrc}) => {
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
