import DashBoard from './container/DashBoard';
import './style/index.css'
function App() {
  return (
    <div className="page-container">
      <div className="page-title">
        <h1> <span>Hikkywanafly Covid Dashboard</span></h1>

      </div>
      <DashBoard />
    </div>
  );
}

export default App;
