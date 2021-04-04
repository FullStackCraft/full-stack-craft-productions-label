# react-use-please-stay

A classic JQuery functionality which brought animated title when you left a browser tab open but weren't on the page - ported to a React hook!

Install and save this as a dependency:

```bash
npm install --save react-use-please-stay
```

Import with:

```tsx
import { usePleaseStay } from 'react-use-please-stay'
```

Minimal example, passing the single required argument `messages`:

```tsx
function App() {
  usePleaseStay(["Don't go!", "We have React hooks!"])
  return (
    <>
      <h1>usePleaseStay()</h1>
      <p>An example of the usePleaseStay hook. Leaving this browser tab open, navigate or open another tab and watch the magic happen!</p>
    </>
  );
}

export default App;
```

Iterate through multiple messages:

```tsx
usePleaseStay(["Don't go!", "We have React hooks!", "We're sad!", "Come back!"])
```

Specify a slower iteration time in milliseconds (default is 1000):

```tsx
usePleaseStay(["Don't go!", "We have React hooks!", "We're sad!", "Come back!"], 3000)
```

Optionally add in a favicon path to alternate to that favicon each time a message changes:

```tsx
usePleaseStay(["Don't go!", "We have React hooks!", "We're sad!", "Come back!"], 3000, "https://redux.js.org/img/favicon/favicon.ico")
```

That's about it for all possible configurations. Just remember that since this hook interacts with `document.title` it should only be called only **once** in your app, for example in a layout or `App` component - otherwise the title animation will not be smooth and things could get strange.