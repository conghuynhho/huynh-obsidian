

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
- [x] Error handling
	- [x] store errorCode in store
	- [x] store isShowError modal
	- [x] error message
	- [x] consider which error to disable coupon
- [x] Disable coupon if not in min price to use.
	- [x] Correct using value get from api
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

## **Integration**

 - [x] Get list coupons
	- [x] only get on enter page
 - [x] Select coupon
 - [x] Change coupon

Saved code for later use (but no use anymore)
```tsx
ele.style.top = `${Math.min(top, viewportHeight - eleRect.height - 20)}px`  
ele.style.left = `${Math.min(left, viewportWidth - eleRect.width - 20)}px`
```

### Some test case

- Add expired coupon
- Add not valid coupon
- Remove coupon

## SQL script
```sql
### Coupon

#Update
UPDATE master.user_limited_coupons
set ended_at = now() + 40000, user_id = 162563
WHERE id = 8;


UPDATE privacy.products
SET reserved_end_at = CONCAT(CURDATE(), ' ', TIME(NOW() + INTERVAL 60 SECOND))
WHERE id = 40144;

UPDATE privacy.products
set reserved_end_at = now() + 60000
WHERE id = 44647;

UPDATE privacy.products
SET reserved_end_at = CONCAT(CURDATE(), ' ', TIME(NOW() + INTERVAL 60 SECOND))
WHERE id = 40144;


###Select
select id, reserved_end_at from privacy.products where type_id = 14;

select * from user_limited_coupon_types;
select * from product_limited_coupons;

select * from master.product_coupons;

select * from user_limited_coupons where user_id = 162563;
select id, reserved_end_at from privacy.products where type_id = 14;
SELECT * from master.user_limited_coupons where user_id = 162563;
select * FROM master.user_limited_coupons WHERE is_valid = 1 AND user_limited_coupon_type_id =3 ORDER by id DESC;
```

## Refactor & remains after dev

**Sheet need to translate**
- [ ] https://docs.google.com/spreadsheets/d/1mwq0fC6dAmf2-oGvee1IvWHFImG2ee0YI1iIVnALVZ4/edit#gid=71805319
- [ ] https://docs.google.com/spreadsheets/d/1n_w4_oOPId9RePjnEg6eHmC3vdEv2wyAazMrlOZBbcg/edit#gid=1667781120

**Refactor**
- [ ] Refactor component `<CustomModalCoupon />`
- [ ] remove redundant component Coupon `/Users/huynh/GGJ/surface.gogojungle.co.jp/components/cart/Coupon/index.vue`
- [ ] smooth reorder coupon animation.
