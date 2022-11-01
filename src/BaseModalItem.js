export const BaseModalItem = (props) => {
  const showModal = (item) => {
    props.showModal(item);
  };
  return (
    <div>
      {/* write like that onClick={showModal} react will call when initiating*/}
      {/* write like that does not make react call function when initiating */}
      <button onClick={(e) => showModal(props.item)}>
        Item: {props.item.id}
      </button>
    </div>
  );
};
