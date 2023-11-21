import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Field from "../../molecules/Field/Field";
import "./SearchPage.scss";
import debounce from "lodash.debounce";
import ProductsListingPage from "../ProductsListingPage";
import { SearchBtnIcon } from "../../../assets/icons/SearchBtnIcon";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);
  return (
    <div className=" search-text-container">
      <div className="container">
        <div className="search-icon-container">
          <SearchBtnIcon />
        </div>
        <Field
          autoFocus={true}
          id="search-input"
          className="search-input"
          label="Search products"
          placeholder="Search products"
          onChangeHandler={debouncedChangeHandler}
          inputType="search"
        />
      </div>

      <ProductsListingPage searchStr={search} loadedFromSearch={true} />
    </div>
  );
}
