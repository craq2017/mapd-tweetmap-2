export const MAPD_CONNECT_REQUEST = 'MAPD_CONNECT_REQUEST';
export const MAPD_CONNECT_SUCCESS = 'MAPD_CONNECT_SUCCESS';
export const MAPD_CONNECT_FAILURE = 'MAPD_CONNECT_FAILURE';

export const LANG_COUNTS_UPDATE = 'MAPD_CONNECT_FAILURE';
export const SELECTED_LANG_UPDATE = 'SELECTED_LANG_UPDATE';

export const TWEETS_SET = 'TWEETS_SET';
export const TWEETS_APPEND = 'TWEETS_APPEND';

export function mapdConnectRequest() {
  return {
    type: MAPD_CONNECT_REQUEST
  }
}

export function mapdConnectSuccess() {
  return {
    type: MAPD_CONNECT_SUCCESS
  }
}

export function mapdConnectFailure(error) {
  return {
    type: MAPD_CONNECT_FAILURE,
    error
  }
}

export function updateLangCounts(langCounts) {
  return {
    type: LANG_COUNTS_UPDATE,
    langCounts
  }
}

export function updateSelected(selected) {
  return {
    type: SELECTED_LANG_UPDATE,
    selected
  }
}

export function setTweets(tweets) {
  return {
    type: TWEETS_SET,
    tweets
  }
}

export function appendTweets(tweets) {
  return {
    type: TWEETS_APPEND,
    tweets
  }
}
