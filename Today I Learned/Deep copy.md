[Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

## [Syntax](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#syntax)

```
structuredClone(value)
structuredClone(value, options)
```

Copy to Clipboard

### [Parameters](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#parameters)

`value`

The object to be cloned. This can be any [structured-cloneable type](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).

`options` Optional

An object with the following properties:

	`transfer`

An array of [transferable objects](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) that will be moved rather than cloned to the returned object.

### [Return value](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#return_value)

The returned value is a [deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy) of the original `value`.

### [Exceptions](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#exceptions)

`DataCloneError` [`DOMException`](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)

Thrown if any part of the input value is not serializable.