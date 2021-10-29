export const postCartFetch = async(data) => {
    const url = 'http://localhost:7070/api/order'
    const response = await fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}