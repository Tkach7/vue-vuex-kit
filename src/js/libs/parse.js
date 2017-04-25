import parse from 'user-agent-parser'
import moment from 'moment'
moment.locale('ru');

export default function parseUserAgent(userAgent) {
    let parseAgent = parse(userAgent);
    let device = parseAgent.device.type ? parseAgent.device.type : 'PC';

    return device + ' ' + parseAgent.os.name + ' ' + parseAgent.browser.name + ' ' + moment().format('DD-MM-YY:hh:mm');
}