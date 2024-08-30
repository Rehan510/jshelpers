// Extend the Window interface to include the new methods
interface Window {
    getObjValue(obj: any, key: string, alternateValue: any): any;
    isObject(value: any): boolean;
}

// Implement the methods on the window object
window.getObjValue = (obj: any, key: string, alternateValue: any): any => {
    if (!obj || typeof obj !== 'object') {
        return alternateValue;
    }
    const keys = key.split('.'); // Split the key into an array of keys
    let current: any = obj;
    for (let i = 0; i < keys.length; i++) {
        if (current[keys[i]] === undefined) {
            return alternateValue; // If a key is not found, return the alternate value
        }
        current = current[keys[i]];
    }

    return current;
};

window.isObject = (value: any): boolean => {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
    );
};
