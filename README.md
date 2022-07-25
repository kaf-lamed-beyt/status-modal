![issues](https://img.shields.io/github/issues/kaf-lamed-beyt/next-status-modal) ![forks](https://img.shields.io/github/forks/kaf-lamed-beyt/next-status-modal) ![stars](https://img.shields.io/github/stars/kaf-lamed-beyt/next-status-modal) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![license](https://img.shields.io/github/license/kaf-lamed-beyt/next-status-modal) ![tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fkaf-lamed-beyt%2Fnext-status-modal)

# status-modal

A react component that you can use to render current error or success messages from a particular API endpoint

## Basic usage

You can use this package by installing it with the command below

```bash
npm install status-modal
```

When you're done with the above step, simply import the component in your project. The snippet below shows a basic usage without some of the props

```jsx
import React from "react";
import { Status } from "status-modal/dist";

export default function Home() {
  const message = "Hello status modal";

  return (
    <React.Fragment>
      <Status message={message} />
    </React.Fragment>
  );
}
```

By default the UI of the modal has a touch of green, which indicates a successful status message.

But, if you want to alter the style of the modal to fit the case of an error message, all you need to do is, add the `status` prop, and set its value to `"error"`

```jsx
<Status message={message} status="error" />
```

## Want to contribute?

Checkout the [contributing guide](CONTRIBUTING.md) on how to go about that.
