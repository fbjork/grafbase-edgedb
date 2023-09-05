export default async function Products() {
  try {
    const res = await fetch(`${process.env.EDGEDB_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: "select Product { id, name, price };"
      })
    })

    if (!res.ok) {
      throw new Error(await res.text())
    }

    const { data } = await res.json()

    return data ?? []
  } catch (err) {
    console.log(err)
    return []
  }
}
