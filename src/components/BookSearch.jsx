

function BookSearch({ search, handleSearch }) {
        return (
          <input
            type="text"
            placeholder="Search books by title or genre..."
            value={search}
            onChange={handleSearch}
            className="search-input"
          />
        );
      }
  export default BookSearch;