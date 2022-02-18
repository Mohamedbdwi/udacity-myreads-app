import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Landing from './Landing'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  onBookShelfUpdate = ( book, e ) => {

    const newShelf = e.target.value;
    const booksClone = this.state.books;
    booksClone[booksClone.findIndex(b => b.id === book.id)].shelf = newShelf;
    this.setState({ books: booksClone })

    BooksAPI.update(book, newShelf);

  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path='/' element={
            <Landing
              books             = { this.state.books }
              onBookShelfUpdate = { this.onBookShelfUpdate }
            />
          } />
          <Route path='/search' element={
            <Search />
          } />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
