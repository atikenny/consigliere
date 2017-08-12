export const formatDate = (dateString) => {
    const date = new Date(dateString).toDateString();

    return `${date}`;
};
