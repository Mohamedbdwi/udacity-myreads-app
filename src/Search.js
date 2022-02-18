import { useState } from "react"
import * as BooksAPI from "./BooksAPI"
import Book from "./Book"
import { Link } from "react-router-dom"

const Search = ( props ) => {

        const [ results, setResults ] = useState([]);
        // const [ userInput, setUserInput ] = useState('');
        const { books, onBookShelfUpdate } = props;

        const handleUserInput = ( e ) => {
          const query = e.target.value;
          // setUserInput(query);
          if ( query.length > 0 ) {
            BooksAPI.search( query )
              .then((books) => {
                books.error ? setResults( [] ) : setResults ( books )
              })
          } else {
            setResults( [] )
          }
        }

        const resetResults = () => {
          setResults( [] )
        }

        results.forEach( function( c ) {
          books.forEach( function( b ) {
            if ( b.id === c.id ) {
              c.shelf = b.shelf;
            }
          });
          if( !c.shelf ) {
            c.shelf = 'none';
          }
        });

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"><button className="close-search" onClick={ resetResults } >Close</button></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={ (e) => {
                  handleUserInput( e )
                }} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { results.map( currentBook => (
                  <Book
                  key               = { currentBook.id }
                  book              = { currentBook }
                  onBookShelfUpdate = { onBookShelfUpdate }
                  />
                )) }
              </ol>
            </div>
          </div>
        )

}

export default Search
