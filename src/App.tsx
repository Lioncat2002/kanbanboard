import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faUser,
  faClipboard,
  faListAlt,
  faBarChart,
} from "@fortawesome/free-regular-svg-icons";
function NavBar() {
  return (
    <div className="nav">
      <h1 className="heading">Kitty.com</h1>

      <div className="options">
        <FontAwesomeIcon icon={faNewspaper} /> Dashboard
      </div>
      <div className="options">
        <FontAwesomeIcon icon={faUser} /> Team
      </div>
      <div className="sub-heading">TO-DO</div>
      <div className="options">
        <FontAwesomeIcon icon={faClipboard} /> Kanban
      </div>
      <div className="options">
        <FontAwesomeIcon icon={faListAlt} /> List
      </div>
      <div className="options">
        <FontAwesomeIcon icon={faBarChart} /> Reports
      </div>
    </div>
  );
}

function App() {
  const date = new Date();
  const a = 20;
  const b = 30;

  return (
    <div className="parent">
      <NavBar />
      <div className="content">
        <div className="content-heading">Kanban</div>
      </div>
    </div>
  );
}

export default App;
