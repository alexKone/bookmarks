import { useContext } from "react";
import { BookmarkContextType, IBookmark } from "../@types/bookmark";
import { AppContext } from "../context/AppContext";
import Item from "./Item";

const ListBookmarks: React.FC = () => {

  const { bookmarks } = useContext(AppContext) as BookmarkContextType;

  console.log(bookmarks);
  
  return (
    <section className="grid">
      {bookmarks.map((bookmark: IBookmark, index: number) => <Item key={index} bookmark={bookmark} />)}
    </section>
  )
}

export default ListBookmarks;