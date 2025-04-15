import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";
import '../style.css';
// import loginImage from './assets/login-page-image.png';
import NavigationBar from './navigationBar'
import MainContent from "./content";

const root = createRoot(document.getElementById("root"));

function Home(){
    return(
        <>
            <NavigationBar/>
            <MainContent/>
        </>
    )
}


root.render(
    <>
        <Home/>
    </>
);
