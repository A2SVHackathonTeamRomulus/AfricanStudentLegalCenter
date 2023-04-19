import React from "react";

interface Props {
  onSearch: (searchValue: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = event.currentTarget.search.value; // Update this line
    onSearch(searchValue);
  };

  return (
    <form className="d-flex login-form" onSubmit={handleSearch} role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
