export interface NewProducts {
  classificationClassName: string
  gender: string,
  amount: number
}

export const newProducts: NewProducts[] = [
  {
    classificationClassName: 'Gutschein im Wert von 10-250 €',
    gender: 'Unisex',
    amount: 2,
  },
  { classificationClassName: 'Deodorant', gender: 'Männlich', amount: 5 },
]
