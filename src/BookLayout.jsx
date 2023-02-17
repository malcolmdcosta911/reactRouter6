import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

//Outlet  need to render immediate children 

const BookLayout = () => {
   // const [number, setNumber] = useState('');
const [params, setParams]=useSearchParams({n:3});
//console.log(params.get('n'))
    const number = params.get('n');

    //useSearchParams ---> remains same on page refresh cause stored inside url
    return (
        <>
            <ul>
                <li>
                    <Link to='/books/1'>book 1</Link>
                </li>
                <li>
                    <Link to='/books/2'>book 2</Link>
                </li>
                <li>
                    <Link to={`/books/${number}`}>book {number}</Link>
                </li>
                <li>
                    <Link to='/books/new'>New Book</Link>
                </li>
                <li>
                    {/* <input type="text" value={number} onChange={(event) => setNumber(event.target.value)} /> */}
                    <input type="text" value={number} onChange={(event) => setParams({n:event.target.value})} />
                </li>
            </ul>
            <Outlet context={{ hello: 'world' }} />
        </>
    );
}

export default BookLayout;