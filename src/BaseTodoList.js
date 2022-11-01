import { withHigherOrderComponent } from "./withHigherOrderComponent.js";
import { TodoItem } from "./TodoItem.js";

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const SecondComponet1 = () => {
  return <div>SecondComponet1</div>;
};
export default withHigherOrderComponent(BaseTodoList)(SecondComponet1);
