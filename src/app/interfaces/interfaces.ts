export interface Collection {
  ownerId: string
  , totalCount: number
  , filteredCount: number
  , totalPrice: number
  , userId: number
  , items: Item[]
}

export interface Item {
  itemId: string
  , ownerId: string
  , x: number
  , y: number
}