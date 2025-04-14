import { useState } from 'react'
import axios from 'axios'

function App() {
  // setto l oggetto di base e l useState per modificarlo all inserimento da parte dell utente
  const [formData, setFormData] = useState({
    author: "prova",
    title: "prova",
    body: "prova",
    public: false
  })

  // funzione per aggiungere all oggetto anche ciò che inserisce l utente andando in tal modo a sovrascrivere i dati precedente, se modificati
  function handleFormData(event) {
    // linea specifica per il checkbox
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value

    setFormData((formData) => ({
      ...formData,
      [event.target.name]: value,
    }))
  }

  // funzione per inviare dati ad un API con axios e stampare la risposta in console
  function postAxios(obj) {
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', obj)
      .then(response =>
        console.log(response.data)
      )
      .catch(error =>
        console.log(error)
      )
  }

  // funzione per l invio del form
  function sendData(event) {
    // previene il ricaricamento
    event.preventDefault()
    // stampa in console i dati
    console.log(formData)
    // li invia ad axios per la chiamata all API
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
