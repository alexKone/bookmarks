import { useContext } from "react"
import { BookmarkContextType, IBookmark } from "../@types/bookmark"
import { AppContext } from "../context/AppContext"
import { msToReadableTime, parseDate, timeago } from "../helpers"

type Props = {
  bookmark: IBookmark
}

const Item = ({ bookmark }: Props) => {  
  const { removeBookmark } = useContext(AppContext) as BookmarkContextType;

  return (
    <div>
    <h3>{bookmark.title}</h3>
    <a href={bookmark.url}>{bookmark.url.slice(0, 25)}...</a>
    <p>par: {bookmark.author}</p>
    <p>publié le : {parseDate(bookmark.publishedAt)}</p>
    <img src={bookmark.thumbnailUrl} alt="" />
    <p>ajouté {timeago(bookmark.id)}</p>
    {
      bookmark.provider === 'Vimeo'
      ? (
          <p>durée: {msToReadableTime(bookmark.duration * 1000)}</p>
      ) : (
        <p>dimension {`${bookmark.width}x${bookmark.height}`}</p>
      )
    }
    <button className="btn btn-danger" type="button" onClick={() => removeBookmark(bookmark.url)}>supprimer</button>
  </div>

  )
}

export default Item;