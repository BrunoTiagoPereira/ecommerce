export interface ProductsProps{
    id:number,
    description:string,
    category:string,
    title:string,
    images:Array<string>,
    avaiableSizes:Array<string>,
    selectedSize:string
}

export interface CategoriesProps{
  id:number,
  description:string,
}

