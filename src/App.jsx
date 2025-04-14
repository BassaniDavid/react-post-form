import { useState } from 'react'
import axios from 'axios'

function App() {

  const [formData, setFormData] = useState({
    author: "prova",
    title: "prova",
    body: "prova",
    public: false
  })

  function handleFormData(event) {
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value

    setFormData((formData) => ({
      ...formData,
      [event.target.name]: value,
    }))
  }

  function postAxios(obj) {
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', obj)
      .then(response =>
        console.log(response.data)
      )
      .catch(error =>
        console.log(error)
      )
  }

  function sendData(event) {
    event.preventDefault()
    console.log(formData)
    postAxios(formData)
  }

  return (
    <>
      <form action="" onSubmit={sendData}>

        <label htmlFor="nome-autore">nome autore: </label>
        <input
          id="nome-autore"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleFormData}
          placeholder="inserisci il nome dell'autore" />
        <br />

        <label htmlFor="titolo-post">titolo: </label>
        <input
          id='titolo-post'
          type="text"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder="inserisci il titolo" />
        <br />

        <label htmlFor="corpo-post">testo: </label>
        <input
          id='corpo-post'
          type="text"
          name="body"
          value={formData.body}
          onChange={handleFormData}
          placeholder="inserisci il testo" />
        <br />

        <label htmlFor="public-post">post pubblico</label>
        <input
          id='public-post'
          type="checkbox"
          name="public"
          checked={formData.available}
          onChange={handleFormData} />
        <br />

        <button type="submit">invio form</button>
      </form>

    </>


  )
}

export default App
