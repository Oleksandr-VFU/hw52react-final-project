import { ProductInterface } from "../types/Product.interface"
import { SelectOptionInterface } from "../types/common"

export const CAR_CATEGORIES: SelectOptionInterface[] = [
    { value: 'Coupe', text: 'Купе' },
    { value: 'Electric', text: 'Електричний' },
    { value: 'Hatchback', text: 'Хетчбек' },
    { value: 'Pickup', text: 'Пікап' },
    { value: 'Sedan', text: 'Седан' },
    { value: 'SUV', text: 'Позашляховик' },
    { value: 'Van', text: 'Фургон' }
]

export const INITIAL_CAR: Partial<ProductInterface> = {
    name: 'Tesla Model S Plaid',
    description: 'Електричний седан з потужністю понад 1000 к.с. і автономністю 628 км.',
    price: 129990,
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
    category: 'Electric'
}

export const SORT_BY_LIST: SelectOptionInterface[] = [
    { value: '', text: 'Без сортування' },
    { value: 'name', text: 'Назвою' },
    { value: 'price', text: 'Ціною' },
    { value: 'category', text: 'Категорією' }
]

export const ORDER_LIST: SelectOptionInterface[] = [
    { value: '', text: 'Без сортування' },
    { value: 'asc', text: 'По зростанню' },
    { value: 'desc', text: 'По спаданню' }
]
