import React from 'react'
import PostLiveCreate from '../../assets/PostLiveCreate'
import LiveCreate from '../../assets/LiveCreate'

const CreateModal = () => {
  return (
    <div className='modal-create'>

      <div className="create-new-post">

        <div className="post-paddings">

                <label className="text-wrap">
                     <input type="file" id='upload-profile' /> Post
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
