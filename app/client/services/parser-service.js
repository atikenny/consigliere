const endOfLineChar = '\n';

export const parseCSV = (csv) => {
    let lines = csv.split(endOfLineChar);
    const firstLine = lines.shift(1);
    const headers = firstLine.split(',').filter(column => Boolean(column));

    const parsedCSV = lines.map(line => {
        const columns = line.split(',');
        let lineObject = {};
        
        headers.forEach((header, index) => {
            lineObject[header] = columns[index];
        });

        return lineObject;
    });

    return parsedCSV;
};
