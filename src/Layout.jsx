// importar react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./components/About"
import Digit from "./components/Digit"
import NotFound from "./components/NotFound"
import App from "./App"
// crear un component funcional llamado Layout
export const Layout = () => {
    // vamos a añadir a Layout, los componentes que nos entrega react-router-dom
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/digit/:digitParam/name/:thisIsAname" element={<Digit/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

