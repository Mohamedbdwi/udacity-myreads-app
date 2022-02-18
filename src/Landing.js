import Shelf from "./Shelf"
import { Link } from "react-router-dom"

const Landing = ( props ) => {

    const { books, onBookShelfUpdate } = props;
    const shelves = [{value: 'currentlyReading', title: 'Currently Reading'}, {value: 'wantToRead', title: 'Want to Read'}, {value: 'read', title: 'Read'}];

    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelves.map( currentShelf => (
              <Shelf
              key               = { currentShelf.value }
              shelf             = { currentShelf }
              books             = { books.filter( book => book.shelf === currentShelf.value ) }
              onBookShelfUpdate = { onBookShelfUpdate }
              />
            )) }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
    )

}

export default Landing
