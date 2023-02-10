---
title: Stop mystifying PWAs
date: 2022-01-30
tags: ['pwa']
description: Have you heard that PWAs are going to kill mobile apps? Should we then give up our favorite mobile apps in favor of some progressive yet web apps? Let's try to get this sorted out.
---

Though PWAs are still not that widespread, there is more and more talk about them. And that's great, except for one thing – it's still quite difficult to figure out what PWA is from all this talk. Some posts even claim that PWAs will replace or even kill mobile apps without giving any idea how or why.

Such posts, of course, stir up interest in the technology, however their point is lost by the time you actually have to develop a PWA. Getting into PWA development can be tricky, though it's not that difficult to explain what a PWA is, avoiding terms like "mobile app killers".

After all, PWA is still just a "classic" web application, just flavored with manifests and service workers, which in turn provide features like installability, offline mode, and a few others. These features are clear and enticing (though not necessary at all), and, thanks to them, it really looks like PWAs are taking over the mobile experience we're used to. So, let's consider the technical points that make this possible in a little more detail.

### Web app manifest

Manifest is a regular JSON file that provides the browser with some meta-information about the app. A typical manifest includes the name, icons, and base URL of the application. But it can also include screenshots, shortcuts, mode of operation when installed on the user's device, as well as a number of other items (see [MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest) for more).

It's kind of like filling out an app page for some marketplace, isn't it? Except for going through moderation and paying fees, of course.

### Service workers

Service workers are nothing but a proxy between the browser and the network. They make it possible to intercept and handle network requests (including managing cache responses programmatically), which gives us the opportunity to provide an offline experience. They furthermore allow access to push notifications and background sync APIs.

Sounds promising, but unlike creating a manifest, working with service workers requires some preparation. Fortunately, there are already tools designed to make this easier. For example, there is [Workbox](https://github.com/GoogleChrome/workbox) that provides a declarative interface over service workers.

### And… That's it

Manifest and service workers are basically all the technical nuances of PWA development. As already mentioned, there are some other requirements besides installability and offline mode for a web app to be called progressive (see checklist on [web.dev](https://web.dev/pwa-checklist/)). However, they generally apply to any good web application, as these are requirements such as secure connection, responsiveness, accessibility, etc.

In this respect, PWA is not even a type of application, but rather a set of best practices that most modern web apps should follow. Therefore, it all looks like a natural evolution of web applications, which is quite in line with today's realities and user needs. It can certainly be a threat to a certain layer of native applications, but the adoption of PWAs happens quite organically. Anyhow, further developments are largely up to the users.
