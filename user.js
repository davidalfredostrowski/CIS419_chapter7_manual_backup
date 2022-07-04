
ubuntu@ip-172-31-4-219:~/graphbook/src/client/components/bar$ cat user.js
import React, { useState } from 'react';
import AvatarModal from '../avatarModal';

const UserBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(!isOpen);
  }

  if(!user) return null;
// changed img src back to "uploads/avatar1.png" to user.avatar
//   "/uploads/avatar1.png"      to {user.avatar}
// and the span to <span>{user.username} </span>
        //
        //
  return (
    <div className="user">
          <img src={user.avatar} onClick={() => showModal()} />
      <AvatarModal isOpen={isOpen} showModal={showModal}/>
          <span>{user.username}</span>
    </div>
  );
}

export default UserBar
ubuntu@ip-172-31-4-219:~/graphbook/src/client/components/bar$
