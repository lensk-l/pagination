import './App.css';
import {Container} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NotFound from "./components/NotFound";
import NavList from "./components/Navigate";


function App() {

    return (
        <Container sx={{marginTop: 10}} maxWidth='md'>
            <NavList/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/not_found' element={<NotFound/>}/>
            </Routes>
        </Container>

    );
}

export default App;
