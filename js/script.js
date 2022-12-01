"use strict";

const normalizeUrl = (site) => {
    let normalizedUrl;
    if (site.startsWith('https://')) {
      normalizedUrl = site;
    } else {
      normalizedUrl = `https://${site}`;
    }
  
    return normalizedUrl;
  };

console.log(normalizeUrl('http://;adjf;j'));