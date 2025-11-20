export const getData = async () => {
  const response = await fetch(
    "https://ozon-be655-default-rtdb.europe-west1.firebasedatabase.app/goods.json"
  )
  const data = await response.json()
  return data
}