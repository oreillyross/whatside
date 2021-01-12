// @flow
import * as React from "react";
import "./styles.css";
import Downshift from "downshift";

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState("white");

  React.useEffect(() => {
    // normally comes from API, but hardcode for now
    setTheme("green");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


// Need to add a Elasticsearch api which pulls all data from
// various apis into a search index. Then build front end with Downshift
// which pings the api everytime typing in the search box is finished.
// to prevent too many queries use lodash.debounce

const App = () => {
  //const [state, dispatch] = React.useReducer(reducer, initialState)
  const searchRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (searchRef !== null && searchRef.current !== null) {
      searchRef.current.focus()
    }
  },[searchRef.current])

  return (
    <>
      <ThemeProvider>
        <Downshift>
          {(props) => {
            return <div>
              {JSON.stringify(props)}
              <div className='main'>

                <input ref={searchRef} type="search" name="search" id="search"/>
              </div>
              
            </div>;
          }}
        </Downshift>
      </ThemeProvider>
    </>
  );
};

export { App };
