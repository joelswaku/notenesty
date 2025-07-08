// components/SearchFilter.jsx
import React from 'react';
import { useSearchStore } from '../store/searchStore';

function SearchFilter() {
  const {
    searchTerm,
    setSearchTerm,
    fromDate,
    toDate,
    setDateRange,
    searchNotes,
    loading,
  } = useSearchStore();

  const handleSearch = (e) => {
    e.preventDefault();
    searchNotes();
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4 bg-white p-4 shadow rounded">
      <input
        type="text"
        placeholder="Search by keyword..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full"
      />
      <div className="flex gap-4">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setDateRange(e.target.value, toDate)}
          className="input input-bordered w-full"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setDateRange(fromDate, e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchFilter;
