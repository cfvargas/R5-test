import React from 'react'
import Book , { BookType }from '../Book'
import './books.css'

export interface BooksProps {
  books: BookType[]
}

const Books = ({ books }: BooksProps) => {
  return (
    <div className="books">
      {books.map(book => <Book key={book.id} book={book} />)} 
    </div>
  )
}

export default Books
