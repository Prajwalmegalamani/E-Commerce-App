export const getSelectedFilters = (filters) => {
  let selected = [];
  for (let [key, cateogryFilter] of Object.entries(filters)) {
    for (let value of cateogryFilter) {
      if (value.isApply) {
        selected.push({...value, category: key, name: value.name });
      }
    }
  }
  return selected;
};

export const getFilterResult = (selected, data) => {
  
  let result = [];
  selected.forEach((filter) => {
    let filteredProducts = [];
    switch( filter.category ) {
      case "brand" :
        filteredProducts = data.products?.filter(
          (product) => product.brand.toLowerCase() === filter.name.toLowerCase()
        );
        break;
      case "rating" :
        filteredProducts = data.products?.filter(
          (product) => product.rating >= filter.name
        );
        break;
      case "discountPercentage" :
        filteredProducts = data.products?.filter(
          (product) =>
            product.discountPercentage <=
            filter.name.substring(0, filter.name.length - 1)
        );
        break;
      case "price" :
          filteredProducts = data.products?.filter(
            (product) =>
              filter.end
              ? product.price >= filter.start && product.price < filter.end
              : product.price >= filter.start  
        );
        break;
      default:
        break;
    }
    
    result = result.length
      ? [...result, ...filteredProducts]
      : filteredProducts;
  });

  result = result.filter(
    (value, index, self) =>
      index ===
      self.findIndex((temp) => temp.id === value.id )
  );
  return result;
}
