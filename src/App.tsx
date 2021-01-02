import * as React from "react";
import "./styles.css";

type Props = {
  who?: string;
  message?: string;
  renderMessage: (message: string) => React.ReactElement;
};


type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
} 


const TypedReact: React.FC<Props> = ({
  who = "roo",
  message,
  renderMessage,
}: Props) => {
  
  const { theme, setTheme } = useTheme()!

  return (
    <>
      <div style={{backgroundColor: theme}}>{who}</div>
      <div>{message && message}</div>
      <select name="theme" id="theme" value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
      <div>{renderMessage && message && renderMessage(message)}</div>
      <TypedCheck checked={true}>Inside checkbox</TypedCheck>
    </>
  );
};

type TProps = {
  checked: boolean;
};

const TypedCheck: React.FC<TProps> = ({ children, checked }) => {
  return (
    <label>
      {children}
      <input type="checkbox" checked={checked} />
    </label>
  );
};

const ThemeContext = React.createContext<ThemeContextType | undefined >(undefined)

const useTheme = () => React.useContext(ThemeContext)


const ThemeProvider: React.FC = ({children}) => {
  
  const [theme, setTheme] = React.useState('white')

  React.useEffect(() => {
    // normally comes from API, but hardcode for now
    setTheme('green')
  }, [])


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

const App = () => {
  //const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <>
      <ThemeProvider>
      <TypedReact
        message="bibs"
        renderMessage={(str) => <strong>{str}</strong>}
      />
      <h2>Some header</h2>
      </ThemeProvider>
    </>
  );
};

export { App };
