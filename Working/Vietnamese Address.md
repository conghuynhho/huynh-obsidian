
### Spec
- Apply only for vi language.
- Keep all these old logic for ja.
- UI combo box
- Get list district, provinces, ...


### Solution
- First get language from 
```js
const {locale} = useI18nContext()
```
- The component will handle render correct address form for each `lang` will be `AddressGroupWrapper.tsx`
- The key of the form will be the same for all lang (I think) -> `need to confirm`
```ts
address1: string  
address2: string  
address3: string  //
prefectureId: number | string // provinces or city
```

---
### Doing

- [x] Fetch list provinces
- [x] Conditional render correct `AddressGroup` component base on `locale`
- [x] Creating `AutoComplete` component to reuse for `countryId` `nationalityId` and `prefectureId` 
- [ ] Handle on change Address input
- [ ] Create bottom sheet UI on mobile
- [ ] Integrate API
