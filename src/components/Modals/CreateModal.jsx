import React, { useState } from 'react'
import PostLiveCreate from '../../assets/PostLiveCreate'
import LiveCreate from '../../assets/LiveCreate'

const CreateModal = () => {

const [] = useState([])



const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      imgSet(e.target.result);
      setIsImageChanged(true);
    };

    reader.readAsDataURL(file);
    onClose();
  };



  return (
    <div className='modal-create'>

      <div className="create-new-post">

        <div className="post-paddings">

                <label htmlFor='upload-profile' className="text-wrap">
                     <input type="file" id='upload-profile' onClick={handleFileChange} /> Post
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
