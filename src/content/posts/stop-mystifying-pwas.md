---
title: Stop mystifying PWAs
description: PWAs are one of the most talked-about topics in modern web development, but many developers still have misconceptions about them. In this article, I will try figure out what they are and what they are not.
date: 2022-01-30
---

Progressive web applications are one of the most talked-about topics in modern web development. They have long been touted as a replacement for native mobile apps, but in reality, PWAs are still the same web apps we are used to, but with some (possible) advanced features.

PWAs are often described as a combination of web and mobile app features, which can be confusing. Some sources focus on the technical features and capabilities of PWAs, while others focus on their user experience and the benefits they provide. In essence, a PWA is just a regular web app flavored with manifests and service workers, which in turn provide features like installability, offline mode, and a few others.

These features (although they are not mandatory) provide a native-like experience and give the impression that PWA can be a complete substitute for native apps. However, PWAs are still limited by the capabilities of web browsers. These applications do not have access to the full range of native APIs, which means that they cannot access some of the more advanced features of mobile devices.

PWAs are not a one-size-fits-all solution. They may not be suitable for every type of application and may not provide the same level of functionality as native apps. Despite all the buzz around them, PWAs are not a replacement for native mobile apps. However, they are worth considering for anyone looking to build a new web app or upgrade an existing one.

From a technical standpoint, it is worth considering what makes it all possible.

### Web app manifest

Manifest is a regular JSON file that provides the browser with some meta-information about the app. A typical manifest includes the name, icons, and base URL of the application. But it can also include screenshots, shortcuts, mode of operation when installed on the user's device, as well as a number of other items (see [MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest) for more).

It's kind of like filling out an app page for some marketplace, except for going through moderation and paying the fees, of course.

### Service workers

Service workers are nothing but a proxy between the browser and the network. They make it possible to intercept and handle network requests (including managing cache responses programmatically), which gives us the opportunity to provide an offline experience. They furthermore allow access to push notifications and background sync APIs.

Sounds promising, but unlike creating a manifest, working with service workers requires some preparation. Fortunately, there are already tools designed to make this easier. For example, there is [Workbox](https://github.com/GoogleChrome/workbox) that provides a declarative interface over service workers.

### And… That's it

Manifest and service workers are basically all the technical nuances of PWA development. As already mentioned, there are some other "requirements" besides installability and offline mode for a web app to be called progressive (see checklist on [web.dev](https://web.dev/pwa-checklist/)). However, they generally apply to any good web application, as these are requirements such as secure connection, responsiveness, accessibility, etc.

In this respect, PWA is not even a type of application, but rather a set of best practices that most modern web apps should follow. Therefore, it all looks like a natural evolution of web applications, which is quite in line with today's realities and user needs. It can certainly be a threat to a certain layer of native applications, but the adoption of PWAs happens quite organically. Anyhow, further developments are largely up to the users.
