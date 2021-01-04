
import './App.css';
import TopMenu from './TopMenu';
import Footer from './Footer';
import Main from './Main';
import SideMenu from './SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <TopMenu />
      <Row>
        <Col xs="7">
          <Main />
        </Col>
        <Col>
          <SideMenu />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
