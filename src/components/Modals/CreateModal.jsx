import React, { useState } from 'react'
import PostLiveCreate from '../../assets/PostLiveCreate'
import LiveCreate from '../../assets/LiveCreate'
import Posts from '../Posts'

const CreateModal = () => {

const [localImg, setLocalImg] = useState([])

const [isImageChanged, setIsImageChanged] = useState(false);

const fileChange = (e) =>{
setLocalImg(URL.createObjectURL(e.target.files[0]))
setIsImageChanged(true);
}

  return (
    <div className='modal-create'>

      <div className="create-new-post">

        <div className="post-paddings" >

                <label htmlFor='upload-profile' className="text-wrap">
                     <input type="file" onChange={fileChange} id='upload-profile' /> Post Live Video
                </label>

                <div className="icon-create">
                <PostLiveCreate/>
                </div>
        </div>

      </div>

      <div className="create-new-live">

            <div className="post-paddings">

                <div className="text-wrap">
                Live Create
                </div>


                <div className="icon-create">
                <LiveCreate/>
                </div>

            </div>


      </div>

      
    <Posts imgPost= {localImg}/>

    </div>
  )
}

export default CreateModal
