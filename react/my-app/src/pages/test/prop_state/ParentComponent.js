import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name="Alice" age={25} />
      <ChildComponent name="Bob" age={30} />
      <ChildComponent name="Charlie" age={35} />
    </div>
  );
};

export default ParentComponent;
