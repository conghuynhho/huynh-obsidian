
## Specification
- Apply lazy fetch for `<img>` inside `msg.content`
- Reuse component `LazyImg.vue`
- `msg.content` is a html string which contain text, img, file
- Link backlog: [OAM-102485](https://gogojungle.backlog.jp/view/OAM-102485)

## Issues
- Can not apply `LazyImg.vue` because `msg.content` is html string.
- Currently using `v-html` to bind the html string into the DOM.

## Solution
~~1. Change API to return the html string with component `LazyImg`. Then compile the response html string~~
~~2. Parse the HTML then replace `img` of html string to the component~~
~~3. Not using component any more. Find another way in JS to interfere to the DOM and make it lazy load image.~~

## Final solution:
- Base on the workflow of component `LazyImg` we apply it to all the `img` tag inside of content message.

- Step 1 Before mount: 
	- We parse it out and then find the img tag using `querySelector` 
	- Store the original src and change the src to loading image.
- Step 2 Mounted: 
	- Query all the `img` tag in the DOM of current message.
	- Apply `IntersectionObserver` for every founded images.
	- Store all timeoutIds in Vue state.
- Step 3 Before destroy:
	- Clear all timeoutIds.


## Fix requests:
- [ ] Bind the dom after parse. Dont use v-html anymore.
- [x] Try to using parse inside `created`
- [x] Fix preview image.

