import Shelf from "./Shelf";

const Landing = ( props ) => {

    const { books } = props;
    const shelves = [{value: 'currentlyReading', title: 'Currently Reading'}, {value: 'wantToRead', title: 'Want to Read'}, {value: 'read', title: 'Read'}];

    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelves.map( currentShelf => (
              <Shelf key={currentShelf.value} shelf={currentShelf} />
            )) }
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )

}

export default Landing
