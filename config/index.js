/* global APP_HOST */
const NEXT_HOST = APP_HOST + '/fe';
const CORE_HOST = APP_HOST;

export const LINKS = {

  LOGIN                : `${CORE_HOST}/user/login`,
  SIGNUP               : `${NEXT_HOST}/signup`,

  TERMS_AND_CONDITIONS : `${NEXT_HOST}/terms-and-conditions-of-website-use`,
  TERMS_OF_SERVICE     : `${NEXT_HOST}/terms-of-service`,
  PRIVACY              : `${NEXT_HOST}/privacy`,

  GRANT_THORNTON       : 'http://www.dsf.co.uk/',
  GRANT_THORNTON_G     : 'http://g.sdf.co.uk/',
  BLOG                 : 'http://blog.falconi.com/',
  SUPPORT              : 'http://support.falconi.com/',
  TWITTER              : 'https://twitter.com/falconibusiness',
  LINKEDIN             : 'https://www.linkedin.com/company/falconi-com',
  CALENDLY             : 'https://calendly.com/falconi/20min'

};
