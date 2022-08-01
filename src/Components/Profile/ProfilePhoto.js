
import React from 'react';
import img from '../../images/project.jpg'


function ProfilePhoto() {
    return (
        <div className='d-flex justify-content-start'>
        <img className='img-fluid img-thumbnail rounded-circle ' src={img}/>
   </div>   );
}

export default ProfilePhoto;