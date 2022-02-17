import { Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TableCard = ({ tableId, tableStatus }) => {
  return (
    <div>
      <Row>
        <Col className='d-flex justify-content-start align-items-end'>
          <h3 className='mb-0'>Table {tableId}</h3>
          <p className='mt-2 ms-4 mb-0'>
            <span className='fw-bolder'>Status: </span>
            {tableStatus}
          </p>
        </Col>
        <Col className='d-flex justify-content-end'>
          <NavLink to={`/tables/${tableId}`}>
            <Button variant='primary'>Show more</Button>
          </NavLink>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
export default TableCard;
