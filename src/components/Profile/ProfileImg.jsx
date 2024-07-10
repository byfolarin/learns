import React from 'react'

const ProfileImg = ({defaultImageSrc}) => {


  // const imageInputRef = useRef(null);

  // const handleImageClick = () => {
  //   imageInputRef.current.click();
  // };

  return (
    <div>
                  <div className="img-section-edit">

                    <div className="ring-wrap">
                        <div className="img-fit-container">
                        <div className="img-container-profile" >
                        <img src={defaultImageSrc} className='img-img-profile' />
                        </div>
                        </div>
                    </div>

                  </div>
    </div>
  )
}

export default ProfileImg
