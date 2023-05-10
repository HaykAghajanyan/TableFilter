import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { ALL, POPULATION, TABLE_HEADER } from 'constants/index.js';

const TableContext = createContext(null);

const TableProvider = ({ children }) => {
  const [sortKey, setSortKey] = useState(POPULATION);
  const [activeRegion, setActiveRegion] = useState(ALL);
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent')
      .then(res => res.json())
      .then(res => setCountries(res))
      .catch(err => console.error('error occurred while fetching countries', err));
  }, []);

  const sortByDataKey = useCallback(key => {
    setSortKey(key);
  }, []);

  const handleRegionSelection = useCallback(region => {
    setActiveRegion(region);
  }, []);

  const deleteCountry = useCallback(name => {
    setCountries(prev => prev.filter(country => country.name.common !== name));
  }, []);

  const rows = useMemo(() => {
    if (!countries.length) return [];

    const lowerCaseQuery = searchQuery.toLowerCase();

    return countries
      .filter(({ region, subregion, name }) => {
        const rightRegion = subregion.includes(activeRegion) || region.includes(activeRegion) || activeRegion === ALL;

        return name.common.toLowerCase().includes(lowerCaseQuery) && rightRegion;
      })
      .sort((a, b) => b[sortKey] - a[sortKey])
      .map(({ area, region, name, flags, population }) => ({
        area,
        region,
        population,
        flag: flags.png,
        name: name.common,
      }));
  }, [countries, searchQuery, sortKey, activeRegion]);


  return (
    <TableContext.Provider value={{
      rows,
      searchQuery,
      deleteCountry,
      sortByDataKey,
      setSearchQuery,
      columns: TABLE_HEADER,
      handleRegionSelection,
    }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableInfo = () => useContext(TableContext);

export default TableProvider;
