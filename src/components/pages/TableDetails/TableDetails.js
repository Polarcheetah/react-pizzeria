import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchTables,
  getTableParams,
  modifyTablesRequest,
} from '../../../redux/tablesRedux';
import DoubleInput from '../../common/DoubleInput/DoubleInput';
import Select from '../../common/Select/Select';
import SingleInput from '../../common/SingleInput/SingleInput';

const TableDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  const { tableId } = useParams();
  const tableParams = useSelector(({ tables }) =>
    getTableParams({ tables }, tableId)
  );

  const { error, loading } = useSelector(({ tables }) => tables.status);

  const [status, setStatus] = useState('');

  const [peopleAmount, setPeopleAmount] = useState('');
  const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
  const [bill, setBill] = useState('');
  const [peopleAmountInputDisabled, setPeopleAmountInputDisabled] =
    useState(false);

  useEffect(() => {
    if (tableParams) {
      setStatus(tableParams.status);
      setPeopleAmount(tableParams.peopleAmount);
      setMaxPeopleAmount(tableParams.maxPeopleAmount);
      setBill(tableParams.bill);
    }
  }, [tableParams]);

  useEffect(() => {
    if (status === 'Cleaning' || status === 'Free') {
      setPeopleAmount(0);
      setPeopleAmountInputDisabled(true);
    } else {
      setPeopleAmountInputDisabled(false);
    }
    if (status !== 'Busy') {
      setBill(0);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTableParams = {
      id: tableId,
      status: status,
      peopleAmount: peopleAmount,
      maxPeopleAmount: maxPeopleAmount,
      bill: bill,
    };
    dispatch(modifyTablesRequest(newTableParams));
  };

  return (
    <div>
      <h1 className='mb-4'>Table {tableId}</h1>
      {loading && <p>Loading...</p>}
      {!loading && !error && tableParams?.status && (
        <Form>
          <Select status={tableParams?.status} setStatus={setStatus} />
          <DoubleInput
            peopleAmount={peopleAmount}
            setPeopleAmount={setPeopleAmount}
            maxPeopleAmount={maxPeopleAmount}
            setMaxPeopleAmount={setMaxPeopleAmount}
            inputDisabled={peopleAmountInputDisabled}
          />
          {status === 'Busy' && (
            <SingleInput bill={bill} setBill={setBill} status={status} />
          )}
          <Button onClick={handleSubmit} type='submit' className='mt-4'>
            Update
          </Button>
        </Form>
      )}
    </div>
  );
};

export default TableDetails;
