import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom";

import './App.css'
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PersonalInfoSection from "./components/PersonalInfo";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />}>
      <Route path="About" element={<About />} />
      <Route path="Resume" element={<Resume />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Index() {
  return (
    <div className="grid grid-cols-1 lg:flex items-start gap-6 mx-12 my-14 justify-center text-textcolor2">
      <PersonalInfoSection />
      <PageContainer />
    </div>
  )
}

function PageContainer() {
  return (
    <div className="relative max-w-4xl w-4/6 border border-bordercolor rounded-2xl p-8 bg-bgcolor1">
      <div className="absolute top-0 right-0">
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}

// test comment is here