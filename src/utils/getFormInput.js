export const getFormInput = (event, setDetails) => {
    const name = event.target.name
    const value = event.target.value
    return setDetails(details => ({ ...details, [name]: value }))
}