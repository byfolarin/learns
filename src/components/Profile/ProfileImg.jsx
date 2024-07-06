import React from 'react'
import profile from './GM2_KvuXMAE-ZRk.jpeg'

const ProfileImg = () => {
  return (
    <div>
         <div className="img-section-edit">
                    <div className="ring-wrap">
                        <div className="img-fit-container">
                          <div className="img-container-profile" >
                            <img src={profile} alt="" width = '150px' height = '150px'/>
                          </div>
                      </div>
                    </div>
                  </div>
         </div>
  )
}

export default ProfileImg
