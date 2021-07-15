import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header>
        Welcome to my webpage!
      </header>
      <br />
      <div style={{ float: 'left' }}>
      &nbsp; &nbsp; &nbsp;
      <Button
          variant="contained"
          size="large"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdoVBxyjEuYYi5yZ9S_Oh8AOYnu7qlnoWD9qWaRLdcfs-KrIg/viewform"
          target="_blank"
        >
          Registration
        </Button>
      </div>
    </div>
  );
}

export default App;
