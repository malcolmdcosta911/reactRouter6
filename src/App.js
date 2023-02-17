
import React from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'

import Home from './pages/home'
import NotFound from './pages/notFound';
// import NewBook from './pages/newBook';
// import BookList from './pages/booklist';
// import Book from './pages/book';
// import BookLayout from './BookLayout';
import BookRoutes from './BooksRoutes';

function App() {
  const location = useLocation();

  console.log(location)
  return (
    <>

      {/* useful for side bar */}
      <Routes
      // location='/books'
      >
        <Route path='/books' element={<h1>Extra Content</h1>} />
        <Route path='*' element={<div></div>} />
      </Routes>

      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              state='Hi'
              // style={{color:'red'}}
             // style={({ isActive }) => { return isActive ? { color: 'red' } : {} }}
            >
              {/* {(isActive) => { return isActive ? `Active Home` : '' }} */}
              Home
            </NavLink>
          </li>


          {/* <li><Link to='/'
          //reloadDocument
          >Home</Link></li> */}

          {/* replace ignore prevoius link */}
          {/* <li><Link to='/books' replace >Books</Link></li> */}
          <li><NavLink to='/books' end >Books</NavLink></li>

        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />


        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} /> */}

        {/* 
        <Route path='/books'>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />}/>
          <Route path='new' element={<NewBook />} />
        </Route> */}


        {/* <Route path='/books' element={<BookLayout/>}>
          <Route index element={<BookList/>} />
          <Route path=':id' element={<Book/>} />
          <Route path='new' element={<NewBook/>} />
        </Route> */}

        {/* <Route element={<BookLayout />}>
          <Route path='/books' element={<BookList />} />
          <Route path='/books/:id' element={<Book />} />
          <Route path='/books/new' element={<NewBook />} />
        </Route> */}

        <Route path='/books/*' element={<BookRoutes />} />


        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
