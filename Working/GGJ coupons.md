

## Prototype

- animation with pure css
	- modal enter & leave
	- hover tooltip
	- stack animation with coupon item when selected
- Bottom sheet
- Hover tooltip



**Components structure**
- Tooltip and bottom sheet is the same. (mobile and desktop)
- Coupons items


```dirtree
- /CouponModal
	- CouponList
		- CouponItem
		- CouponItem
		- ...
	- CouponDetailBottomSheet(Mobile)
		- CouponItem
	- CouponDetailTooltip(Desktop)
		- CouponItem
	- ProcessButton
```


- Edit bottom button in product detail page.

Remains:
- [x] Bugs GogoModal when initial `isShow = true`
- [x] CouponItem
- [x] CouponTooltip
- [x] Coupon Bottomsheet

- Change detail page
- [x] Change empty cart page


Refactor & Todo:
- [ ] Refactor component `<CustomModalCoupon />`
- [ ] remove redundant component Coupon `/Users/huynh/GGJ/surface.gogojungle.co.jp/components/cart/Coupon/index.vue`
- [ ] smooth reorder coupon animation.
- [ ] Error handling
	- [ ] store errorCode in store
	- [ ] store isShowError modal
	- [ ] if has errorCode refetch the coupons.
- [ ] Disable coupon if not in min price to use.
- [x] implement and centralize `gtag` script
- [x] Correct position tooltip.
	- [x] make mouse leave from the target as smoothly as possible
	- [x] position more UX
	- [x] setPosition for tooltip every screen size change
- [x] add i18n
- [x] hide coupon if not logged in
- [x] add debounce and processing selectCoupon
- [x] selected coupon always on top
- [x] Request takes too long to add coupon

https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd
https://dev-bay.com/popover-on-hover-in-vuejs/

**Integration**

 - [x] Get list coupons
	- [x] only get on enter page
 - [x] Select coupon
 - [x] Change coupon

**Sheet need to translate**
- [ ] https://docs.google.com/spreadsheets/d/1mwq0fC6dAmf2-oGvee1IvWHFImG2ee0YI1iIVnALVZ4/edit#gid=71805319
- [ ] https://docs.google.com/spreadsheets/d/1n_w4_oOPId9RePjnEg6eHmC3vdEv2wyAazMrlOZBbcg/edit#gid=1667781120


```tsx
ele.style.top = `${Math.min(top, viewportHeight - eleRect.height - 20)}px`  
ele.style.left = `${Math.min(left, viewportWidth - eleRect.width - 20)}px`
```