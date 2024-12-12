self.addEventListener('install', (event) => {
    console.log('Test Service Worker Installed');
});

self.addEventListener('activate', (event) => {
    console.log('Test Service Worker Activated');
});

self.addEventListener('fetch', (event) => {
    console.log('Test Service Worker Fetch Intercept:', event.request.url);
});
