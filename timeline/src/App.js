import './App.css';
import {TimeLinePage} from "./pages/TimeLinePage";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <Nav/>
            <TimeLinePage></TimeLinePage>
        </div>
    );
}

export default App;