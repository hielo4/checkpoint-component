
import React from 'react';
import img from '../../images/project.jpg'


function ProfilePhoto() {
    return (
        <div className='d-flex justify-content-center '>
        <img className='mt-5 img-fluid rounded-circle border border-primary border-3' src={img}/>
   </div>   );
}

export default ProfilePhoto;