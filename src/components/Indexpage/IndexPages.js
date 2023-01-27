import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import Notification from '../Shared/Notification';
import ShortProductBox from './ShortProductBox';

const IndexPages = () => {
    const [user, loading, error] = useAuthState(auth);

//    let errorAlart = <Notification
//    status='open'
//    veriant='loading'
//    title="Loading"
//    message='please wait for a sec.'
//    />
    return (
        <div>

            <ShortProductBox />

        </div>
    );
};

export default IndexPages;