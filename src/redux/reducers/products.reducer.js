import { PRODUCT_FILTERS } from "../../utils/constants";
import {
  ADD_FILTER,
  ADD_SORTBY,
  productActions,
  FILTERED_PRODUCTS,
} from "../action.type";

let initialState = {
  productCategories: [],
  isModalOpen: false,
  isUserLoggedIn: false,
  isLoading: false,
  products: {
    products: [],
    total: 0,
  },
  filters: PRODUCT_FILTERS,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          products: action.payload.isLoadMore
            ? [...state.products.products, ...action.payload?.result.products]
            : action.payload?.result.products,
          total: action.payload.result.total,
        },
      };
    case productActions.GET_SEARCHED_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          products: action.payload.isLoadMore
            ? [...state.products.products, ...action.payload?.result.products]
            : action.payload?.result.products,
          total: action.payload.result.total,
        },
      };
    case productActions.GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }

    case ADD_SORTBY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case FILTERED_PRODUCTS: {
      return {
        ...state,
        products: {
          ...state.products,
          products: action.payload,
          total: action.payload.length,
        },
    }
  }

    case productActions.RESET_PRODUCTS_FILTERS: {
      return {
        ...state,
        filters: PRODUCT_FILTERS,
      };
    }

    case productActions.GET_PRODUCT_CATEGORIES:
      return {
        ...state,
        productCategories: action.payload,
      };
    case productActions.SET_MODAL_STATE:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case productActions.SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
