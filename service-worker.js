"use strict";var precacheConfig=[["/dilab/index.html","84529177a7bfc8145c0181f0e64f6eb4"],["/dilab/static/css/main.da7bfe7f.css","50612535a2663cf40167345c4f0654ec"],["/dilab/static/js/0.64a94ab9.chunk.js","6f0ffd5ab6777b492bf0a0556481f301"],["/dilab/static/js/main.4a8b4887.js","ef7f9c22617aa37b5bbc4b9852ddf526"],["/dilab/static/media/arrow_left.270f72df.svg","270f72df47e036d9cfa11f91f0a94a60"],["/dilab/static/media/arrow_right.d9ccc77c.svg","d9ccc77c8240ad0dc2724cf333c0479e"],["/dilab/static/media/fa-brands-400.099a9556.woff","099a9556e1a63ece24f8a99859c94c7d"],["/dilab/static/media/fa-brands-400.30cc681d.eot","30cc681d4487d2f561035ba24a68c629"],["/dilab/static/media/fa-brands-400.3b89dd10.ttf","3b89dd103490708d19a95adcae52210e"],["/dilab/static/media/fa-brands-400.ba7ed552.svg","ba7ed552362f64d30f6d844974d89114"],["/dilab/static/media/fa-brands-400.f7307680.woff2","f7307680c7fe85959f3ecf122493ea7d"],["/dilab/static/media/fa-regular-400.0bb42845.svg","0bb428459c8ecfa61b22a03def1706e6"],["/dilab/static/media/fa-regular-400.1f77739c.ttf","1f77739ca9ff2188b539c36f30ffa2be"],["/dilab/static/media/fa-regular-400.7124eb50.woff","7124eb50fc8227c78269f2d995637ff5"],["/dilab/static/media/fa-regular-400.7630483d.eot","7630483dd4b0c48639d2ac54a894b450"],["/dilab/static/media/fa-regular-400.f0f82301.woff2","f0f8230116992e521526097a28f54066"],["/dilab/static/media/fa-solid-900.1042e8ca.eot","1042e8ca1ce821518a2d3e7055410839"],["/dilab/static/media/fa-solid-900.376c1f97.svg","376c1f97f6553dea1ca9b3f9081889bd"],["/dilab/static/media/fa-solid-900.605ed792.ttf","605ed7926cf39a2ad5ec2d1f9d391d3d"],["/dilab/static/media/fa-solid-900.9fe5a17c.woff","9fe5a17c8ab036d20e6c5ba3fd2ac511"],["/dilab/static/media/fa-solid-900.e8a427e1.woff2","e8a427e15cc502bef99cfd722b37ea98"],["/dilab/static/media/lab3.92627129.jpg","92627129ec6f5dfe503560ef53e179a1"],["/dilab/static/media/lab4.d2b5d443.jpg","d2b5d4433e525c271d7a27a19d83eea0"],["/dilab/static/media/logo.ac43d4db.jpeg","ac43d4db881954bf1f7caa2c5f565b0f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/dilab/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});