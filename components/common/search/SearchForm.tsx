"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="mx-auto flex max-w-sm items-center">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FiSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search branch name..."
          required
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="ml-2 rounded-lg border border-info bg-primary p-2.5 text-sm font-medium text-white hover:bg-info focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-info"
      >
        <FiSearch className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
