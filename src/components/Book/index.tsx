import React from 'react'

export interface BookProps {
  title: string
  image: string
}

const Book = (book: BookProps) => (
  <div>
    <img alt={book.title} src={book.image} />
    <p>{book.title}</p>
  </div>
)

export default Book
