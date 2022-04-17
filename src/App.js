import './App.css';
import {
  Header,
  Products,
  Tabs,
  Menu,
  MobApp,
  Testimonials,
  Footer,
} from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className='App'>
      {/* v css needs updating, classNames v */}
      <Navbar />
      <Header />
      <Products />
      {/* ^ css needs updating, classNames ^ */}
      <Tabs />
      <Menu />
      <MobApp />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
