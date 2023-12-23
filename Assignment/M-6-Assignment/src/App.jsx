import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import "./App.css"

const App = () => {
  return (
    <>
    <div>
      <Header Title="Header Area"/>
    </div>
    <div>
      <Content/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default App;