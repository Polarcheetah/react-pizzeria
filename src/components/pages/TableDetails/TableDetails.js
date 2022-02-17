import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTableParams } from '../../../redux/tablesRedux';
import DoubleInput from '../../common/DoubleInput/DoubleInput';
import Select from '../../common/Select/Select';

const TableDetails = () => {
  const { tableId } = useParams();
  const tableParams = useSelector(({ tables }) =>
    getTableParams({ tables }, tableId)
  );

  const [status, setStatus] = useState(`${tableParams.status}`);
  const [peopleAmount, setPeopleAmount] = useState(
    `${tableParams.peopleAmount}`
  );
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    `${tableParams.maxPeopleAmount}`
  );
  const [bill, setBill] = useState(`${tableParams.bill}`);

  return (
    <div>
      <h1 className='mb-4'>Table {tableId}</h1>
      <Form>
        <Select state={status} setState={setStatus} />
        <DoubleInput />
      </Form>
    </div>
  );
};

export default TableDetails;
