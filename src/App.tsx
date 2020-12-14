import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        Create a input with autocomplete and hits an google location api with
        lazy loading for locations, once selected outputs it below and then uses
        the location to get the weather. and also displays it below. later can
        add descriptions pulled from database using graphqll and apollo from a
        node api running graphql yoga etc and postgrssql This would be my hobby
        project.
      </div>
      <div className='input_location'>
      <input  type="text" placeholder='type in a location'/>
      </div>
    </>
  );
}
