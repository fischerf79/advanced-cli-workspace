const webpush = require('web-push');

const options = {
    vapidDetails: {
        subject: 'http://127.0.0.1:8080',
        publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
        privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
    },
    TTL: 5000
}

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eP4ipKyQA44:APA91bGpvgtXFn3kaSb9LEXBXFRpc8_naafnmR5u6EP2kfV6mnrGCZvEJAiaPFvlGfJp4TuA1x-OqCDm03jwOL9DD1fU5qrJvcrhKeEE0LvN16NFSWcYY2jdpq6BhBaWA5iwSHlJeD5n",
    "expirationTime": null,
    "keys": {
        "p256dh": "BBIR-XGMzAG_D3-SVkoBuCns_HyzY0G-zLMeMq-8MChJENbHS74-WrstlIkUew35D4rgJVoWQ3GLIKK77IMMXxI",
        "auth": "RWqpLRY2IrrqUWg72gB-RQ"
    }
};

const payload = JSON.stringify({
    notification: {
        title: 'Your Gate Changed',
        body: 'Your Gate is now G62',
        icon: './assets/bed.png',
        data: 'additional data'
    }
});

webpush.sendNotification(
    pushSubscription,
    payload,
    options
);
