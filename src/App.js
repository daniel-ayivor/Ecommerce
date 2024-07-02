
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PropertyDetails from './Components/PropertyDetails';
import Home from './Components/Home'
//import route and routes
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';

function App() {
  return (


    <div className="max-w-[1250px] mx-auto bg-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/property/:id' element={<PropertyDetails />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signout' element={<SignOut />}/>
      </Routes>
     <Footer />
 </div>
  );
}

export default App;
