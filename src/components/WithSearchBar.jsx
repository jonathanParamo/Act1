import { useState } from "react";
import SearchBar from "./SearchBar";

export const WithSearchBar = ( Component, data, keys) => {
  return function () {
    const [query, setQuery] = useState("");
    const search = (dataSearch) => {
      return dataSearch.filter((item) =>
        keys.some((key) =>
          item[key].toLowerCase().includes(query))
      )
    }

    return (
      data && (
        <div className="mt-3 flex flex-col justify-center items-center">
          <SearchBar setQuery={setQuery} />
          <Component dataList={search(data)} />
        </div>
      )
    )
  }

}
