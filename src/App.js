import './App.css';
import DataCard from './components/DataCard';
import NavigationBar from './components/NavigationBar';
import ProfileCard from './components/ProfileCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

function App() {

  return (
    <div>
      <NavigationBar style={{ height: '100vh' }} />
      <Card style={{ marginLeft: 'calc(100vh/8 + 5px)', borderColor: 'white' }}   >
        <Row >
          <Col xs={12} lg={4}  ><span  ><ProfileCard /></span></Col>
          <Col xs={12} lg={8}  ><span ><DataCard /></span></Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
