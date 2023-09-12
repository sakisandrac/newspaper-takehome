const getArticles = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0972421e8f494f9f9c1c8e9740b25347')
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  let data = await response.json();
  return data;
}

const getCategory = async (category: string) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0972421e8f494f9f9c1c8e9740b2534`)
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  let data = await response.json();
  return data;
  
}
export { getArticles, getCategory }