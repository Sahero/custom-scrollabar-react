import React from "react";

import CustomScroll from "react-custom-scroll";
import { Content1, Content2, Content3 } from "./contents";

import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Demo</h1>
      <div className="App">
        <div className="example-container">
          <h3>Native Scrollbar </h3>
          <div class="native-scroll-container">
            <Content1 />
            <Content2 />
            <Content3 />
          </div>
        </div>

        <div className="example-container">
          <h3>Custom Scrollbar</h3>
          <div class="custom-scroll-container with-bg-color">
            <CustomScroll heightRelativeToParent="100%">
              <Content1 />
              <Content2 />
              <Content3 />
            </CustomScroll>
          </div>
        </div>
        <div className="example-container">
          <h3>Cusotom Scrollbar With Icon </h3>
          <div class="custom-scroll-container with-icon">
            <CustomScroll allowOuterScroll={true} heightRelativeToParent="100%">
              <Content1 />
              <Content2 />
              <Content3 />
            </CustomScroll>
          </div>
        </div>
      </div>
    </>
  );
}
