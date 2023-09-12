const datePublished = (date: string | undefined) => {
  return date?.split('T')[0].split('-').reverse().join('-')
}

export { datePublished }