import "./App.css";
import About from "./components/About";
import Exams from "./components/Exams";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import VideoLessons from "./components/VideoLessons";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <VideoLessons />
      <Exams />
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
