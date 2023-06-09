

## `useTransition`

This hook help update state and render UI not blocking JS run.

```jsx
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```

With above code `setTab` will be call inside `startTransition`


## `useDeferredValue`
Useful in case need the state has delay to render to UI.

React docs is very well explained about these.
