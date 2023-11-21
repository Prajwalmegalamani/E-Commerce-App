import { getSelectedFilters, getFilterResult } from "../filterUtility";
import {MOCK_PRODUCTS} from '../../mocks/products.mock';

test("Should get selected filters", () => {
  let filters = {
    brand: [
      { name: "Apple", isApply: true },
      { name: "Samsung", isApply: false },
    ],
  };
  expect(getSelectedFilters(filters)).toEqual([
    { category: "brand", name: "Apple", isApply: true },
  ]);
});

describe( "getFilterResult function", ()=>{
  test("filter by brand", () => {
    let selected = [{ category: "brand", name: "Apple" }]
    let data = { products : MOCK_PRODUCTS }
  
    expect( getFilterResult(selected, data) ).toEqual([
      MOCK_PRODUCTS[0], MOCK_PRODUCTS[1]
    ])
  })

  test("filter by rating", () => {
    let selected = [{ category: "rating", name: "4" }]
    let data = { products : MOCK_PRODUCTS }
  
    expect( getFilterResult(selected, data) ).toEqual(MOCK_PRODUCTS)
  })

  test("filter by discount percentage", () => {
    let selected = [{ category: "discountPercentage", name: "10%" }]
    let data = { products : MOCK_PRODUCTS }
  
    expect( getFilterResult(selected, data) ).toEqual([])
  })

  test("filter by price range", () => {
    let selected = [{ category: "price", name: "$10-$100", start: 10, end: 100 }]
    let data = { products : MOCK_PRODUCTS }
  
    expect( getFilterResult(selected, data) ).toEqual([])
  })
  
} )


