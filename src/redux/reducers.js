import {combineReducers} from 'redux';
import entities from './reducers/entities';
import postsBySection from './reducers/postsBySection';
import viewState from './reducers/viewState';
import account from './reducers/account';
import settings from './reducers/settings';
import Immutable from 'immutable';
import imageCaptcha from './reducers/imageCaptcha';

const JodelApp = combineReducers({
    entities,
    postsBySection,
    viewState,
    account,
    settings,
    imageCaptcha,
});

export function getLocation(store) {
    let result = store.settings.get('location');
    if (result === undefined) {
        result = store.viewState.get('location');
        if (result === undefined) {
            result = Immutable.Map();
        }
    } else if (result.get('latitude') === undefined && store.viewState.has('location')) {
        result = store.viewState.get('location');
    }
    return result;
}

export function isLocationKnown(store) {
    const loc = getLocation(store);
    return loc != undefined && loc.get('latitude') != undefined;
}

export default JodelApp;
