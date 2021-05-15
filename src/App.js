import './App.css';
import './Navbar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Contacts from './Contacts';
import Login from './Login';
import { useStatevalue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStatevalue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <div className="App_body">
            <Sidebar />
            <Feed />
            <Contacts />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
