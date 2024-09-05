window.getObjValue = (obj, key, alternateValue) => {
    if (!obj || typeof obj !== 'object') {
        return alternateValue;
    }
    const keys = key.split('.'); // Split the key into an array of keys
    let current = obj;
    for (let i = 0; i < keys.length; i++) {
        if (current[keys[i]] === undefined) {
            return alternateValue; // If a key is not found, return the alternate value
        }
        current = current[keys[i]];
    }

    return current?current:alternateValue
}
window.isObject = (value) => {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
    );
}
