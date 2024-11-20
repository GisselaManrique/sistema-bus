/*import React from "react";
import Buses from "./componentes/Buses";
import DetalleBus from "./componentes/DetalleBus";


function App() {
  return (
    <div className="App">
      <DetalleBus />
    </div>
  );
}


export default App;*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetalleBus from "./componentes/DetalleBus";
import Buses from "./componentes/DetalleBus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bus" element={<Buses />}/>
        <Route path="/bus/:id" element={<DetalleBus />} /> 
      </Routes>
    </Router>
  );
}

export default App;








