import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Home from '../containers/Home/Home';
import Survey from '../containers/Survey/Survey';

function App({location}) {
  return (
    <Container fluid className="p-0">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/survey">
            <Survey/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
