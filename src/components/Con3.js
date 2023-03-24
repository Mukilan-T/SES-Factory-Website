import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'
import './styles/con3.css'
import im1 from './ceo.gif'
import im2 from './business.jpeg'
import im3 from './employees.jpeg'
import im4 from './pan.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
library.add(faBuilding);
function Con3() {
  return (
    <Row>

    <Col md={2}>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
    <Card.Img className="c1" variant="top" src={im1}/>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Name of CEO</Card.Subtitle>
        <Card.Text>
         Mr.M.Ganesan
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
    <Card.Img className="c1" variant="top" src={im2}/>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Nature of Business</Card.Subtitle>
        <Card.Text>
         Manufacturer & Supplier
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
    <Card.Img className="c1" variant="top" src={im3}/>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Number of Employees</Card.Subtitle>
        <Card.Text>
         30
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
    <Card.Img className="c1" variant="top" src={im4}/>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Market Covered</Card.Subtitle>
        <Card.Text>
         Pan India
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    </Col>

    </Row>
  );
}

export default Con3;