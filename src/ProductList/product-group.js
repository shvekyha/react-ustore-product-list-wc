//import { Product } from './product';

export class ProductGroup {
    
  constructor(id, name, description, productList){
      this.id = id;
      this.name = name;
      this.description = description;
      this.productList = productList;
  }
}

export default ProductGroup;