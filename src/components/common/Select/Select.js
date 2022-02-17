import { Form } from 'react-bootstrap';
import styles from './Select.module.scss';

const Select = ({ state, setState }) => {
  return (
    <Form.Group className='d-flex align-items-center'>
      <Form.Label className='me-4 mb-0 fw-bold'>Status: </Form.Label>
      <Form.Select
        className={styles.inputSelect}
        onChange={(e) => setState(e.target.value)}
      >
        <option>{state}</option>
        <option value='Free'>Free</option>
        <option value='Busy'>Busy</option>
        <option value='Reserved'>Reserved</option>
        <option value='Cleaning'>Cleaning</option>
      </Form.Select>
    </Form.Group>
  );
};

export default Select;
