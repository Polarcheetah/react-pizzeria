import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTables, getAllTables } from '../../../redux/tablesRedux';
import TableCard from '../../features/TableCard/TableCard';

const Home = () => {
  const tables = useSelector(getAllTables);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <h1 className='mb-4'>All tables</h1>
      <ul className='ps-0'>
        {tables.map((table) => (
          <TableCard
            key={table.id}
            tableId={table.id}
            tableStatus={table.status}
          />
        ))}
      </ul>
    </div>
  );
};
export default Home;
