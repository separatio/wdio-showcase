export interface LimitedProduct {
  brand: string
  classificationClassName: string
  'Geschenk für': string
  gender: string
}

export const limited: LimitedProduct[] = [
  {
    brand: 'Brand1',
    classificationClassName: 'Type1',
    'Geschenk für': 'GiftFor1',
    gender: 'ForWhom1',
  },
  {
    brand: 'Brand2',
    classificationClassName: 'Type2',
    'Geschenk für': 'GiftFor2',
    gender: 'ForWhom2',
  },
]
