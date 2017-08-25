export const onSpecificKey = (key, callback) => {
    return (event) => {
        if (event.key === key) {
            callback(event.target.value);
        }
    };
};
