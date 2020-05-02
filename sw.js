/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a3ce81e1f7503005748cc4deed7f935c"],["/about/index.html","337d8f2b30a540b9aa70e1ac8198e4f1"],["/archives/2020/03/index.html","c453206633d07afbaf34cedd690df9e2"],["/archives/2020/04/index.html","306c6d31f9a7733d5ba4d0b947d3c66b"],["/archives/2020/index.html","4374100b22cd61df0de3ee21029fc26b"],["/archives/index.html","e1c6a8c0dacb2ef9967cc0d6ee65e721"],["/categories/index.html","e757d82168c2ff3d950aec8bd2e3c965"],["/categories/导电银浆回收/index.html","878c86ed349fbf109b8b18b1e62ddac2"],["/categories/硝酸钯回收/index.html","201aa826ac61b9f9937e0d734a279199"],["/categories/胶体钯水回收/index.html","282397593670677006febd355aea6b79"],["/categories/金盐回收/index.html","4190db940e70b53898a915eede220cf8"],["/categories/钯碳催化剂回收/index.html","e29b979b2cae01be5e13d7a0af6e160b"],["/categories/铂铑丝回收/index.html","e121486ee7122e31e8256fc5cd3d5800"],["/categories/铑水回收/index.html","35527424b0c1849cab72ea8b10fb2157"],["/categories/银浆回收/index.html","154c3e77a117f406609ac6fdf0377146"],["/categories/银焊条回收/index.html","f2411679ce0ed6dcbd7454da4290a95f"],["/categories/镀金液回收/index.html","364a92fcbc96933b9255c44480b796ed"],["/contact/index.html","e0cfda2826ee422defe93f8f7616662f"],["/contact/index/weixin.png","83fbc4060c5be7cb59207708b2d8ae87"],["/css/back-to-top.css","afb22e48158221bcfd6dd95bded7a5ff"],["/css/insight.css","9cdca87fd0bb898924b8d3b69e683b06"],["/css/kefu.css","f50b240b3b4e4f76d4cbdf0365112df4"],["/css/main_banner.css","c7bb580a5daf7e44cf069b21aa5f54ae"],["/css/progressbar.css","40f72c6103de5bda156ce88b3d882310"],["/css/search.css","175837e1410611409e6fb89b92a47ba6"],["/css/side.css","8447aabb61f791ddd176dece325c95f7"],["/css/style.css","def8c5c8cee2c380b070b1c4b538e5f0"],["/dist/music.js","cd725723958901ac70c6f3a91a5ff474"],["/gallery/2.jpg","78644f40c71d99af97beab64cfbe6df6"],["/gallery/3.jpg","d58d17136f529009092b5bf0fcf41ac2"],["/gallery/bt.jpg","e1119a7da1b165fbf68bfb7548d7a0f3"],["/gallery/co.png","392048a2b9de7c8dcca055a515daccf7"],["/gallery/index.jpg","d938be2864bac73c8e5f64d4d3cfb32d"],["/gallery/js.jpg","d7cac9b8ad9eb37a94122601458c75c1"],["/gallery/jy.jpg","d39b6733e9232334db47f02837183179"],["/gallery/lhb.jpg","abed0f4aba7080f1f382b5ff7dd699a1"],["/gallery/mp.jpg","90381b60a3e6a69b8cbc51a96d501a7e"],["/gallery/pb.png","7825a5a856d7e2cdc74cafe8673453ee"],["/gallery/yf.jpg","a12e821179f51590edb9264d67f33578"],["/gallery/yj.jpg","7a9da49a616586353f4868a055104d45"],["/images/avatar.png","61b5696df0f9dffc84564aa0c236e785"],["/images/avatar1.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/images/favicon.png","1bcc1a753cc821d202d93e99d180199b"],["/images/favicon.svg","efe397c6c8a1d1770fa13cbbaad6bf85"],["/images/logo-backup.png","15d3994a9a4d6ae4b62d96bd2bbc1a57"],["/images/logo.png","958bc6a5fc21a2b86694609c2d197293"],["/images/logo.svg","dffd6ab63cb9164ab89bc7b7ef92003c"],["/images/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["/images/qq.png","9b6718fb7a2cfaafbd6decc44ffcb982"],["/images/thumbnail.svg","0a116c9321a125b2cf2ae1dc4896d521"],["/images/wechat.png","cfd8eb1bdc26449feed4cd54e5525253"],["/images/weixin.png","83fbc4060c5be7cb59207708b2d8ae87"],["/index.html","c95a83f034c536ff5a0c6b15e17ecc13"],["/js/animation.js","ffcd6e54c79b7d45d14e6af8ff47e6e4"],["/js/back-to-top.js","95c11b1e139df76bf5a5312d73d94379"],["/js/click_show_text.js","ad0758258ad4b2025a97f27b837eb6e4"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/gallery.js","d91d7ca3236440f6a95271415eeb87ad"],["/js/insight.js","04278c0d1b6622c5a158c870edc6a4c0"],["/js/jquery.min.js","5d74790930ceb5ac2e460d6758dfe09d"],["/js/main.js","543dbdebc128db8b5d52c618ac5b54c3"],["/js/main_banner.js","fe37b26a9699be50fab1ec81ce1bc827"],["/js/night.js","e55e3adbfebd429fc575fce95b6a9b26"],["/js/side.js","08c752b18adbab113d0263abadb72df2"],["/js/universe.js","ebe73cf47baafc298a542ac35641ffb3"],["/photos/index.html","9dfad5af8c01ed86adc7ef281b94f747"],["/photos/index/2017031800537488.jpg","2c357f3d080a7c03781c3653c9024bcb"],["/photos/index/2017031801024897.jpg","f8ed45c0208cff614dc4fbbbf5b7f3c5"],["/photos/index/2017031801262081.jpg","dab695c570cae9f27f5d48f9c583d886"],["/photos/index/2017031801499140.jpg","a4ec8380a05ccfcdadcc25f1015fdfd3"],["/photos/index/2017031875167489.jpg","18634921e02a906eb058187b66521a1f"],["/photos/index/2017031875526041.jpg","493795f491d700919ab6fc3a0ecdbd62"],["/photos/index/2017031875808273.jpg","d193d11c160b275e8fc26e56669ed5f8"],["/photos/index/2017031875874377.jpg","e8b59218c2501e120f093826fb6f4b0e"],["/photos/index/2017031876281153.jpg","d2fb3f68a7557d3f720b3400e9e3fba4"],["/photos/index/2017031876418881.jpg","dd276bcdb4279c1aec0dfa20316301f7"],["/photos/index/2017031876646873.jpg","0f07b39a2818579e3c78fcdb0fbd3610"],["/photos/index/2017031876772521.jpg","1d541d12389e331c63499058277ec7f8"],["/photos/index/2017031876898569.jpg","9a4714aadd43fb4e11f6313979080582"],["/photos/index/2017031877057905.jpg","249e6ef2808cd2b29b09190392c41deb"],["/photos/index/2017031877817465.jpg","31670ccc59341a1d7953479d4773bed1"],["/photos/index/2017031877882657.jpg","4f17a22d269ae9ab677702896fe6305c"],["/photos/index/2017031877941129.jpg","6406b06d4e9653aedab05fc913a01339"],["/photos/index/2017031878557345.jpg","7faf0c8adcb45d6204854f7dfe04efee"],["/photos/index/2017031878620977.jpg","ad02a1c12e5e55e42872daf4524dbf5b"],["/photos/index/2017031878751817.jpg","28e6a0d8292f17e8836ec18210d7ffae"],["/photos/index/2017031878982521.jpg","2d1df37a0e92084f787a0de5b6086e10"],["/photos/index/2017031879067049.jpg","65c45a2f4eef509fb48b02d2ff32b92e"],["/photos/index/2017031879148505.jpg","4a64d4e988de13c0e03f35ab11a33506"],["/photos/index/2017031879190409.jpg","86611609d8ca69b9136a32cec6fe3541"],["/photos/index/2017031879239921.jpg","a47adb05f180705044b81caf25db91bd"],["/photos/index/2017031879279081.jpg","afeb40edf3e8f4cc50594506f475da7d"],["/photos/index/2017031879403993.jpg","aa1446ea4f2542e8e08362939574a79e"],["/photos/index/2017031879453537.jpg","c596dc73808a5d4b0a8005e211d1abe5"],["/photos/index/2017031879552689.jpg","1f4366ba8a65c9fc99e06328ca365de4"],["/photos/index/2017031879606001.jpg","86578a80c8cd52a04e0ccbb9e5fe2fca"],["/photos/index/2017031879756321.jpg","4afb3184e5377eea2227cdb7707ec14b"],["/photos/index/2017031879804465.jpg","dff951f1719ad9803f69e5d55c6e7482"],["/photos/index/2017031879883041.jpg","4356eac5002e56011fa3252e77a986a9"],["/photos/index/2017031880075689.jpg","1192cb5f3633d537073c9c5a8e98f707"],["/photos/index/2017031880162297.jpg","ec7b69cafc9b26d27dac78295b43fec1"],["/photos/index/2017031880223945.jpg","043c2a6218b0e66a2300bf707f7ca917"],["/photos/index/2017031880317801.jpg","2c3b77a3af29d4e727eea0b08933b64d"],["/photos/index/2017031880496689.jpg","71869712c89178499da1526bc1e40f71"],["/photos/index/2017031880539449.jpg","cb59ab58754a9e50ff3c5595ca01055c"],["/photos/index/2017031880638865.jpg","1e44ce79cce622aa2d08601dc8888ef0"],["/photos/index/2017031880770753.jpg","d5898dcb854dd2ea4717ee95a6befe0a"],["/photos/index/2017031880835217.jpg","d3b51a95f3ca99e368b03cb1393a2fa2"],["/photos/index/2017031880894657.png","2cd4b4b0d54173ee97c625ecefe6782b"],["/photos/index/2017031880968777.jpg","c3bd1b38387b33bf54a99d6fc6f75a8f"],["/photos/index/2017031881038177.jpg","e548a14d0cf4ab627fa3ffb4a30e14e4"],["/photos/index/2017031881279489.jpg","c28fe7f643e068b804b6dbd64b74bf0d"],["/photos/index/2017031881329217.jpg","3ebb1591a081481294a10ed4c595ead8"],["/photos/index/2017031881460585.jpg","557d7df411a05032cabd53db0f52d5ba"],["/photos/index/2017031881604057.jpg","fdbc7e945bad1546ed7ddadfe7bdc35a"],["/photos/index/2017031881649441.jpg","e99110c3bb7084c62d7ef32b4a9b4b5b"],["/photos/index/2017031881761289.jpg","9fd52a08f4d28e6d5a4cd94547243f85"],["/photos/index/2017031882836329.jpg","3f05906b19cbcc179301815d7ef25d44"],["/photos/index/2017031882894409.jpg","34d997826c37d6526f8a70c04645e03e"],["/photos/index/2017031882996521.jpg","485feb0d90a79d9ac08a93d20ceb299e"],["/photos/index/2017031883069857.jpg","64c23a90840dfb23c0d66204e9e8d19f"],["/photos/index/2017031883129425.jpg","ce1312d5c09b925e21246a21597c4d94"],["/photos/index/2017031883189097.jpg","38ac75c33034147de93e9c8a559b24ee"],["/photos/index/2017031883232697.jpg","35ff636e01fe9b6a31ea901546460801"],["/photos/index/2017031883283657.jpg","13a15dbad99a8bb44b18f835f7d1856c"],["/photos/index/2017031883324497.jpg","7e0ca9026183d995534d705f66459c35"],["/photos/index/2017031883360921.jpg","05d01b718351c07f4185ec6ee36e598c"],["/photos/index/2017031883394921.jpg","5420612b097552563357aa1aaa1a0ff1"],["/photos/index/2017031883455897.png","977155ffc629b7ca0357711146e93964"],["/photos/index/2017040277299657.png","f20334566e16418f41fae4875afeb6ca"],["/post/14fc.html","3354b7130d651e00386bafb4786555ba"],["/post/4e1f.html","3785b9a75fbc9a35834a459d5ab08b9b"],["/post/af59.html","be3cb7a848bb31ca9c9e687df012e038"],["/post/b5a2.html","ee6b7bbfddb3d3aaaa8bf018104a4b7b"],["/post/cb17.html","45a6082bd39d3c365fe789367947e2b8"],["/post/cb92.html","c6b75623cdf42455751c7f3b47956705"],["/post/e971.html","3a33659c41c836b59619827e439d2af2"],["/post/eb82.html","192f6fa9143d59a196477ffde850e82a"],["/post/f4ea.html","3a4d7f2a91d5714ebd8489382f0c8b92"],["/post/fc20.html","4a2ce2d695661353eb886fccd7af4aeb"],["/sw-register.js","526e32cf64d92fb01fef01ced628a58b"],["/tags/index.html","2ee8a639ba6eb343c0c1d864701c8058"],["/tags/回收银浆/index.html","ad371befdbf9ff238bfa340c9d457847"],["/tags/导电银浆/index.html","71b507c004b903e3033087cfc01f33ab"],["/tags/导电银浆回收/index.html","b7e76138edd66a852f21bda3ce59c29c"],["/tags/氧化银粉/index.html","7cb15efb1738f819edf043c4d5707acc"],["/tags/硝酸钯回收/index.html","4642bbbeef20251fe73ea77d2543fc63"],["/tags/硝酸钯回收回收价格/index.html","43fe3547e9bae4e8acabd2b407a50743"],["/tags/胶体钯水回收/index.html","12c01666268b3af615cd71cfad44aace"],["/tags/胶体钯水回收价格/index.html","ac0dd6eb8c3eb50e7e137ecf8b299f15"],["/tags/金盐回收/index.html","2b13475255e167509a5f7798c57ac6de"],["/tags/金盐回收价格/index.html","d23ca449f8b57676accaf841d01a1dc2"],["/tags/钯碳催化剂回收/index.html","6bd6cb7e7a42348069b2f89696594d33"],["/tags/钯碳催化剂回收价格/index.html","0adb29ae3964fe77849260e05b6950f3"],["/tags/铂铑丝回收/index.html","db9223ef26fcbddae2518e38092c9e9a"],["/tags/铂铑丝回收价格/index.html","7632a0793f1ce91b9b735dd336de0180"],["/tags/铂铑丝怎么回收/index.html","c249564e9c95b25bea5f854b2e6a5089"],["/tags/铑水回收/index.html","96261ca04f36ef4f109a949db043410a"],["/tags/铑水回收价格/index.html","abb34ec5031b150179c48cfb09c6a7c0"],["/tags/银水回收/index.html","08c838012403d0adc62895d7fdd2224a"],["/tags/银浆回收/index.html","f3fae0e225ca1e10dcdbf755b784e62f"],["/tags/银浆回收价格/index.html","f893072afcdbb9ef6840807f648581fa"],["/tags/银浆怎么回收/index.html","dc44638667f7fef22725ed1bda5b0d4e"],["/tags/银焊条回收/index.html","382f43ac02a330e1ff053d924166eb52"],["/tags/银焊条回收价格/index.html","88b164969c44531d77a4df917a52ac40"],["/tags/镀金液回收/index.html","4dd9661635f2bc5991802cdf1119b5e9"],["/tags/镀金液回收回收价格/index.html","eac601bd54fd3f7d8304ef2c7aeb7a7e"],["/tags/镀金液回收怎么回收/index.html","da6bed90c77edd6616ac400670f2445c"]];
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
