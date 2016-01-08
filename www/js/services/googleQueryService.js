export default class GoogleQueryService {

    static get $inject() {
        return ['$log','CONFIG'];
    }

    constructor($log, CONFIG) {
        $log.debug('googleQueryService.js - in constructor!');
        this.log = $log;
        this.config = CONFIG;
        this.dataQuery = "select %columns where %config.state[0] is not null AND toDate(%config.state[0]) >= toDate(date '%sd') AND toDate(%config.state[0]) <= toDate(date '%ed') %t order by %config.state[0] asc",
        this.configQuery = 'select *',

    }

}
