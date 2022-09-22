import React, { Suspense, lazy } from "react";
//css
import "./App.css";
//loader-spinner
import { ColorRing } from "react-loader-spinner";
//components
import { ColorDetail } from "./components/ColorDetail";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const UserListFetch = lazy(() => import("./components/UserListFetch"));
//delayed function
const DelayedComponent = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await import("./components/DelayedComponent");
});
const UserListSSR = lazy(() => import("./components/UserListSSR.js"));

//spinner
const spinners = (
  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  />
);

//app
export default function App({ name, fetchedData }) {
  console.log(name);
  return (
    <div className="App">
      <NavBar name={name} />
      <div className="app-mid-container">
        <Suspense fallback={spinners}>
          <ColorDetail />
        </Suspense>
        <MainContent />
        <Suspense fallback={spinners}>
          <UserListFetch />
        </Suspense>{" "}
        <Suspense fallback={spinners}>
          <DelayedComponent />
        </Suspense>
        <Suspense fallback={spinners}>
          <UserListSSR fetchedData={fetchedData} />
          {/* <UserListSSR /> */}
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
