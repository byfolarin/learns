import React, { useState } from 'react'
import PostLiveCreate from '../../assets/PostLiveCreate'
import LiveCreate from '../../assets/LiveCreate'

const CreateModal = () => {

const [] = useState([])


const [isImageChanged, setIsImageChanged] = useState(false);

const fileChange = (e) =>{
imgSet(URL.createObjectURL(e.target.files[0]))
setIsImageChanged(true);
onClose()
}

const handleImageReset = () => {
  imgSet(removeSet)
  onClose()
  setIsImageChanged(false);
};



  return (
    <div className='modal-create'>

      <div className="create-new-post">

        <div className="post-paddings">

                <label htmlFor='upload-profile' className="text-wrap">
                     <input type="file" id='upload-profile' onClick={fileChange} /> Post
                </label>

                <div className="icon-create">
                <PostLiveCreate/>
                </div>
        </div>

      </div>

      <div className="create-new-live">

            <div className="post-paddings">

                <div className="text-wrap">
                Live
                </div>


                <div className="icon-create">
                <LiveCreate/>
                </div>

            </div>


      </div>

    </div>
  )
}

export default CreateModal
