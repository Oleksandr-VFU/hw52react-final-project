import { ProductInterface } from "../types/Product.interface"

export const CAR_CATEGORIES: string[] = ['Coupe', 'Electric', 'Hatchback', 'Pickup', 'Sedan', 'SUV', 'Van']

export const INITIAL_CAR: Partial<ProductInterface> = {
    name: 'Tesla Model S Plaid',
    description: 'Електричний седан з потужністю понад 1000 к.с. і автономністю 628 км.',
    price: 129990,
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
    category: 'Electric'
}