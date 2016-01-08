export default class GoogleDataService {

    static get $inject() {
        return ['$log','CONFIG','$google'];
    }

    constructor($log, CONFIG, $google) {
        $log.debug('googleDataService.js - in constructor!');
        this.log = $log;
        this.config = CONFIG;
        this.google = $google;
    }
}
