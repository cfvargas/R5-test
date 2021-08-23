import React from 'react'
import Book , { BookProps }from '../Book'

export interface BooksProps {
  books: BookProps[]
}

const Books = ({ books }: BooksProps) => {
  return books.map(book => <Book title={book.title} image={book.image} />) 
}

export default Books
