import React from 'react'
import {render, waitFor, fireEvent, screen} from '@testing-library/react'
import axiosMock from 'axios'
import SearchInput from './'

const book = {
  id: 'SqikDwAAQBAJ',
  volumeInfo: {
    title: 'JavaScript - Aprende a programar en el lenguaje de la web',
    authors: ["Fernando Luna"],
    publishedDate: "2019-07-23",
    imageLinks: {
      "smallThumbnail": "http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    description: "JavaScript es el lenguaje de programación más utilizado hoy. Junto a HTML y CSS, le da vida a la gran mayoría de los sitios Web que visitamos. Pero JavaScript ya no es exclusivo de la Web: proyectos como NodeJS, Electron y React Native lo llevaron al ámbito de los servidores, los programas de escritorio y las aplicaciones móviles. Además, cada día surgen nuevos frameworks (como los líderes y archienemigos React y Angular) para expandir las posibilidades de JavaScript. Esta guía introductoria, nos llevará en un viaje vertiginoso desde el primer \"Hola Mundo\" hasta aplicaciones que nos hablan y acceden a bases de datos. Obviamente, este no pretende ser un curso comprehensivo, sino un punto de partida para que el lector comience a programar en este excitante lenguaje.",
  }
}

test('SearchInput: Should get books when is mounted' ,async () => {
  const setResponse = jest.fn()
  const books = {items: [book]}
  const response = {data: books}
  axiosMock.get.mockResolvedValue(response)

  render(<SearchInput setResponse={setResponse} />)
  await waitFor(() => {
    expect(setResponse).toBeCalledWith(response)
  })

})


test('SearchInput: Should get books when submit', async () => {
  const setResponse = jest.fn()
  const books = {items: [book]}
  const response = {data: books}
  axiosMock.get.mockResolvedValue(response)

  render(<SearchInput setResponse={setResponse} />)
  await waitFor(() => {
    expect(setResponse).toBeCalledWith(response)
  })

  fireEvent.change(screen.getByPlaceholderText('Buscar...'),
    { target: { value: 'javascript' } }
  )

  fireEvent.click(screen.getByText('Buscar'))

  await waitFor(() => {
    expect(setResponse).toBeCalledTimes(2)
  })

})
