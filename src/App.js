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
        console.log(books);
      })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path='/' element={
            <Landing />
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
