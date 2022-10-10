[![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=flat-square)](https://github.com/acekyd/made-in-nigeria) ![issues](https://img.shields.io/github/issues/kaf-lamed-beyt/next-status-modal) ![forks](https://img.shields.io/github/forks/kaf-lamed-beyt/next-status-modal) ![stars](https://img.shields.io/github/stars/kaf-lamed-beyt/next-status-modal) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![license](https://img.shields.io/github/license/kaf-lamed-beyt/next-status-modal) ![tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fkaf-lamed-beyt%2Fnext-status-modal)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

You can also use the `error` prop to apply the error style.

```jsx
<Status message={message} error />
```

### Optional Props
Here is a list of optional props that Status accepts
- **wrapperId**:
  This is the `id` of the container(`div`) where `status-modal` renders in the DOM tree as the last child of html `<body>` tag.
  By default `wrapperId="status-modal-root"`.
  You can change this `id` due to naming conflicts, or to group `status-modal` into collections and style the collections differently.
  ```jsx
  <Status message={loginMessage} wrapperId="status-modal-login" />
  <Status message={alertMessage} wrapperId="status-modal-alert" />
  ```

## Using status-modal with Next.js

When you install status-modal in a Next.js app and try to use it, Next.js throws an error "ReferenceError: document is not defined" this happens because the document object is not available on the server when the page is built.

You can fix this with Next.js dynamic imports, while taking note of the `ssr` flag.

```jsx
import React from "react";
import dynamic from "next/dynamic";

// import the package with dynmaic imports
const Status = dynamic(() => import("status-modal").then((mod) => mod.Status), {
  ssr: false,
});

export default function Component() {
  const greetings = "Hello world";

  return <Status message={greetings} />;
}
```

## Showing user authentication status.

Say you're working on a sign-in page of a web app and you need a way to let your users know the current state of their request whether it is successful or not.

You can make use of `status-modal` to display the error or success message you get from the API response. To do that in react, you'll probably need some state variables declared already with the `useState()` hook.

An example of such state variables could be the email and password of the user. Most importantly, the `error` and `success` state variables too.

```jsx
import React from "react";
import axios from "axios";
import { Status } from "status-modal/dist";

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signInSuccess, setSignInSuccess] = React.useState();
  const [signInError, setSignInError] = React.useState();

  return (
    <React.Fragment>
      <form onSubmit={handleSignIn}>
        <p>sign in</p>
        ...rest of the form layout
      </form>
    </React.Fragment>
  );
}
```

With your form layout in place, you can start working on the handler function that signs the user in. An example looks like what you'd see in the snippet below.

```js
const handleSignIn = async (e) => {
  e.preventDefault();

  try {
    const response = await axios({
      method: "POST",
      url: authEndpoints.login,
      data: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    // get the status of the request from the backend and pass it into the
    // success state variable.
    // repeat the same thing for the error message in the catch block.
    setSignInSuccess(response.data.message);
    setSignInError("");
  } catch (error) {
    setSignInError(error.response.data.msg);
    setSignInSuccess("");
  }
};
```

With the handler successfully in place. Next step would be to conditionally render the modals. Take a look at how below.

```jsx
export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signInSuccess, setSignInSuccess] = React.useState();
  const [signInError, setSignInError] = React.useState();

  return (
    <React.Fragment>
      {signInError ? <Status message={signInError} status="error" /> : null}
      {signInSuccess ? <Status message={signInSuccess} /> : null}
      <form onSubmit={handleSignIn}>
        <p>sign in</p>
        ...rest of the form layout
      </form>
    </React.Fragment>
  );
}
```

## Want to contribute?

Checkout the [contributing guide](CONTRIBUTING.md) on how to go about that.
