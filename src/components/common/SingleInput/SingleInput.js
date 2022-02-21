import styles from './SingleInput.module.scss';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SingleInput = ({ bill, setBill }) => {
  return (
    <Form.Group className='d-flex align-items-center mt-4'>
      <Form.Label className='me-5 mb-0 fw-bold'>Bill:</Form.Label>
      <Form.Text className='mx-2 fs-6'>$</Form.Text>
      <Form.Control
        as='input'
        type='text'
        className={styles.singleInput}
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </Form.Group>
  );
};

SingleInput.propTypes = {
  bill: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setBill: PropTypes.func.isRequired,
};

export default SingleInput;
