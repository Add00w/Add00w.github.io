'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5fc10240b73452c6a64964c44206397c",
"index.html": "d82a5d168a4885a0ca870b45fc438083",
"/": "d82a5d168a4885a0ca870b45fc438083",
"main.dart.js": "6be093cc9784c697353bcbc2487e13a5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2e80b11771bfece860bf33f24e3b47ca",
".git/config": "4bb1fb5d12076003427fe7fda381234b",
".git/objects/0d/29cf25b3505ff8e75ebddc327a153fa6e3f00f": "c8df2b989868646269c816fd4eaed563",
".git/objects/95/83cc71e174eb082d377c40ec0ae682348a17ff": "8a01f9dca0c1010fa99790a8832098c5",
".git/objects/6f/a54a54abc6b8c6a19a914c9b1dc55235c23c7d": "fc20abd51e1a73a379e0c8ad9ce1ebe9",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/4d31a229864189b62e27c6deea4f6d1a09cfbd": "466522dae83d5d1dd04e0f5b45f2c073",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/e4d4c74bccd7c13cdb220de2e380212b686c76": "70d0a0cf23a1b32c258ccc898464f200",
".git/objects/51/e59bc6a3adf07747b61aebf64a2e3574ca02ab": "0e57dafc21588e65c99a4debb33efe12",
".git/objects/d9/3206346593fcd153316e1187e941722420a548": "c4c46876aa9fbe88731833924ee22bda",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bb/19c63ccd4e2538854061682f005879e11effe7": "814ec26867be0a21ff081c39b48eb672",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3032c86c0b1924d88c9e3ab30a8e773e9ed03e": "aa08fc236aaf979e66829662528799b8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/34a8dc76b52c50ed05d374a54643ba74327830": "060900e3f27737891d21d22f1de7dbea",
".git/objects/c9/5aa87ff0dfee6194d2173f990bf52932299c0c": "3dbe0297e6d01f2334302fc18df1af5b",
".git/objects/18/478fee83aa7d7fa9e0ed9d4534e7e608eaa248": "87af2f3e42e989233444bd1a65e545c9",
".git/objects/27/935d0930e2043b2142ddd1d92728f1c8bc2fc7": "b542f946aaf404113bb44b468a0513e2",
".git/objects/pack/pack-fad4628a0c414b7b03946bbd1100417a5d8224b8.idx": "d907ff7faf7e7cec8e6001cc55a70501",
".git/objects/pack/pack-fad4628a0c414b7b03946bbd1100417a5d8224b8.pack": "1f7134b4e4a852e0b5d0dd2879a0d5c8",
".git/objects/45/7392936fdc543b325e0173e9fa1acb3946efc4": "f2018faac3e87a2c9df3b48b2fa7df9d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/afdaf4fe65ca0455074860a8526f915528d3b5": "6a4d221b821568596fa360a9c2b6eeec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/6ae8628fdcc638460e10bb5848e7eca7e59a9d": "38bc5eeb5f962fad5a895a0152d72172",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/31/e4adbdd21884a5fc2186929dc778a736fcc3e7": "b49992762340d8d44ffe7e9da62cc405",
".git/objects/31/8061d883cedf0b90af387dbb157d392ebe168c": "6f16345fc8485461ed916583512465ae",
".git/objects/54/32eee030bd0272b0e2213af21d7638032e7b83": "f24c1d9c069d7269cd0f1895d7f7e829",
".git/objects/30/26f44c9abcc42f446c29c020ff90cf31d15e5f": "277d713b920bcf4671cddf2ff1af104f",
".git/objects/0f/6b938686c1914f2721054847c4511c3de2f208": "cfd549a000fb810f75c59e78d3e7dfce",
".git/objects/0f/0d631fb8a602039576ca5756a5d7013b9ba0cf": "8dc67ac6775fe05423a50f5d200aa602",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/93830202d48c44f205add6a9f415286612a8bc": "c30a36bd201ff0e5c46c65324f937eb7",
".git/objects/e8/43b4fbb132110beee78dc5280727131c34d9d5": "a393e8972b3b63820fe966c306533e19",
".git/objects/e0/8294eb26f1daa0cfd19680f4788cad6b1aaaac": "113ffcd9044ac4965d3239d8483837ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/711383aaca5a2395111905710fc2604e18153d": "a69c8a13d307b2361620ee7364a66fbc",
".git/objects/4f/4cf90d561b9286d85cfa1a323d7ecd66cfbd73": "1ac790846db30e9f6966c95dbfe16f4d",
".git/objects/15/5ab184d7f943534c0be7dbcdaefa077f0bd745": "78640c927f953b96bbc1197e78c6724b",
".git/objects/8c/a8ae4c81493f1a0beca6223c1d8e45dfffaba5": "f9829a65b23753745dbe42dca6ea713f",
".git/objects/8c/4c43e076ada3eba0ff3427d3c8e3dcbaba01fa": "b4cabfd3aa650eb1611cfa0d8ccbcc48",
".git/objects/2b/89b957e47f9fad38f25bc7defbf381024b12a7": "e31adbff284530bf580241ccd3413949",
".git/objects/13/67c433891302c69a85f1ddfb2886612a191e4d": "0888182001c492c8e290086b5fcf0628",
".git/objects/7f/a01aeb6fc9b189f97cee5ffb13bcf358b4811f": "7325d1055aa3c590b4f9629e32f9d489",
".git/objects/7f/544c4da540f5999e41b553e0600f54a76f7cdd": "d74c0ff9f63c0ffcfb0084f1bcc38150",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89be72eb6dcf734c6cbcf2edf549f424",
".git/logs/refs/heads/master": "6e60df837837a43ed2de1f7f3d539230",
".git/logs/refs/heads/main": "a97d68a2d812bd58f661c3547e474b26",
".git/logs/refs/remotes/origin/main": "def6e363acf5c2e4e2744c003aaecf47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "47870ced5e58eb54adaef46398aa78fb",
".git/refs/heads/main": "47870ced5e58eb54adaef46398aa78fb",
".git/refs/remotes/origin/main": "2427639729d0a5cf17caefc6071d43b5",
".git/index": "e333ae2a678efed9e284093fc5224c3a",
".git/COMMIT_EDITMSG": "6ed5b74bda9076633115f1c16a7d9e10",
".git/FETCH_HEAD": "23de08cb59a25e8517ec9147f25ea173",
"assets/AssetManifest.json": "8f8849991a464bb6d9131f4ca0a8c4f8",
"assets/NOTICES": "ddc4294981445e46d8cec1ad172cb348",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/me.jpg": "0dbb1705f4e8d4e6996fab186fc90aae",
"assets/assets/images/medium.svg": "4431e2b422a51b3291e47b0154de143f",
"assets/assets/images/dotless.png": "8cfebbe1214dab1e22aa4efb4ec7d1fc",
"assets/assets/images/github.svg": "34119f98c3ce7550d146fc81aee9bf49",
"assets/assets/images/share_book.png": "3f83c3330661f8f8d4a7c7ba8833aaed",
"assets/assets/images/car_details_logo.svg": "af486d39f6dce439776b92d0304fb3c7",
"assets/assets/images/fingerprint.jpg": "10312675cd2b48c5e44d78fe80ec36d1",
"assets/assets/images/linkedin.svg": "04779755770746be6edbead9cdd2488b",
"assets/assets/images/twitter.svg": "5baf573a63734b0abae21d8735bc7ba5",
"assets/assets/images/Logo.svg": "1f2834606a3ca11a967f5de0b2843fa5",
"assets/assets/images/johrh_logo.jpeg": "de57102839ab452d2b77cc4c1dbbb821",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
