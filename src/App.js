
import './App.css';
import TopMenu from './TopMenu';
import Footer from './Footer';
import Main from './Main';
import SideMenu from './SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Main />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
