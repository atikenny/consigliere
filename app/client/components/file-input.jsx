import React from 'react';

import { parseCSV } from '../services/parser-service';

const readFile = (event) => {
    const input = event.target;

    const fileReader = new FileReader();

    fileReader.onload = () => {
        const text = fileReader.result;
        const parsedCSV = parseCSV(text);
    };

    fileReader.readAsText(input.files[0]);
};

const FileInput = () => (
    <input type="file" onChange={readFile} />
);

export default FileInput;
