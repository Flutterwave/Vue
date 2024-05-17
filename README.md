<p align="center">
    <img title="Flutterwave" height="200" src="https://flutterwave.com/images/logo/full.svg" width="50%"/>
</p>

# Flutterwave Vue.JS (Vue 3) Library

![Publish Vue.js Package](https://github.com/Flutterwave/Flutterwave-Vue-v3/workflows/Publish%20Vue.js%20Package/badge.svg)
![npm](https://img.shields.io/npm/v/flutterwave-vue-v3)
![npm](https://img.shields.io/npm/dt/flutterwave-vue-v3)
![NPM](https://img.shields.io/npm/l/flutterwave-vue-v3)

The all-new Vue SDK helps you create seamless payment experiences in your Vue 3 mobile/web app. By connecting to our modal, you can start collecting payment in no time.

Available features include:

- Collections: Card, Account, Mobile money, Bank Transfers, USSD, Barter, NQR.
- Recurring payments: Tokenization and Subscriptions.
- Split payments

## Table of Contents

- [Flutterwave Vue.JS (Vue 3) Library](#flutterwave-vuejs-vue-3-library)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Initialization](#initialization)
  - [Usage](#usage)
  - [Debugging Errors](#debugging-errors)
  - [Support](#support)
  - [Contribution](#contribution)
  - [License](#license)
  - [Notice](#notice)

## Requirements

1. Flutterwave for business V3 [API keys](https://developer.flutterwave.com/docs/integration-guides/authentication)
2. Vue version >= 3.0

## Installation

This new project is not yet on npm (will need the permission of the Flutterwave team).

## Initialization

1. Import the Flutterwave Library in the 'main.js' file.

2. Add the Flutterwave plugin to your app passing in your Flutterwave Public Key (optional)

> Note 💡: For a Typescript project sample, please see the project in the example directory of the project repository.

If Public key is not added you will have to pass in the public_key parameter to the provided payment component button and payment function

```javascript
//main.js
import { createApp } from "vue";
import Flutterwave from "flutterwave-vue-v3";

const app = createApp(App);

app.use(Flutterwave, {
  publicKey: "<your public key here>",
});

app.mount("#app");

```

## Usage

Majority of the api here works similar to that of the older version. 
One major difference is the removal of global function imports  (such as `this.payWithFlutterWave`) in favour of **composables** such as `useFlutterWave()`. All functions needed are contained in the composable, and can be accessed.

```typescript
const fw = useFlutterWave();
```

See the example at `src/` for more information

## Debugging Errors

We understand that you may run into some errors while integrating our library. You can read more about our error messages here.

For authorization and validation error responses, double-check your API keys and request. If you get a server error, kindly engage the team for support.

## Support

For additional assistance using this library, please create an issue on the Github repo or contact the developer experience (DX) team via [email](mailto:developers@flutterwavego.com) or on [Slack](https://bit.ly/34Vkzcg).

You can also follow us [@FlutterwaveEng](https://twitter.com/FlutterwaveEng) and let us know what you think 😊.

## Contribution

We welcome contributions from the community. Please see the [community guide](/CONTRIBUTION.md) for contributions guidelines.

## License

By contributing to this library, you agree that your contributions will be licensed under its MIT license.

Copyright (c) Flutterwave Inc.

## Notice
This new version was made from the old version at [the current repo](https://github.com/Flutterwave/Vue-v3) by [Nikechukwu Okoronkwo](https://github.com/nikeokoronkwo)