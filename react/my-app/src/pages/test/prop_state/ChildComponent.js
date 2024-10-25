const ChildComponent = (props) => {
  return (
    <h1>
      {props.name} is {props.age} years old.
    </h1>
  );
};

export default ChildComponent;
