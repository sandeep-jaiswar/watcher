import * as React from "react"
import { Routes, Route } from "react-router-dom"
import Loader from "./components/atoms/Loader";
import Header from "./components/molecules/Header";
const About = React.lazy(() => import("./pages/About"))
const Home = React.lazy(() => import("./pages/Home"))
const NoPageFound = React.lazy(() => import("./pages/NoPageFound"))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <Header />
      </React.Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<Loader />}>
              <About />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  )
}

export default App
