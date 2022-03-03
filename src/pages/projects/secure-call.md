---
layout: ../../layouts/markdownLayout/MarkdownLayout.astro
type: project
title: Secure Call
slug: secure-call
thumbnail: /images/projects/secure-call.png
specialProject: true
github: null
websiteAddress: https://securecall.amir4rab.com
npmPackage: null
tags:
  - socket.io
  - uuid
  - validator
  - framer-motion
  - mongodb
  - next-auth
  - next.js
  - react.js
  - sass
  - website-project
  - close-source-project
  - jsonwebtoken
  - '@amir4rab/web-rtc-connector-client'
  - gray-matter
  - qrcode
  - react-icons
  - remark
  - remark-html
gallery:
  - { type: mobile, url: /images/secure-call/secure-call-0.jpg }
  - { type: mobile, url: /images/secure-call/secure-call-1.jpg }
  - { type: mobile, url: /images/secure-call/secure-call-2.jpg }
  - { type: mobile, url: /images/secure-call/secure-call-3.jpg }
  - { type: mobile, url: /images/secure-call/secure-call-4.jpg }
  - { type: mobile, url: /images/secure-call/secure-call-5.jpg }
mainLibraries: 
  - socket.io
  - framer-motion
  - mongodb
  - next.js
shortInfo: 'Secure call is free, open-source, end-to-end encrypted, video/audio calling website.'
---

## Secure call

### About

Secure call provides end-to-end encrypted audio and video calls for free. video stream will be transmitted between users with p2p webRtc, secure call provides a signaling service to connect users browsers together.

## Features

### Call sessions

![secure-call-video-call](/images/projects-assets/secure-call-0.png)

Secure call provides video and audio calls, also if both of users are using the same browser they can share their screens instead of their webcam feed.

### Data Channel

![secure-call-video-call](/images/projects-assets/secure-call-1.png)

Secure call also provides data transition sessions, which let users transmit files up to 250 MG, all the data transition take place over a p2p webRtc connection.


## Project current problems

- not yet open source: do to security concerns
- Bugs on safari
- web rtc connection problems: do to the nature of webrtc, connections can not be generated on some internet connections