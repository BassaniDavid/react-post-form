import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: true
  })

  function handleFormData(event) {
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value

    setFormData((formData) => ({
      ...formData,
      [event.target.name]: value,
    }))
  }

  function sendData(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <form action="" onSubmit={sendData}>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleFormData}
          placeholder="inserisci il nome dell'autore" />
        <br />

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder="inserisci il nome dell'autore" />
        <br />

        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={handleFormData}
          placeholder="inserisci il nome dell'autore" />
        <br />

        <label htmlFor="public">disponibile</label>
        <input
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
