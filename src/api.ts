export const fetchInfos = async (url: string) => {
  const res: Response = await fetch(`https://noembed.com/embed?url=${url}`);
  return await res.json();
}
