import { createBrowserHistory } from 'history';
import PATHS from 'routes/paths';
let history = createBrowserHistory();

export function historyReplace() {
    history.replace(PATHS.signIn)
}