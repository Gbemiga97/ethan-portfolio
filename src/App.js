import { BrowserRouter } from "react-router-dom";
import { AnimRoutes, Header, Nav, TopLeftImg } from "./components";

function App() {

  


  return (
    <div className="text-white page bg-site bg-cover bg-no-repeat 
    font-secondary relative overflow-hidden">
      <BrowserRouter>
     <TopLeftImg />
     <Nav />
     <Header />
     <AnimRoutes />
     </BrowserRouter>
    </div>
  );
}

export default App;
