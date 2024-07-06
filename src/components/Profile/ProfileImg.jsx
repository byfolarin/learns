import React from 'react'

const ProfileImg = ({defaultImageSrc, setdefaultImageSrc}) => {
  return (
    <div>
                  <div className="img-section-edit">

                              <div className="ring-wrap">

                                  <div className="img-fit-container">

                                    <div className="img-container-profile" >
                                      <img src={defaultImageSrc} alt="" className='img-img-profile' />
                                    </div>

                                </div>

                              </div>

                  </div>
    </div>
  )
}

export default ProfileImg
