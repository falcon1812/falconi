// ************ WARNING *************

// This config file is used by the babel plugin "transform-define"
// in order to create a global variable to be used in the config
// on both SERVER and BROWSER.

// It exports the APP_HOST global variable, which value can only be
// one of those specified in the HOSTS object.

// Default BRANCH is 'dev'
const BRANCH = process.env.BB_PROJECT_BRANCH || 'dev';

const HOSTS = {
  dev    : 'https://dev.falconi.com',
  master : 'https://go.falconi.com'
};

const APP_HOST = HOSTS[BRANCH.trim()] || HOSTS['dev'];

if (APP_HOST === undefined) {
  throw new Error(`Invalid value for the BB_PROJECT_BRANCH: "${BRANCH}". Please specify one of these: ${Object.keys(HOSTS).join()}`);
}

module.exports = {
  'APP_HOST': APP_HOST
};
