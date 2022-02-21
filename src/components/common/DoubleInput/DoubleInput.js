import { Form } from 'react-bootstrap';
import styles from './DoubleInput.module.scss';
import PropTypes from 'prop-types';

const DoubleInput = ({
  peopleAmount,
  setPeopleAmount,
  maxPeopleAmount,
  setMaxPeopleAmount,
  inputDisabled,
}) => {
  const validateInput1 = (value) => {
    value = parseInt(value);
    if (value.isNaN && value !== '') {
      return null;
    } else {
      if (value < 0) return 0;
      if (value > maxPeopleAmount) return maxPeopleAmount;
      if (value >= 0 && value <= maxPeopleAmount) return setPeopleAmount(value);
    }
  };

  const validateInput2 = (value) => {
    value = parseInt(value);
    if (value.isNaN && value !== '') {
      return null;
    } else {
      if (value < 0) return 0;
      if (value > 10) return 10;
      if (value >= 0 && value <= 10) {
        if (value < peopleAmount) setPeopleAmount(value);
        return setMaxPeopleAmount(value);
      }
    }
  };

  return (
    <Form.Group className='d-flex align-items-center mt-4'>
      <Form.Label className='me-4 mb-0 fw-bold'>People: </Form.Label>
      <Form.Control
        as='input'
        type='text'
        className={styles.singleInput}
        value={peopleAmount}
        onChange={(e) => validateInput1(e.target.value)}
        disabled={inputDisabled}
      />
      <Form.Text className='mx-2 fs-5'>/</Form.Text>
      <Form.Control
        as='input'
        type='text'
        className={styles.singleInput}
        value={maxPeopleAmount}
        onChange={(e) => validateInput2(e.target.value)}
      />
    </Form.Group>
  );
};

DoubleInput.propTypes = {
  peopleAmount: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setPeopleAmount: PropTypes.func.isRequired,
  maxPeopleAmount: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setMaxPeopleAmount: PropTypes.func.isRequired,
  inputDisabled: PropTypes.bool.isRequired,
};

export default DoubleInput;
