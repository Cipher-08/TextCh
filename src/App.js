import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" />
      <br />
      <div className="container">
        <TextForm heading="Enter your text" />
        <br />
        <h6> (Made with ❤️ by Saksham Awasthi)</h6>
      </div>
    </div>
  );
}

export default App;
