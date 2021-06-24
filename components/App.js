import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './App.css';
import Addritem from './Components/addrItem';

// import My from './components/My'
// import Board from './components/board'
import Header from './components/header'
import Address from './components/address'

function App() {
  return (
    <>
    <Row>
      <Header name="The Address App" />
      <Address />
      {/* <Col><My/></Col> */}
      </Row>
      {/* <Addritem/> */}
    </>
  );
}

export default App;
