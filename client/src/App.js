import React from 'react'
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import PirateForm from './Components/PirateForm';
import Main from './Views/Main';
import UpdatePirate from './Views/UpdatePirate';
import Details from './Views/Details';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-yellow-500 p-5'>
        <Switch>
          {/* CREATE */}
          <Route exact path='/pirates/new'>
            <div className='text-center'>
              <h1 className="text-center text-4xl"> <b> Add Pirate </b> </h1>
              <Link to="/pirates" className="btn btn-primary mt-3">Crew Board</Link>
            </div>
            <PirateForm />
          </Route>

          {/* READ */}
          <Route exact path='/pirates'>
            <div className='text-center'>
              <h1 className="text-center text-4xl"> <b> Pirate Crew </b> </h1>
              <Link to="/pirates/new" className="btn btn-primary mt-3">Add Pirate</Link>
            </div>
            <Main />
          </Route>

          <Route exact path='/pirates/:id'>
            <div className="mx-auto text-center">
              <Link to="/pirates" className="btn btn-primary m-2 mx-auto">Crew Board</Link>
            </div>
            <Details />
          </Route>

          {/* UPDATE */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
