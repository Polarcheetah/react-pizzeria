import { Form } from 'react-bootstrap';
import styles from './Select.module.scss';

const Select = ({ status, setStatus }) => {
  console.log('new render of Select');

  const stateCases = ['Free', 'Busy', 'Reserved', 'Cleaning'];

  return (
    <Form.Group className='d-flex align-items-center'>
      <Form.Label className='me-4 mb-0 fw-bold'>Status: </Form.Label>
      <Form.Select
        className={styles.inputSelect}
        onChange={(e) => setStatus(e.target.value)}
        defaultValue={status}
      >
        {stateCases.map((tableStatus) => (
          <option value={tableStatus}>{tableStatus}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default Select;
