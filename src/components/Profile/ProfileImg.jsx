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
                        <img id="uploaded-image" src={defaultImageSrc} alt="Profile Image" className='img-img-profile' />
                         <input type="file" id='image-upload'  accept="image/*"/>
                        </div>
                        </div>
                    </div>

                  </div>
    </div>
  )
}

export default ProfileImg
