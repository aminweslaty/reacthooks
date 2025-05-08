import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div style={{ margin: 20 }}>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
      type="range"
      min="0"
      max="10"
      step="0.1"
      value={ratingFilter}
      onChange={(e) => setRatingFilter(e.target.value)}
      />
<span style={{ marginLeft: '10px' }}>{ratingFilter || 0}</span>

    </div>
  );
};

export default Filter;
