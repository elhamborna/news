import BookList from "./component/BookList";
import ChangeTheme from "./component/ChangeTheme";
import Navbar from "./component/Navbar";
import LoginContextProvider from "./contexts/LoginContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <h1> کتابخانه من</h1>
      <ThemeContextProvider>
        <LoginContextProvider>
          <Navbar />
          <BookList />
          <ChangeTheme/>
       </LoginContextProvider>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
