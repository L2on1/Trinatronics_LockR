import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import LockR from "./Components/Lock-R/LockR";
import AppBorneMulhouse1 from "./Components/Lock-R/Mulhouse/Borne_1/AppBorneMulhouse1";
import BorneMulhouse1 from "./Components/Lock-R/Mulhouse/Borne_1/BorneMulhouse1";
import BorneMulhouse2 from "./Components/Lock-R/Mulhouse/Borne_2/BorneMulhouse2";
import Mulhouse from "./Components/Lock-R/Mulhouse/Mulhouse";
import BorneStrasbourg1 from "./Components/Lock-R/Strasbourg/Borne_1/BorneStrasbourg1";
import BorneStrasbourg2 from "./Components/Lock-R/Strasbourg/Borne_2/BorneStrasbourg2";
import Strasbourg from "./Components/Lock-R/Strasbourg/Strasbourg";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header.jsx";
import Profile from "./Components/Profile/Profile";
import Services from "./Components/Services/Services";
import Footer from "./Components/Lock-R/Mulhouse/Borne_1/Footer";

function App() {
  return (
    <>
      <Header />
      {/*<Navbar />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="/profil/*" element={<Profile />} />
        <Route path="/lock-r" element={<LockR />} />
        <Route path="/lock-r/mulhouse" element={<Mulhouse />}>
          <Route
            path="/lock-r/mulhouse/borne_1"
            element={<BorneMulhouse1 />}
          ></Route>
          <Route path="/lock-r/mulhouse/borne_2" element={<BorneMulhouse2 />} />
        </Route>
        <Route
          path="/lock-r/mulhouse/borne_1/app"
          element={<AppBorneMulhouse1 />}
        />
        <Route path="/lock-r/strasbourg" element={<Strasbourg />}>
          <Route
            path="/lock-r/strasbourg/borne_1"
            element={<BorneStrasbourg1 />}
          />
          <Route
            path="/lock-r/strasbourg/borne_2"
            element={<BorneStrasbourg2 />}
          />
        </Route>
      </Routes>
      {/*<Footer />*/}
    </>
  );
}

export default App;
