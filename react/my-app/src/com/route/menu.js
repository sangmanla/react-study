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
import ReactBatch from "../../pages/test/20241101/ReactBatch";
import RequestTracker from "../../pages/test/20241101/RequestTracker";
import FinalState from "../../pages/test/20241101/FinalState";
import MovingDot from "../../pages/test/20241101/MovingDot";
import SpreadWithBrace from "../../pages/test/20241101/SpreadWithBrace";
import ArrayImmutable from "../../pages/test/20241102/ArrayImmutable";
import FormByState from "../../pages/test/20241103/FormByState";
import MultipleSelection from "../../pages/test/20241103/MultipleSelection";
import FilterableList from "../../pages/test/20241103/FilterableList";
import UserImmerReducer from "../../pages/test/20241104/UserImmerReducer";
import Context from "../../pages/test/20241105/Context";
import Context2 from "../../pages/test/20241105/Context2";
import UseRefTest from "../../pages/test/20241106/UseRefTest";
import UseRefTest2 from "../../pages/test/20241106/UseRefTest2";
import UseRefTest3 from "../../pages/test/20241106/UseRefTest3";
import UseRefTest4 from "../../pages/test/20241106/UseRefTest4";
import UseRefTest5 from "../../pages/test/20241106/UseRefTest5";
import TaskApp from "../../pages/test/20241105/ContextAndReducer/TaskApp";

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
  {
    date: "2024-11-01",
    routes: [
      { label: "React Batch", component: ReactBatch },
      { label: "Request Tracker", component: RequestTracker },
      { label: "Final State", component: FinalState },
      { label: "Moving Dot", component: MovingDot },
      { label: "Spread With Brace", component: SpreadWithBrace },
    ],
  },
  {
    date: "2024-11-02",
    routes: [{ label: "Array Immutable", component: ArrayImmutable }],
  },
  {
    date: "2024-11-03",
    routes: [
      { label: "Form By State", component: FormByState },
      { label: "Multiple Selection", component: MultipleSelection },
      { label: "Filterable List", component: FilterableList },
    ],
  },
  {
    date: "2024-11-04",
    routes: [{ label: "User Immer Reducer", component: UserImmerReducer }],
  },
  {
    date: "2024-11-05",
    routes: [
      { label: "Context", component: Context },
      { label: "Context2", component: Context2 },
      { label: "Task App", component: TaskApp },
    ],
  },
  {
    date: "2024-11-06",
    routes: [
      { label: "UseRef Test", component: UseRefTest },
      { label: "UseRef Test2", component: UseRefTest2 },
      { label: "UseRef Test3", component: UseRefTest3 },
      { label: "UseRef Test4", component: UseRefTest4 },
      { label: "UseRef Test5", component: UseRefTest5 },
    ],
  },
];
