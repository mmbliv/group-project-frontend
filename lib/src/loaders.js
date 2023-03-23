export const testLoader = async () => {
    const res = await fetch(`http://localhost:4000/recipes`)

    return res.json()
}