import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OurStory from "./components/OurStory";
import Membership from "./components/Membership";
import ExtraTopics from "./components/ExtraTopics";
import Write from "./components/Write";
import Signin from "./components/Signin";
import Getstarted from "./components/Getstarted";
import Hero from "./components/Hero";
import PostDetails from "./components/PostDetails";
import { authContext } from "./context/authContext";
import Plans from "./components/Plans";
import "bootstrap/dist/css/bootstrap.min.css";
import Compose from "./components/Compose";
import { v4 as uuidv4 } from "uuid";
import { notifications } from "./assets/data";
import Notifications from "./components/Notifications";

function App() {
  const [auth, setAuth] = useState({
    user: {
      name: "Kaniel Outis",
      age: "27",
      sex: "male",
      id: uuidv4(),
      nickname: "mayhem101",
    },
  });

  const [showHints, setShowHints] = useState(true);
  const [showNotifications, setshowNotifications] = useState(false);
  const [windowsWidth, setWindowsWidth] = useState(0);
  const [profileOptions, setProfileOptions] = useState(false);

  window.addEventListener("resize", function () {
    setWindowsWidth(window.innerWidth);
  });

  // const getPageUrl = () => {
  //   const currentUrl = window.location.href;
  //   if (currentUrl.endsWith("/", 1)) {
  //     console.log(page);
  //   } else {
  //     setPage(window.location.href);
  //     console.log(page);
  //   }
  // };

  // useEffect(() => {
  //   getPageUrl();
  // }, [page]);

  return (
    <>
      <authContext.Provider
        value={{
          auth,
          setAuth,
          showHints,
          setShowHints,
          notifications,
          showNotifications,
          setshowNotifications,
          windowsWidth,
          setWindowsWidth,
          profileOptions,
          setProfileOptions,
        }}
      >
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="ourstory" element={<OurStory />} />
            <Route path="membership" element={<Membership />} />
            <Route path="write" element={<Write />} />
            <Route path="signin" element={<Signin />} />
            <Route path="getstarted" element={<Getstarted />} />
            <Route path="posts/:id/postdetails" element={<PostDetails />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/compose" element={<Compose />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/extra-topics" element={<ExtraTopics />} />
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </>
  );
}

export default App;
