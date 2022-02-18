import Book from "./Book"

const Shelf = ( props ) => {

    const { shelf, books, onBookShelfUpdate } = props;

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelf.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map( currentBook => (
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

export default Shelf
