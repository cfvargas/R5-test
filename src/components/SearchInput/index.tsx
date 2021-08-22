import React from 'react'
import axios from 'axios'

const SearchInput = ({setResponse}) => {
  const [searchValue, setSearchValue] = React.useState('')

  function handleInputChange(event) {
    setSearchValue(event.target.value)
  }

  function getBooks(title: string = 'javascript') {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then((response) => setResponse(response))
  }

  React.useEffect(() => {
    getBooks()
  }, [])

  return (
    <div>
      <input
	type="text"
	placeholder="Buscar..."
	value={searchValue}
	onChange={handleInputChange}
      />
      <button onClick={() => getBooks(searchValue)}>Buscar</button>
    </div>
  )
}

export default SearchInput
