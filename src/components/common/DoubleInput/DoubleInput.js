import { Form } from 'react-bootstrap';
import styles from './DoubleInput.module.scss';

const DoubleInput = () => {
  return (
    <Form.Group className='d-flex align-items-center mt-4'>
      <Form.Label className='me-4 mb-0 fw-bold'>People: </Form.Label>
      <Form.Control as='input' type='text' className={styles.singleInput} />
      <Form.Text className='mx-2 fs-5'>/</Form.Text>
      <Form.Control as='input' type='text' className={styles.singleInput} />
    </Form.Group>
  );
};

export default DoubleInput;
