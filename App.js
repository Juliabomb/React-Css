// import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header';
import Item from './Components/Body/Item';
import ItemList from './Components/Body/ItemList';
import Seurch from './Components/Body/Seurch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function App() {
  return (
    <>



<Container fluid>
  <Row>
    <Col  >
     <Header/> 
    </Col>
  </Row>

  

  <Row>
    <Col xs={3} >
     <Seurch/>
    </Col>
  
      <Col >
        <Container >
          <Item/>
        </Container> 
      </Col>
    </Row>
 

    <Row>
      <Col xs={3} >
        <ItemList/>
      </Col>
    </Row>

  </Container>
  
    

  









    </>
  );
}

export default App;
