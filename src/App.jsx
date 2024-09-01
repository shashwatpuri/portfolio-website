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
import Application from "./pages/Application";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />}>
      <Route path="About" element={<About />} />
      <Route path="Resume" element={<Resume />} />
      {/* <Route path="Projects" element={<Projects />} /> */}
      {/* <Route path="Blog" element={<Blog />} /> */}
      <Route path="Contact" element={<Contact />} />
      <Route path="/a/:name" element={<Application />} />
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
    <div className="flex flex-col gap-4 m-3 mb-24 text-textcolor2
    sm:gap-8 sm:mt-14 sm:mx-7
    md:mx-11
    xl:flex-row xl:mx-4 xl:gap-6 xl:justify-center
    ">
      <PersonalInfoSection />
      <PageContainer />
    </div>
  )
}

function PageContainer() {

  // className = "relative max-w-4xl w-4/6 border border-bordercolor rounded-2xl p-8 bg-bgcolor1"

  return (
    <div className="w-full border border-bordercolor self-center bg-bgcolor1 rounded-2xl text-sm
    sm:max-w-xl sm:text-[15px]
    md:max-w-3xl md:text-base
    lg:max-w-[950px]
    xl:max-w-[900px] xl:self-start
    ">
      <div className="lg:relative">
        <div className="fixed z-50 bottom-0 left-0 right-0
        lg:absolute lg:top-0 lg:right-0 lg:left-auto
        ">
          <Navbar />
        </div>
      </div>

      <div className="p-4 text-sm
      sm:p-8 sm:text-base
      ">
        <Outlet />
      </div>
    </div>
  )
}