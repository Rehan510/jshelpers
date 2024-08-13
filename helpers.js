window.getObjValue = (obj, key, alternateValue) => {
    if (!obj) {
        return alternateValue
    }
    if (!isObject(obj)) {
        console.error("Please provide a object provided data is not a object!")
        return
    }
    return obj[key] ? obj[key] : alternateValue
}
window.isObject = (value) => {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
    );
}
