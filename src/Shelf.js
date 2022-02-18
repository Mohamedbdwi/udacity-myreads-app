import Book from "./Book"

const Shelf = ( props ) => {

    const { shelf, books } = props;

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelf.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map( currentBook => (
                <Book
                key ={shelf.value}
                book={currentBook}
                />
            )) }
          </ol>
        </div>
      </div>
    )

}

export default Shelf
