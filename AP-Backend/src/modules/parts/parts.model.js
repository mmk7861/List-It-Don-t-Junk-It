export const formatPartData = (d) => {
  d.price = Number(d.price).toFixed(2)
  d.image_url = `http://localhost/static/parts/${d.image_url}`
  return d
}
