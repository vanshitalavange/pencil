export const getFormInput = (event, ...rest) => {
    const [setDetails, optionName, optionValue] = [...rest];
    if ((optionName && optionValue) === undefined) {
        const name = event.target.name
        const value = event.target.value
        return setDetails(details => ({ ...details, [name]: value }))
    } else {
        if (optionName === "tags") {
            return setDetails(details => ({ ...details, [optionName]: [...details.tags, optionValue] }))
        } else {
            return setDetails(details => ({ ...details, [optionName]: optionValue }))
        }
    }

}