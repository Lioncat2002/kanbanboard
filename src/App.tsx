import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faUser,
  faClipboard,
  faListAlt,
  faBarChart,
  faMessage,
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

function Card(props: any) {
  return (
    <div className="card-heading">
      {props.title}
      <div className="card-content">
        <img src="https://picsum.photos/30" className="card-image" />
        <FontAwesomeIcon icon={faMessage} style={{ fontSize: "20px" }} />
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
        <div className="content-board">
          <div className="board">
            <div className="card">
              Ideas
              <Card title="Create new component" />
              <Card title="Add enemies" />
              <Card title="Rewrite the game engine" />
              <Card title="Add particles" />
              <Card title="Try out figma" />
              <Card title="Complete DA" />
            </div>
          </div>
          <div className="board">
            <div className="card">
              At Work
              <Card title="Complete Probability" />
              <Card title="Finish the current game" />
              <Card title="Add guns" />
            </div>
          </div>
          <div className="board">
            <div className="card">
              Done
              <Card title="Complete DSD" />
              <Card title="Create a new project" />
              <Card title="Learn front-end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
