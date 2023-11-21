import "./FilterTags.scss";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
import { addFilter } from "../../../redux/actions/products.action";

import { AiOutlineClose } from "react-icons/ai";
import { getSelectedFilters } from "../../../utils/filterUtility";

export default function FilterTags() {
  const { filters } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const renderFilterTags = () => {
    const selectedFilters = getSelectedFilters(filters);
    if (selectedFilters.length >= 2) {
      selectedFilters.push({ name: "Clear All" });
    }

    return selectedFilters.map((mapValue, index) => (
      <Button key={index} className="tags-btn">
        <span className="tag-name">{mapValue.name}</span>
        <span className="tag-close" data-testid="close-tag">
          <AiOutlineClose
            onClick={() => closeTag(mapValue.category, mapValue.name)}
          />
        </span>
      </Button>
    ));
  };
  const closeTag = (category, name) => {
    if (name === "Clear All") {
      for (let [, filterValue] of Object.entries(filters)) {
        for (let value of filterValue) {
          value.isApply = false;
        }
      }
    } else {
      for (let [key, filterValue] of Object.entries(filters)) {
        if (key === category)
          for (let value of filterValue) {
            if (value.name === name) {
              value.isApply = false;
            }
          }
      }
    }

    dispatch(addFilter(filters));
  };

  return (
    <>
      <div className="tags">{renderFilterTags()}</div>
    </>
  );
}
