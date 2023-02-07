import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Shop } from "./component/Shop";
import "./App.css";
import React from "react";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Shop />
            <Footer />
        </React.Fragment>
    );
}

export default App;
