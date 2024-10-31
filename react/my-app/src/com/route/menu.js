import Home from "../../pages/home/HomeComponent";
import Example1 from "../../pages/test/20241029/Example1";
import Example2 from "../../pages/test/20241029/Example2";
import Example3 from "../../pages/test/20241029/Example3";
import Example4 from "../../pages/test/20241029/Example4";
import Example5 from "../../pages/test/20241029/Example5";
import Example6 from "../../pages/test/20241029/Example6";
import Example7 from "../../pages/test/20241029/Example7";
import Example8 from "../../pages/test/20241029/Example8";
import Example9 from "../../pages/test/20241029/Example9";
import ArrayImmutableWithImmer from "../../pages/test/20241029/ArrayImmutableWithImmer";
import ObjectImmutableWithImmer from "../../pages/test/20241029/ObjectImmutableWithImmer";
import ChildrenExample from "../../pages/test/ChildrenExample";
import InputEventTestComponent from "../../pages/test/event/OnChagneComponent";
import PassingPropsToaComponent from "../../pages/test/prop_state/PassingPropsToaComponent";
import PropsStateComponent from "../../pages/test/prop_state/PropsStateComponent";
import UseStateCallbackComponent from "../../pages/test/prop_state/UseStateCallbackComponent";
import ReduxComponent from "../../pages/test/redux/ReduxComponent";
import FragmentTest from "../../pages/test/UlLiTest/FragmentTest";
import UlLiTest from "../../pages/test/UlLiTest/UlLiTest";
import UlLiTest2 from "../../pages/test/UlLiTest/UlLiTest2";
import UlLiTest3 from "../../pages/test/UlLiTest/UlLiTest3";
import UlLiTest4 from "../../pages/test/UlLiTest/UlLiTest4";
import ToDoApp from "../../pages/TodoList/ToDoApp";
import UseStateHook from "../../pages/test/20241031/UseStateHook";
import UseStateHook2 from "../../pages/test/20241031/UseStateHook2";

export const routesConfig = [
  {
    date: "2024-10-24",
    routes: [
      { label: "Home", component: Home },
      { label: "Props", component: PropsStateComponent },
    ],
  },
  {
    date: "2024-10-26",
    routes: [
      { label: "Redux", component: ReduxComponent },
      { label: "useStateCallback", component: UseStateCallbackComponent },
      { label: "InputEvent", component: InputEventTestComponent },
      { label: "TodoList", component: ToDoApp },
    ],
  },
  {
    date: "2024-10-27",
    routes: [
      {
        label: "Passing props to a component",
        component: PassingPropsToaComponent,
      },
      { label: "Children Example", component: ChildrenExample },
      { label: "Ul Li Test", component: UlLiTest },
      { label: "Ul Li Test - 2", component: UlLiTest2 },
      { label: "Ul Li Test - 3", component: UlLiTest3 },
      { label: "Ul Li Test - 4", component: UlLiTest4 },
      { label: "Fragment Test", component: FragmentTest },
    ],
  },
  {
    date: "2024-10-29",
    routes: [
      { label: "Example 1", component: Example1 },
      { label: "Example 2", component: Example2 },
      { label: "Example 3", component: Example3 },
      { label: "Example 4", component: Example4 },
      { label: "Example 5", component: Example5 },
      { label: "Example 6", component: Example6 },
      { label: "Example 7", component: Example7 },
      { label: "Example 8", component: Example8 },
      { label: "Example 9", component: Example9 },
      { label: "Object Immutable Immer", component: ObjectImmutableWithImmer },
      { label: "Array Immutable Immer", component: ArrayImmutableWithImmer },
    ],
  },
  {
    date: "2024-10-31",
    routes: [
      { label: "UseStateHook", component: UseStateHook },
      { label: "UseStateHook2", component: UseStateHook2 },
    ],
  },
];