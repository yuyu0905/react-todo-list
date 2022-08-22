function TodoItem({ item, data, setData }) {
  const remove = () => {
    if (window.confirm("確定要刪除此代辦事項?")) {
      setData(data.filter((d) => d.todoId !== item.todoId));
    }
  };

  return (
    <>
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          value={item.isFinished}
          checked={item.isFinished ? "checked" : ""}
          onChange={() => {
            setData(
              data.map((d) =>
                d.todoId == item.todoId ? { ...d, isFinished: !d.isFinished } : d
              )
            );
            // console.log(data);
          }}
        />
        <span>{item.content}</span>
      </label>
      <a href="#" onClick={() => remove()} >
        <i className="fa fa-times"></i>
      </a>
    </>
  );
}

export default TodoItem;