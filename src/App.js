import React from "react"
import { Route ,Routes,Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from  "./components/AboutUs"
import Detailpage from "./components/Detailpage";
import Notfound from "./components/Notfound"
import Programmers from "./components/Programmers"

function App() {
  return (
          <div>
              <Navbar />
                  <Routes>
                      <Route path="/" element={<Landing />}/>
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<Detailpage />} />
                      <Route path="/aboutus/*" element={<AboutUs />}>
                      <Route path="programmers" element={<Programmers/>}/>
                      <Route path="drivers" element={<h1>drivers</h1>}/>
                      </Route>
                      <Route path="notfound" element={<Notfound/>}/>
                      {/*in baraie inke karbar omad b path... ono befrestim be /products
                      <Route path="/landing" element={<Navigate to="/products"/>}/>*/}
                      {/*in baraie inke harjayi karbar raft ono befrestim /products*/}
                      <Route path="/*" element={<Navigate to="/notfound"/>}/>
                  </Routes> 
              <Footer /> 
          </div>
  );
}

export default App;
