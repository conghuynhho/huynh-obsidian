
#  1. Prototype
## Done
- [x] Redesign PaidSucess and PaidFail.
- [x] Display required information
- [x] Create UI for Success
- [x] Create UI for Fail

[[Sketch VNPay Result| UI Sketch ]]


## Basic information
- Transaction number (mã giao dịch)
- Mã đơn hàng
- Price 
- Time 
- Bank name
- Card type
- Payment status
- Error Code

## Section 

1. Product info section
2. Transaction info section
3. Thank you section.

## Response VNPAY `payment-complete`

- Need a field to know it's VNPay response: `payId = 2`
- Need a field to know status: `thirdPartyData.status`
- Case payment `fail`: error message: map `errorCode` with sheet i18n

```ts
export interface PaymentCompleteType {
  product: {
    id: number,
    title: string,
    price: number,
    isSpecialDiscount: boolean,
    specialDiscountPrice?: number | null
    imageUrl: string
  }
  totalPrice: number | null,
  coupons: TCouponComplete[],
  paidOptions: Array<PaidOptionType>
  payId: number,
  sessionId: string,
  transactionId: number | null,
  thirdPartyData: VNPayInfoType
}

```

Need value for GUI VNPay result payment
```ts
interface VNPayInfoType {
	transferNumber: number,
	saleId: number,
	status: number,
	createdAtTime: number,
	bankName: string,
	cardType: string,
	errorCode?: string,
}
```

Possible payment status
```ts
export const PAYMENT_HISTORY_SKJ_RESPONSE_CODE = {
  success: 1,
  fail: 2,
  successAndRefund: 3,
  failAndRefund: 4,
}
```

# 2. Integration

### Integrate Strategy
- [x] Timeout ???  I need the value to know that I have to wait `payId=2 && thirdPartyData = undefined`
- [x] Loading icon ???
- [ ] Credit card -> VNPAY icon
	- [ ] Refactor this  ![[CleanShot 2023-06-02 at 16.09.04.png]]

- [x] disable banktransfer
- [x] typescript interface
- [x] Coupon display
- [x] Add toggle dropdown display detail `paidOptions` and `Coupons`
- [x] API return seller info of production


**Step 3**
- [x] Top section with `PaidIcon` and `Payment Message` 
- `ErrorBox` conditional display only for VNPAY
- `Invoice Box` or `Product box info`
- `Payment Info Box`  in this component already has mapping to display corresponding UI
- Footer

Conclusion: 
- Need to do something with Top Section 
- Also `Invoice Box` or `Product box info`

1. Top section
	- [x] Need to display correct ICON
	- [x] Text success or error


### Set timeout case VNPay pending

1. `TopSection` will receive props to render correct icon and text.
2. `Step3VNPay` will has useEffect and a timer for interval call api.


# Remains:

- [ ] Error message mapping through i18n
- [ ] Redirect 24 show toast cancel payment
- [ ] Correct timeout every 10s and stop after 5 times -> if not response -> show fail
- [ ] Pending screen show inquiry button
- [x] Fix spinner
- [x] Correct stepper
- [x] Button go to transaction
- [x] Handle redirect to Step 1 case User Cancel Payment
- [x] Style of stepper. 
- [x] Session Id
```tsx
export const ListSteps = [
  {
    step: Steps.Step1,
    label: 'step-1',
  },
  {
    step: Steps.Step2,
    label: 'step-2',
  },
  {
    step: Steps.Step3,
    label: 'step-3',
  },
]

```

## Centralize code for multiple language

### What currently has on `payment`

1. paymentSlice
2. UI components
3. Logic components
4. Serverside code
	- get lang
	- `csid ` -> get paymentInfo
	- `csid` -> get payment complete


```

```

