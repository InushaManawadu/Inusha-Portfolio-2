import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline from '../Timeline/Timeline';

import './Profile.css'
import logo from './download.png'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='name'>
                <Typography className='userName'>Inusha Manawadu</Typography>
                <Typography className='title'>Software Engineering Undergraduate</Typography>
            </div>

            <figure className='profileImage'>
                <img src={logo} alt=''/>
            </figure>

            <div className='profile_info'>
                <CustomTimeline />
                <br/>
                <button>My Button</button>
            </div>
        </div>
    )
}

export default Profile
