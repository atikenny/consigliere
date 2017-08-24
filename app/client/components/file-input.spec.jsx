import React from 'react';
import { shallow } from 'enzyme';

import FileInput from './file-input';

import * as parserService from 'services/parser-service';
import * as storageService from 'services/storage-service';

describe('FileInput component', () => {
    test('has a file input', () => {
        const fileInput = shallow(<FileInput />);
        const input = fileInput.find('input');

        expect(input.prop('type')).toBe('file');
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
        storageService.storeTransactions = jest.fn();

        // GIVEN
        const file = 'file';
        const fileInput = shallow(<FileInput />);
        const input = fileInput.find('input');

        // WHEN
        input.simulate('change', {
            target: { files: [file] }
        });

        // THEN
        expect(mockFileReader.readAsText.mock.calls[0]).toEqual([file]);

        // WHEN
        mockFileReader.onload();

        // THEN
        expect(parserService.parseCSV.mock.calls[0]).toEqual([mockFileReader.result]);
        expect(parserService.mapTransactions.mock.calls[0]).toEqual([parserService.formats.LLOYDS, 'parsed text']);
        expect(storageService.storeTransactions.mock.calls[0]).toEqual(['mapped transactions']);
    });
});
