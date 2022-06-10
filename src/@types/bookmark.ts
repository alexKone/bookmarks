enum ProviderType {
  flickr = "Flickr",
  vimeo = "Vimeo"
}

export interface IBookmark {
  id: number;
  title: string;
  author: string;
  provider: string;
  url: string;
  thumbnailUrl?: string;
  width: number;
  height: number;
  type: string;
  publishedAt: string;
  duration: number;
}

export type BookmarkContextType = {
  bookmarks: IBookmark[];
  addBookmark: (bookmark: IBookmark) => void;
  removeBookmark: (url: string) => void;
}