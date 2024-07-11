import React from 'react'
import PostLiveCreate from '../../assets/PostLiveCreate'
import LiveCreate from '../../assets/LiveCreate'

const CreateModal = () => {
  return (
    <div className='modal-create'>

      <div className="create-new-post">
        <div className="icon-create">
            <PostLiveCreate/>
            </div>
            Posts
      </div>

      <div className="create-new-live">
        <div className="icon-create">
            <LiveCreate/>
            </div>
            Live
        </div>
    </div>
  )
}

export default CreateModal
