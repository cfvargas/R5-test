import React from 'react'
import './book.css'

export type BookType = {
  id: string
  volumeInfo: {
    title: string
    imageLinks: {
      thumbnail: string
    }
  }
}
export interface BookProps {
  book: BookType
}

const Book = ({ book }: BookProps) => (
  <div className="book">
    <div className="book-image">
      {book.volumeInfo.imageLinks ? <img
	alt={book.volumeInfo.title}
	src={book.volumeInfo.imageLinks.thumbnail}/>
	: <img src="https://picsum.photos/200/260" alt="default" />}
    </div>
    <p className="book-title">{book.volumeInfo.title}</p>
  </div>
)

export default Book
