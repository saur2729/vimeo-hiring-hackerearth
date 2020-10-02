import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Landing from './components/Landing'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;