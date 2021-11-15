import {SORTBY} from './../../constants';
import {AppContext} from './../../Contexts/AppContext';

import React, {useContext} from 'react';

function Sorting() {
  const {sortBy, setSortBy} = useContext(AppContext);

  const sort = (key) => {
    if (key === SORTBY.RECENTS) {
      setSortBy(sortBy === SORTBY.RECENTS ? SORTBY.NONE : SORTBY.RECENTS);
    } else {
      setSortBy(sortBy === SORTBY.LIKES ? SORTBY.NONE : SORTBY.LIKES);
    }
  };

  return (
    <div className="sortbyLabels d-flex mb-1">
      <span>SORT BY:</span>
      <div className="d-flex sortbyItem">
        <span
          onClick={() => {
            sort(SORTBY.RECENTS);
          }}
          className={`hsort ${sortBy === SORTBY.RECENTS ? 'fw-bold' : ''}`}
        >
          Most Recent
        </span>
        <span
          onClick={() => {
            sort(SORTBY.LIKES);
          }}
          className={`hsort ${sortBy === SORTBY.LIKES ? 'fw-bold' : ''}`}
        >
          Most Liked
        </span>
      </div>
    </div>
  );
}

export default Sorting;
