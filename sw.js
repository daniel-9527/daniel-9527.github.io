/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a3ce81e1f7503005748cc4deed7f935c"],["/about/index.html","cf1b384ecad2a5dfb4bca3679e7b8ea1"],["/archives/2020/03/index.html","68c6ccb75c5cec6c59435d7378664309"],["/archives/2020/index.html","d2bf552ef7de5c9481d8016268491d2b"],["/archives/index.html","4a3dc46d37d0dfe0e116f7e1bc6a3e8a"],["/categories/index.html","7196f7acfdf43c368ecaa6da247a6d54"],["/categories/氯化钯回收/index.html","6e7f93e68db339d2adb0fe64d52a2b7e"],["/categories/金丝回收/index.html","75ecaaa75753b358c00d0ce122f008c6"],["/categories/金盐回收/index.html","97b311bde8bee51525c6563e67ddfdf5"],["/categories/钯碳回收/index.html","3f55d825201fe91f6f1bc1c1313f9210"],["/categories/银浆回收/index.html","9c2cdaaa136e80eb5943f1d96e04613c"],["/categories/银粉回收/index.html","8724c8cf3e0103175a627587c00e566e"],["/contact/index.html","80c0bf36a1066957194691fba8698d30"],["/contact/index/weixin.png","83fbc4060c5be7cb59207708b2d8ae87"],["/css/back-to-top.css","afb22e48158221bcfd6dd95bded7a5ff"],["/css/insight.css","9cdca87fd0bb898924b8d3b69e683b06"],["/css/main_banner.css","c7bb580a5daf7e44cf069b21aa5f54ae"],["/css/progressbar.css","40f72c6103de5bda156ce88b3d882310"],["/css/search.css","175837e1410611409e6fb89b92a47ba6"],["/css/side.css","8447aabb61f791ddd176dece325c95f7"],["/css/style.css","def8c5c8cee2c380b070b1c4b538e5f0"],["/dist/APlayer.min.css","0e5b2888d3916ab8d117386ce11404d9"],["/dist/APlayer.min.js","984140158d779de3e204d552785b0931"],["/dist/music.js","cd725723958901ac70c6f3a91a5ff474"],["/gallery/3.jpg","d58d17136f529009092b5bf0fcf41ac2"],["/gallery/bt.jpg","e1119a7da1b165fbf68bfb7548d7a0f3"],["/gallery/index.jpg","d938be2864bac73c8e5f64d4d3cfb32d"],["/gallery/js.jpg","d7cac9b8ad9eb37a94122601458c75c1"],["/gallery/jy.jpg","d39b6733e9232334db47f02837183179"],["/gallery/lhb.jpg","abed0f4aba7080f1f382b5ff7dd699a1"],["/gallery/yf.jpg","a12e821179f51590edb9264d67f33578"],["/gallery/yj.jpg","7a9da49a616586353f4868a055104d45"],["/images/avatar.png","61b5696df0f9dffc84564aa0c236e785"],["/images/avatar1.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/images/favicon.png","1bcc1a753cc821d202d93e99d180199b"],["/images/favicon.svg","efe397c6c8a1d1770fa13cbbaad6bf85"],["/images/logo-backup.png","15d3994a9a4d6ae4b62d96bd2bbc1a57"],["/images/logo.png","958bc6a5fc21a2b86694609c2d197293"],["/images/logo.svg","dffd6ab63cb9164ab89bc7b7ef92003c"],["/images/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["/images/qq.png","9b6718fb7a2cfaafbd6decc44ffcb982"],["/images/thumbnail.svg","0a116c9321a125b2cf2ae1dc4896d521"],["/images/wechat.png","cfd8eb1bdc26449feed4cd54e5525253"],["/images/weixin.png","83fbc4060c5be7cb59207708b2d8ae87"],["/index.html","a9d387b4d7dec5b988cb1f7c160921cb"],["/js/animation.js","ffcd6e54c79b7d45d14e6af8ff47e6e4"],["/js/back-to-top.js","95c11b1e139df76bf5a5312d73d94379"],["/js/click_show_text.js","ad0758258ad4b2025a97f27b837eb6e4"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/gallery.js","d91d7ca3236440f6a95271415eeb87ad"],["/js/insight.js","04278c0d1b6622c5a158c870edc6a4c0"],["/js/jquery.min.js","5d74790930ceb5ac2e460d6758dfe09d"],["/js/main.js","543dbdebc128db8b5d52c618ac5b54c3"],["/js/main_banner.js","fe37b26a9699be50fab1ec81ce1bc827"],["/js/night.js","e55e3adbfebd429fc575fce95b6a9b26"],["/js/side.js","08c752b18adbab113d0263abadb72df2"],["/js/universe.js","ebe73cf47baafc298a542ac35641ffb3"],["/photos/index.html","0bdc6adefe1e46d044b0b67cf2333f07"],["/photos/index/2017031800537488.jpg","2c357f3d080a7c03781c3653c9024bcb"],["/photos/index/2017031801024897.jpg","f8ed45c0208cff614dc4fbbbf5b7f3c5"],["/photos/index/2017031801262081.jpg","dab695c570cae9f27f5d48f9c583d886"],["/photos/index/2017031801499140.jpg","a4ec8380a05ccfcdadcc25f1015fdfd3"],["/photos/index/2017031875167489.jpg","18634921e02a906eb058187b66521a1f"],["/photos/index/2017031875526041.jpg","493795f491d700919ab6fc3a0ecdbd62"],["/photos/index/2017031875808273.jpg","d193d11c160b275e8fc26e56669ed5f8"],["/photos/index/2017031875874377.jpg","e8b59218c2501e120f093826fb6f4b0e"],["/photos/index/2017031876281153.jpg","d2fb3f68a7557d3f720b3400e9e3fba4"],["/photos/index/2017031876418881.jpg","dd276bcdb4279c1aec0dfa20316301f7"],["/photos/index/2017031876646873.jpg","0f07b39a2818579e3c78fcdb0fbd3610"],["/photos/index/2017031876772521.jpg","1d541d12389e331c63499058277ec7f8"],["/photos/index/2017031876898569.jpg","9a4714aadd43fb4e11f6313979080582"],["/photos/index/2017031877057905.jpg","249e6ef2808cd2b29b09190392c41deb"],["/photos/index/2017031877817465.jpg","31670ccc59341a1d7953479d4773bed1"],["/photos/index/2017031877882657.jpg","4f17a22d269ae9ab677702896fe6305c"],["/photos/index/2017031877941129.jpg","6406b06d4e9653aedab05fc913a01339"],["/photos/index/2017031878557345.jpg","7faf0c8adcb45d6204854f7dfe04efee"],["/photos/index/2017031878620977.jpg","ad02a1c12e5e55e42872daf4524dbf5b"],["/photos/index/2017031878751817.jpg","28e6a0d8292f17e8836ec18210d7ffae"],["/photos/index/2017031878982521.jpg","2d1df37a0e92084f787a0de5b6086e10"],["/photos/index/2017031879067049.jpg","65c45a2f4eef509fb48b02d2ff32b92e"],["/photos/index/2017031879148505.jpg","4a64d4e988de13c0e03f35ab11a33506"],["/photos/index/2017031879190409.jpg","86611609d8ca69b9136a32cec6fe3541"],["/photos/index/2017031879239921.jpg","a47adb05f180705044b81caf25db91bd"],["/photos/index/2017031879279081.jpg","afeb40edf3e8f4cc50594506f475da7d"],["/photos/index/2017031879403993.jpg","aa1446ea4f2542e8e08362939574a79e"],["/photos/index/2017031879453537.jpg","c596dc73808a5d4b0a8005e211d1abe5"],["/photos/index/2017031879552689.jpg","1f4366ba8a65c9fc99e06328ca365de4"],["/photos/index/2017031879606001.jpg","86578a80c8cd52a04e0ccbb9e5fe2fca"],["/photos/index/2017031879756321.jpg","4afb3184e5377eea2227cdb7707ec14b"],["/photos/index/2017031879804465.jpg","dff951f1719ad9803f69e5d55c6e7482"],["/photos/index/2017031879883041.jpg","4356eac5002e56011fa3252e77a986a9"],["/photos/index/2017031880075689.jpg","1192cb5f3633d537073c9c5a8e98f707"],["/photos/index/2017031880162297.jpg","ec7b69cafc9b26d27dac78295b43fec1"],["/photos/index/2017031880223945.jpg","043c2a6218b0e66a2300bf707f7ca917"],["/photos/index/2017031880317801.jpg","2c3b77a3af29d4e727eea0b08933b64d"],["/photos/index/2017031880496689.jpg","71869712c89178499da1526bc1e40f71"],["/photos/index/2017031880539449.jpg","cb59ab58754a9e50ff3c5595ca01055c"],["/photos/index/2017031880638865.jpg","1e44ce79cce622aa2d08601dc8888ef0"],["/photos/index/2017031880770753.jpg","d5898dcb854dd2ea4717ee95a6befe0a"],["/photos/index/2017031880835217.jpg","d3b51a95f3ca99e368b03cb1393a2fa2"],["/photos/index/2017031880894657.png","2cd4b4b0d54173ee97c625ecefe6782b"],["/photos/index/2017031880968777.jpg","c3bd1b38387b33bf54a99d6fc6f75a8f"],["/photos/index/2017031881038177.jpg","e548a14d0cf4ab627fa3ffb4a30e14e4"],["/photos/index/2017031881279489.jpg","c28fe7f643e068b804b6dbd64b74bf0d"],["/photos/index/2017031881329217.jpg","3ebb1591a081481294a10ed4c595ead8"],["/photos/index/2017031881460585.jpg","557d7df411a05032cabd53db0f52d5ba"],["/photos/index/2017031881604057.jpg","fdbc7e945bad1546ed7ddadfe7bdc35a"],["/photos/index/2017031881649441.jpg","e99110c3bb7084c62d7ef32b4a9b4b5b"],["/photos/index/2017031881761289.jpg","9fd52a08f4d28e6d5a4cd94547243f85"],["/photos/index/2017031882836329.jpg","3f05906b19cbcc179301815d7ef25d44"],["/photos/index/2017031882894409.jpg","34d997826c37d6526f8a70c04645e03e"],["/photos/index/2017031882996521.jpg","485feb0d90a79d9ac08a93d20ceb299e"],["/photos/index/2017031883069857.jpg","64c23a90840dfb23c0d66204e9e8d19f"],["/photos/index/2017031883129425.jpg","ce1312d5c09b925e21246a21597c4d94"],["/photos/index/2017031883189097.jpg","38ac75c33034147de93e9c8a559b24ee"],["/photos/index/2017031883232697.jpg","35ff636e01fe9b6a31ea901546460801"],["/photos/index/2017031883283657.jpg","13a15dbad99a8bb44b18f835f7d1856c"],["/photos/index/2017031883324497.jpg","7e0ca9026183d995534d705f66459c35"],["/photos/index/2017031883360921.jpg","05d01b718351c07f4185ec6ee36e598c"],["/photos/index/2017031883394921.jpg","5420612b097552563357aa1aaa1a0ff1"],["/photos/index/2017031883455897.png","977155ffc629b7ca0357711146e93964"],["/photos/index/2017040277299657.png","f20334566e16418f41fae4875afeb6ca"],["/post/4e1f.html","3ca6151727b8626aaf9091f940151f6d"],["/post/af59.html","e28d15a423b3f9362dad7b3c42ec855e"],["/post/cb17.html","21e07ee3b5355668293845bc06f89210"],["/post/cb92.html","0e5be31d3cdc133f8e4308d206cb63fe"],["/post/e971.html","920e59a04a7c4fc21fd3bcf92d4baf80"],["/post/f4ea.html","1ddd13f0a57c79d9e8301e2ac9d2bf8a"],["/post/fc20.html","a4626ef4229ed60f0892c2ae88035503"],["/sw-register.js","6124bb1c121c843bcd24562ac6a5b25e"],["/tags/index.html","e9f06cc54607a5622dab137c526c6e32"],["/tags/导电银浆/index.html","48d08a33ca00ac68d26f2817a8daf779"],["/tags/氧化银粉/index.html","83117fd195cbb440f6794dc72a496cad"],["/tags/氯化钯/index.html","1736169565e9f37c37e08fb3e03be4c1"],["/tags/氯化钯回收价格/index.html","c59b257877c7743f549f285e9f733c9e"],["/tags/金丝/index.html","e8efea2216d66fc23e61f95aff92e113"],["/tags/金丝回收价格/index.html","7fdbc79c3a01aac2d99c6c5f22d18293"],["/tags/金盐/index.html","151875c59d90a2ce111573c0be882e94"],["/tags/金盐回收价格/index.html","ec9f93bcab879f57b5a4570137edef2b"],["/tags/钯碳/index.html","a4b141470873223a010d6ff1626fbb24"],["/tags/钯碳回收价格/index.html","0a51e261ca82d16e34cfd5bdf6ead6e2"],["/tags/银水回收/index.html","31808b262c1f8d40c104f9226272325e"],["/tags/银浆/index.html","37cfd65375a9af8a9432001e948c8013"],["/tags/银浆回收/index.html","d5d35ff7d1e592ea05e2ef25ed40bc27"],["/tags/银浆回收价格/index.html","58cb2800a785c70a5f7ef2af19b352e6"],["/tags/银粉/index.html","dc2c694b8f9e9e91cbdf84bad3977d9e"],["/tags/银粉回收价格/index.html","e1e67e239d5a0a68813849f9dc041c99"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
