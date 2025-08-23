export const API_URL = 'https://68a752e6639c6a54e9a1b6b3.mockapi.io/v1/cars'
export const API_ITEMS_PER_PAGE_LIMIT = 12

export function createUrl(page: number | string, limit: number | string = API_ITEMS_PER_PAGE_LIMIT): string {
    const urlObject = new URL(API_URL)
    urlObject.searchParams.set('limit', `${limit}`)
    urlObject.searchParams.set('page', `${page}`)

    return urlObject.toString()
}