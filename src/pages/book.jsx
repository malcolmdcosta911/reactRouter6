import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';


const Book = () => {

    const { id } = useParams();
    const { hello } = useOutletContext();
    //console.log(hello)
    return (
        <div><h2>Book  {hello}  {id}</h2></div>
    );
}

export default Book;