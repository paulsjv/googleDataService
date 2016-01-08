import GoogleDataService from 'www/js/services/googleDataService';
import Log from 'spec/mocks/log';
import { CONFIG } from 'spec/mocks/config';

describe('The GoogleDataService', () => {

    let service;

    beforeEach(() => {
        service = new GoogleDataService(new Log(), CONFIG);
    });

    it('expected the service to not be null', () => {
        expect(service).not.toBeNull();
    });

});
