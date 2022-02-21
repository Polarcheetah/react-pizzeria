import { Form } from 'react-bootstrap';
import styles from './Select.module.scss';
import PropTypes from 'prop-types';

const Select = ({ status, setStatus }) => {
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
          <option key={tableStatus} value={tableStatus}>
            {tableStatus}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

Select.propTypes = {
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default Select;
