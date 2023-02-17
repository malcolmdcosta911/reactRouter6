import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

//Navigate and link same properties

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            // navigate('/',
            //     //{options:{replace:false}}
            // )

            //navigate(-1);
            navigate(-2);
        }, 1000);
    }, []);

    return (
        // <Navigate to='/' />
        <h1>Not Found</h1>
    );
}

export default NotFound;