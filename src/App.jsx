import BookList from './components/BookList';
import mockDt from './utils/mockDt';
import "./components/style.css";
import { useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {

  const [searchText,setSearchText] = useState("");
  const [filterBook,setFilterBook] = useState(mockDt);

  function handleSearch()
  {
    console.log(searchText);
    const filterBook = mockDt.filter((data) =>
       data.title.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(filterBook);
    setFilterBook(filterBook);
  }

  return (
    <>
      <Header />

       <div className='Search'>
          <h2>Search Books</h2>
          <div>
            <input type="text" className='search-input' onChange={(e) => setSearchText(e.target.value)}  />
            <button onClick={handleSearch}>Search</button>
          </div>
       </div>

      {/* <BookList booksData={filterBook} /> */}

      <Outlet />
    </>
  );
}

export default App;

