import React from "react";
import { BookmarkContextType, IBookmark } from "../@types/bookmark";

type Props = {
  children: React.ReactNode;
}

export const AppContext = React.createContext<BookmarkContextType|null>(null);

const AppProvider = ({ children }: Props) => {
  const [bookmarks, setBookmarks] = React.useState<IBookmark[]>([]);

  const addBookmark = (result: any) => {
    const newBookmark: IBookmark = {
      id: Date.now(),
      title: result.title,
      author: result.author_name,
      provider: result.provider_name,
      url: result.url,
      height: result.height,
      width: result.width,
      type: result.type,
      thumbnailUrl: result.thumbnail_url,
      duration: result.duration,
      publishedAt: result.upload_date
    }
    setBookmarks([...bookmarks, newBookmark])
  };

  const removeBookmark = (url: string) => {
    const updateBookmarks = bookmarks.filter((item: IBookmark) => item.url !== url)
    setBookmarks(updateBookmarks);
  }

  return <AppContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>{children}</AppContext.Provider>;
}

export default AppProvider;