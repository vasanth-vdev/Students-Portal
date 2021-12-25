const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v3';
const StaticAssets = ['/', '/index.html', '/manifest.json'];

const limitCacheSize = (name, size) => {
	caches.open(name).then((cache) => {
		cache.keys().then((keys) => {
			if (keys.length > size) {
				cache.delete(keys[0]).then(limitCacheSize(name, size));
			}
		});
	});
};

self.addEventListener('install', (evt) => {
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			cache.addAll(StaticAssets);
		})
	);
});

self.addEventListener('activate', (evt) => {
	evt.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys
					.filter((key) => key !== staticCacheName && key !== dynamicCacheName)
					.map((key) => caches.delete(key))
			);
		})
	);
});

self.addEventListener('fetch', (evt) => {
	if (evt.request.url.indexOf('https://psgstudentszone.netlify.app/') === -1) {
		evt.respondWith(
			caches
				.match(evt.request)
				.then((cacheRes) => {
					return (
						cacheRes ||
						fetch(evt.request).then((fetchRes) => {
							return caches.open(dynamicCacheName).then((cache) => {
								cache.put(evt.request.url, fetchRes.clone());
								limitCacheSize(dynamicCacheName, 15);
								return fetchRes;
							});
						})
					);
				})
				.catch(() => caches.match('/index.html'))
		);
	}
});
