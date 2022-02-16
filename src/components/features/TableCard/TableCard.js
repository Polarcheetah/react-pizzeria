import { Button, Col, Row } from 'react-bootstrap';

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
          <Button variant='primary'>Show more</Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
export default TableCard;
