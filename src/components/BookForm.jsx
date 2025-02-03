function BookForm({ newBook, handleChange, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newBook.genre}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="submit-button">
        📚Add Book📚
        </button>
      </form>
    );
  }
  export default BookForm;