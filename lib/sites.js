'use strict';

const { deepFreeze } = require('./utils');

const config = require('./config');

const sites = Object.assign({}, config.sites || {});

if (config.site.url) {
  const {
    url,
    repo,
    syndicateTo,
    syndicateToUid,
    syndicateToName
  } = config.site;
  
  const mediaEndpoint = config.mediaEndpoint;
  
  sites.main = {
    url,
    github: { repo },
    syndicateTo,
    mediaEndpoint
  };

  if (syndicateToUid) {
    sites.main.syndicateTo = [
      {
        uid: syndicateToUid,
        name: syndicateToName
      }
    ];
  }
}

module.exports = deepFreeze(sites);
