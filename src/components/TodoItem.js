import Swal from 'sweetalert2';

function TodoItem({ item, data, setData }) {
  const remove = () => {
    Swal.fire({
      title: '確定要刪除此代辦事項?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '確認',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        setData(data.filter((d) => d.todoId !== item.todoId));
        Swal.fire('刪除成功!', '', 'success');
      }
    });
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