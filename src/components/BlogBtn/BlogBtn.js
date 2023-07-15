import React from 'react';
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import "./BlogBtn.scss"
function App({children}) {
  return (
    <div className="BlogBtn">
        <h1 className="animated-heading">{children}</h1>
    </div>
  );
}

export default App;
