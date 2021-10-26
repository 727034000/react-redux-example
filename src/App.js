import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import Container from './container'
import Container2 from './container2'
import {store} from './store';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Provider store={store}>
                    <Container></Container>
                    <Container2></Container2>
                </Provider>
            </header>
        </div>
    );
}

export default App;
