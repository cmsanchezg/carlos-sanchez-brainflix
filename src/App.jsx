import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/VideoUpload" element={<VideoUpload />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
