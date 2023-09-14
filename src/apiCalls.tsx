import { data } from "./data/data";

const getArticles = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0972421e8f494f9f9c1c8e9740b25347')
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  let news = await response.json();
  return news;
  // return data
}

const getCategory = async (category: string | undefined) => {
  if(category) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0972421e8f494f9f9c1c8e9740b25347`)
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  let news = await response.json();
  return news;
  } 
  // return data
}
export { getArticles, getCategory }