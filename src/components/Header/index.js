import { useTableInfo } from 'contexts/TableContext';
import { ALL, REGIONS, TABLE_HEADER } from 'constants/index.js';

import "components/Header/styles.scss";

const Header = () => {
  const { searchQuery, setSearchQuery, sortByDataKey, handleRegionSelection } = useTableInfo();

  return (
    <div>
      <h2>Filter</h2>
      <div className="header-content">
        <div className="left-side">
          <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search"
                 className="search" />
          <select onChange={e => handleRegionSelection(e.target.value)} name="region" id="region">
            <option value={ALL}>All</option>
            {
              REGIONS.map(({ dataKey, title }) => <option key={dataKey} value={title}>{title}</option>)
            }
          </select>
        </div>
        <select onChange={e => sortByDataKey(e.target.value)} name="population" id="population">
          {
            TABLE_HEADER
              .filter(({ isSortable }) => isSortable)
              .map(({ dataKey }) => <option key={dataKey} value={dataKey}>Sort by {dataKey}</option>)
          }
        </select>
      </div>
    </div>
  );
};

export default Header;
