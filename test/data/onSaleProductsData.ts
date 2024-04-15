export interface OnSaleProduct {
  brand: string
  classificationClassName: string
  gender: string
}

export const onSale: OnSaleProduct[] = [
  {
    brand: 'Brand1',
    classificationClassName: 'Type1',
    gender: 'ForWhom1',
  },
  {
    brand: 'Brand2',
    classificationClassName: 'Type2',
    gender: 'ForWhom2',
  },
]
