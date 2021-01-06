import * as React from "react";
import "./styles.css";
import Downshift from "downshift";

type Props = {
  who?: string;
  message?: string;
  renderMessage: (message: string) => React.ReactElement;
};

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

type TProps = {
  checked: boolean;
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

const locations = [
  {
    name: "Arizona",
    latlon: "1234.345",
  },
];

// Need to add a Elasticsearch api which pulls all data from
// various apis into a search index. Then build front end with Downshift
// which pings the api everytime typing in the search box is finished.
// to prevent too many queries use lodash.debounce

const App = () => {
  //const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <>
      <ThemeProvider>
        <Downshift>
          {(props) => {
            return <div>
              {JSON.stringify(props)}
            </div>;
          }}
        </Downshift>
      </ThemeProvider>
    </>
  );
};

export { App };
