

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
- Bugs GogoModal when initial `isShow = true`
- CouponItem
- CouponTooltip

- Change detail page
- Change empty cart page

