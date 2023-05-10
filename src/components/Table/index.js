import RemoveElement from "components/RemoveElement";
import { useTableInfo } from 'contexts/TableContext';

import "components/Table/styles.scss";

const Table = () => {
  const { rows, columns, deleteCountry } = useTableInfo();

  return (
    <div>
      <table className="countries">
        <thead>
        <tr>
          {
            columns.map(({ title, dataKey }) => <th key={dataKey}>{title}</th>)
          }
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          rows.map(({ name, region, population, area, flag }) => (
            <tr key={name} className="info">
              <td>{name}</td>
              <td>{region}</td>
              <td>{population}</td>
              <td>{area}</td>
              <td><img alt="not found" className="countries-flag" src={flag} /></td>
              <td onClick={() => deleteCountry(name)}>
                <RemoveElement />
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
