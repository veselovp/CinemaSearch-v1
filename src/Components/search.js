import { useState } from 'react'

function Search({ search }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    search(text)
    setText('')
  }

  return (
    <>
      <form action="">
        <input
          placeholder="write your film"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={onSubmitHandler}>search</button>
      </form>
    </>
  )
}

export default Search
