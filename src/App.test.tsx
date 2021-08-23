import React from 'react'
import {render, screen} from '@testing-library/react'
import axiosMock from 'axios'
import App from './App'

const book = {
  id: 'SqikDwAAQBAJ',
  volumeInfo: {
    title: 'JavaScript - Aprende a programar en el lenguaje de la web',
    authors: ["Fernando Luna"],
    publishedDate: "2019-07-23",
    imageLinks: {
      thumbnail: "http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
  }
}

test('App: Should show books', async () => {
  const books = {items: [book]}
  const response = { data: books }
  axiosMock.get.mockResolvedValue(response)
  render(<App />)

  const bookTitle = await screen.findByText(/javascript/i)
  const pageTitle = screen.getByText(/google books/i)

  expect(bookTitle).toBeInTheDocument()
  expect(pageTitle).toBeInTheDocument()
})


