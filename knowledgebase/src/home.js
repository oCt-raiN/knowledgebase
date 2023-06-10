import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button } from 'react-bootstrap';
import { Nav, Button } from 'react-bootstrap';
import logo from "./logo.svg";
import "./home.css";

function Home() {
    return (
        <section>
            <title>Bioethanol</title>
            <Nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-lg" id="nav">
                <div className="class container">
                    
                    <a href="#" class="navbar-brand text-info h1">
                        <img src={logo} alt="Bootstrap" width="30" height="15"></img> Bioethanol Network
                    </a>
                </div>
            <button className="navbar-toggler bg-danger" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapss" id="navmenu">
                
            </div>
            </Nav>
        </section>
        );
    }
    

export default Home;