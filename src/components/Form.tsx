import { useContext } from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { BookmarkContextType } from "../@types/bookmark";
import { fetchInfos } from "../api";
import { AppContext } from "../context/AppContext";
import { urlValidator } from "../helpers";

const Form: React.FC = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { addBookmark, bookmarks } = useContext(AppContext) as BookmarkContextType;

  // const { response, loading, error, setUrl } = useFetch(`http://noembed.com/embed?url=${req}`)

  const handleChange = (evt: ChangeEvent) => {
    evt.preventDefault();
    setError(false)
    const { value } = evt.target as HTMLInputElement;
    setUrl(value);
  }

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    if (!urlValidator(url)) {
      setErrorMessage("l'url n'est pas prise en compte")
      return setError(true)
    }
    const found = bookmarks.find(elt => elt.url === url)

    if (found) {
      setErrorMessage("L'url a déja été ajoutée")
      return setError(true);
    }

    const data = await fetchInfos(url);
    addBookmark(data);

    setUrl('')
    
  }

  return (
    <>
    <div className="error__message">{errorMessage}</div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url">url: </label>
        <input className={error ? "error__border" : ''} onChange={handleChange} type="url" name="url" id="url" value={url} />
      </div>
      <div>
        <button className="btn btn-primary" type="submit">Ajouter</button>
      </div>
    </form>
    </>
  )
}

export default Form;