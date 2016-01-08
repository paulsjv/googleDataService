import GoogleQueryService from 'www/js/services/googleQueryService';
import Log from 'spec/mocks/log';
import { CONFIG } from 'spec/mocks/config';

describe('The GoogleQueryService', () => {

    let service;

    beforeEach(() => {
        service = new GoogleQueryService(new Log(), CONFIG, {});
    });

    it('expected the service to not be null', () => {
        expect(service).not.toBeNull();
    });

});
