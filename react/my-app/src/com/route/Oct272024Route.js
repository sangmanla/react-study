import React from "react";
import { Route, Routes } from "react-router-dom";
import PassingPropsToaComponent from "../../pages/test/prop_state/PassingPropsToaComponent";
import ChildrenExample from "../../pages/test/ChildrenExample";
import UlLiTest from "../../pages/test/UlLiTest/UlLiTest";
import UlLiTest2 from "../../pages/test/UlLiTest/UlLiTest2";
import UlLiTest3 from "../../pages/test/UlLiTest/UlLiTest3";
import UlLiTest4 from "../../pages/test/UlLiTest/UlLiTest4";
import FragmentTest from "../../pages/test/UlLiTest/FragmentTest";
const Oct272024Routes = () => {
  return (
    <Routes>
      <Route
        path="/passingPropsToaComponent"
        element={<PassingPropsToaComponent />}
      />
      <Route path="/childrenExample" element={<ChildrenExample />} />
      <Route path="/ulLiTest" element={<UlLiTest />} />
      <Route path="/ulLiTest2" element={<UlLiTest2 />} />
      <Route path="/ulLiTest3" element={<UlLiTest3 />} />
      <Route path="/ulLiTest4" element={<UlLiTest4 />} />
      <Route path="/*" element={<FragmentTest />} />
    </Routes>
  );
};

export const fetchMenuDataOct272024 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "2024-10-27": [
          {
            path: "/passingPropsToaComponent",
            label: "Passing props to a component",
          },
          {
            path: "/childrenExample",
            label: "Children Example",
          },
        ],
        "2024-10-28": [
          {
            path: "/ulLiTest",
            label: "Ul Li Test",
          },
          {
            path: "/ulLiTest2",
            label: "Ul Li Test - 2",
          },
          {
            path: "/ulLiTest3",
            label: "Ul Li Test - 3",
          },
          {
            path: "/ulLiTest4",
            label: "Ul Li Test - 4",
          },
          {
            path: "/fragmentTest",
            label: "Fragment Test",
          },
        ],
      });
    }, 10);
  });
};

export default Oct272024Routes;
