import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewBook from './pages/newBook';
import BookList from './pages/booklist';
import Book from './pages/book';
import BookLayout from './BookLayout';
import NotFound from './pages/notFound';

const BookRoutes = () => {
    return ( 
        // //cannot use oulet here
        // <>
        // <BookLayout/>
        // <Routes>
        //     <Route index element={<BookList />} />
        //     <Route path=':id' element={<Book />} />
        //     <Route path='new' element={<NewBook />} />
        // </Routes>
        // </>


 //can use oulet here
        <>
            <Routes>
                <Route element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    <Route path=':id' element={<Book />} />
                    <Route path='new' element={<NewBook />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
     );
}
 
export default BookRoutes;