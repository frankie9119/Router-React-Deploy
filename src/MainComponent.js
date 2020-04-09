import React from "react";
import { Link } from "react-router-dom";

const MainComponent = () => {
    return (
      <div className="App">
             <ul>
            <li>
              <Link to="/CoachingComponent">coaching</Link>
            </li>
            <li>
              <Link to="/ChanteuseComponent">chanteuse</Link>
            </li>

          </ul>             
      </div>
    );
  };
  
  export default MainComponent;