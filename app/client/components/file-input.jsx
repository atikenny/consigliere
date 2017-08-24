import React from 'react';

import {
    parseCSV,
    mapEntries,
    mapTransactions,
    formats
} from 'services/parser-service';
import { storeTransactions } from 'services/storage-service';

const readFile = (event) => {
    const input = event.target;

    const fileReader = new FileReader();

    fileReader.onload = () => {
        const text = fileReader.result;
        const parsedCSV = parseCSV(text);
        const mappedTransactions = mapTransactions(formats.LLOYDS, parsedCSV);

        storeTransactions(mappedTransactions);
    };

    fileReader.readAsText(input.files[0]);
};

const FileInput = () => (
    <input type="file" onChange={readFile} />
);

export default FileInput;
