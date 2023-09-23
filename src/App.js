import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About us"/>
      
      <div className="container">
      <TextForm heading="Enter your Text below"/>
      </div>
    </>
  );
}

export default App;
