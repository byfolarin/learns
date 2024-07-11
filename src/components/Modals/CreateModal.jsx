import React from 'react'
import PostLiveCreate from '../../assets/PostLiveCreate'
import LiveCreate from '../../assets/LiveCreate'

const CreateModal = () => {
  return (
    <div className='modal-create'>
      <div className="create-new-post">
        Posts
        <div className="icon-create">
        <PostLiveCreate/>
        </div>
      </div>

      <div className="create-new-live">Live<div className="icon-create">
                          <LiveCreate/>
                    </div></div>
    </div>
  )
}

export default CreateModal
