import {ISettings} from '../interfaces/ISettings';

const Settings: ISettings = {
    // API Server and Path
    API_SERVER: 'https://api.go-tellm.com/api',

    // Android client id
    CLIENT_ID: '81e8a76e-1e02-4d17-9ba0-8a7020261b26',

    // Client type for signed requests
    CLIENT_TYPE: 'android_5.8.2',

    // Default location, if browser location is not available
    DEFAULT_LOCATION: undefined,

    // Helper server url to create GCM account
    GCM_ACCOUNT_HELPER_URL: '',

    // Helper server url to receive GCM verification message
    GCM_RECEIVE_HELPER_URL: '',

    // Key for signed requests
    KEY: 'lodEaNjGHAuCTSDCZbigiZDHqlQHQbWHJjIojJlD',

    // Colors for posts, the Server prevents other colors
    POST_COLORS: ['06A3CB', 'DD5F5F', 'FFBA00', 'FF9908', '8ABDB0', '9EC41C'],
};

export default Settings;
