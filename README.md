# react-pwa-reference

![Verify](https://github.com/localnerve/react-pwa-reference/workflows/Verify/badge.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f2f6921b42144bf78487753e2eb70cf5)](https://www.codacy.com/app/alex/react-pwa-reference?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=localnerve/react-pwa-reference&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/localnerve/react-pwa-reference/badge.svg?branch=master)](https://coveralls.io/github/localnerve/react-pwa-reference?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/localnerve/react-pwa-reference/badge.svg)](https://snyk.io/test/github/localnerve/react-pwa-reference)
![Maintenance](https://img.shields.io/maintenance/yes/2021.svg)
[![Dependency Status](https://david-dm.org/localnerve/react-pwa-reference.svg)](https://david-dm.org/localnerve/react-pwa-reference)
[![devDependency Status](https://david-dm.org/localnerve/react-pwa-reference/dev-status.svg)](https://david-dm.org/localnerve/react-pwa-reference#info=devDependencies)

> A project boilerplate and reference example for ~~isomorphic~~ universal reactiflux progressive web applications.

## Summary
This project is an evolution of [flux-react-example](https://github.com/localnerve/flux-react-example) and [flux-react-example-sw](https://github.com/localnerve/flux-react-example-sw) that adds evolved tooling and organization. It's a rather complete, performance minded reference PWA that uses data-driven routes and content from an attached service. The data service driving the app is this [Github repo](https://github.com/localnerve/fred).

## Environment Prerequisites
Just Node 12+  
<sub><sup>Some development dependencies of this project have binary installs (node-sass, image manipulators), so YMMV.</sup></sub>

## Stack
* **N**ode
* **E**xpress
* **R**eact (Facebook)
* **F**luxible (Yahoo)
* sw-toolbox, sw-precache (Google)
* babel, gulp, webpack, eslint, mocha/chai, sass

## Setup
1. `git clone https://github.com/localnerve/react-pwa-reference`
2. `npm install`

## Run

### Run Production
  `npm run build:server && npm start`

### Run Development
  `npm run dev`

#### Development Tasks
  All `npm run` development commands:

| command | description |
| :--- | :--- |
| `build:list` | dump the asset build task tree to console |
| `config:dev` | dump the development config to console |
| `config:prod` | dump the production config to console |
| `dev` | lint, build assets, start the server, verbose, NODE_ENV=development, offline NOT supported |
| `dev:analyze` | analyze webpack stats file and dump bundle size analysis to console |
| `dev:analyzer` | analyze webpack stats file visually |
| `dev:ccss` | build css assets, watch and recompile sass on change |
| `dev:debug` | lint, build assets, start/debug server, NODE_ENV=development, wait debugger attach |
| `dev:inspect` | like `dev:debug`, but use node --inspect, best w/Node 7+ |
| `dev:perf` | lint, build assets, scripts w/source maps, start server, NODE_ENV=production, offline supported |
| `dev:prod` | lint, build assets, start server, NODE_ENV=production, offline supported |
| `fixtures:dev` | build test fixtures from data service, development |
| `fixtures:prod` | build test fixtures from data service, production |
| `lint` | run linter on entire project |
| `perfbudget` | used by CI to test performance budget against service |
| `test` | run the entire test suite |
| `test:cover` | run the entire test suite, capture coverage, and report |
| `test:debug` | build with source maps, start the test suite, wait debugger attach |
| `test:inspect` | like `test:debug`, but use node --inspect, best w/Node 7+ |
| `test:func` | used by CI to run functional tests against selenium grid |
| `test:contact` | use to manually test the contact worker after nodemailer update |

## Fun Facts
1. [webpack.github.io/analyse/#modules](http://webpack.github.io/analyse/#modules) still works on webpack stats files to visualize the module dependency graph.