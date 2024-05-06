const baseUrl = 'https://swapi.dev/api'

export async function getStarshipsList() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarship(id) {
  const res = await fetch(`${baseUrl}/starships/${id}`)
  return res.json()
}