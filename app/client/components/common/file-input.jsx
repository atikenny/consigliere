import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/file-input';
import {
    parseCSV,
    mapTransactions,
    formats
} from 'services/parser-service';
import IconButton from 'components/common/icon-button';

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
            <div className="file-input-container">
                <input type="file" ref={(node) => this.input = node} onChange={this.readFile} />
                <IconButton type="upload" onClick={() => this.input.click()} />
            </div>
        );
    }
}

export default FileInput;

FileInput.propTypes = {
    onLoad: PropTypes.func,
    refProp: PropTypes.object
};
