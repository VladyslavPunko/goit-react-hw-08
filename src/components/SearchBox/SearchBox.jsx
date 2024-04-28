import css from "./SearchBox.module.css";

import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={css.label}>
      Finde contacts by name
      <input
        placeholder="Search..."
        value={filters}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default SearchBox;
