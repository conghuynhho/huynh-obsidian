

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
- Refactor component `<CustomModalCoupon />`
- Correct position tooltip.
- add i18n
- [x] hide coupon if not logged in
- add debounce and processing selectCoupon
- remove component Coupon `/Users/huynh/GGJ/surface.gogojungle.co.jp/components/cart/Coupon/index.vue`
- centralize `gtag` script
- [x] selected coupon always on top
- [ ] smooth reorder coupon animation.

https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd


**Integration**

 - [x] Get list coupons
	- [x] only get on enter page
 - [x] Select coupon
 - [x] Change coupon

