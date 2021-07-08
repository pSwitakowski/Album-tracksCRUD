import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Api } from "../../util/Api";
import { About } from "../About/About";
import NavBar from "./NavBar";
import Home from "../Home/Home";
import AlbumList from "../Album/AlbumList";
import AlbumDetail from "../Album/AlbumDetail";
import TrackDetail from "../Track/TrackDetail";

function App() {
    return (
        <BrowserRouter baseUrl={Api.baseUrl}>
            <div className="App">
                <NavBar />
                <header className="App-header">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route exact path="/Albums" component={AlbumList} />
                        <Route
                            path="/Albums/:albumId"
                            component={AlbumDetail}
                        />
                        <Route
                            path="/Tracks/:trackId"
                            component={TrackDetail}
                        />
                    </Switch>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
