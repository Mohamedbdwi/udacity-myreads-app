import Book from "./Book"

const Shelf = ( props ) => {

    const { shelf } = props;

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelf.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book />
            <Book />
          </ol>
        </div>
      </div>
    )

}

export default Shelf
