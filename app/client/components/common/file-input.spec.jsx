import React from 'react';
import { shallow } from 'enzyme';

import FileInput from './file-input';

import * as parserService from 'services/parser-service';
import * as storageService from 'services/storage-service';

describe('FileInput component', () => {
    test('has a file input', () => {
        const SUT = shallow(<FileInput />);
        const fileInput = SUT.find('.file-input-container input');

        expect(fileInput.prop('type')).toBe('file');
    });

    test('handles file upload', () => {
        // MOCKS
        const mockFileReader = {
            onload: jest.fn(),
            readAsText: jest.fn(),
            result: 'result'
        };
        global.FileReader = () => mockFileReader;
        parserService.parseCSV = jest.fn(() => 'parsed text');
        parserService.mapTransactions = jest.fn(() => 'mapped transactions');
        parserService.formats = {
            LLOYDS: 'lloyds format'
        };
        const mockOnLoad = jest.fn();

        // GIVEN
        const file = 'file';
        const fileInput = shallow(<FileInput onLoad={mockOnLoad} />);
        const input = fileInput.find('input');

        // WHEN
        input.simulate('change', {
            target: { files: [file] }
        });

        // THEN
        expect(mockFileReader.readAsText).toHaveBeenCalledWith(file);

        // WHEN
        mockFileReader.onload();

        // THEN
        expect(parserService.parseCSV).toHaveBeenCalledWith(mockFileReader.result);
        expect(parserService.mapTransactions).toHaveBeenCalledWith(parserService.formats.LLOYDS, 'parsed text');
        expect(mockOnLoad).toHaveBeenCalledWith('mapped transactions');
    });
});
