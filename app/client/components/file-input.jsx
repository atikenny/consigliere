import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    parseCSV,
    mapTransactions,
    formats
} from 'services/parser-service';

class FileInput extends Component {
    constructor(props) {
        super(props);

        this.readFile = this.readFile.bind(this);
    }

    readFile(event) {
        const input = event.target;

        const fileReader = new FileReader();

        fileReader.onload = () => {
            const text = fileReader.result;
            const parsedCSV = parseCSV(text);
            const mappedTransactions = mapTransactions(formats.LLOYDS, parsedCSV);

            this.props.onLoad(mappedTransactions);
        };

        fileReader.readAsText(input.files[0]);
    }

    render() {
        return (
            <input type="file" onChange={this.readFile} />
        );
    }
}

export default FileInput;

FileInput.propTypes = {
    onLoad: PropTypes.func
};
