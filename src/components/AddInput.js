import Swal from 'sweetalert2';

function AddInput({ text, setText, data, setData }) {
    const add = () => {
      if (text === "") {
        Swal.fire('請輸入代辦事項內容!', '', 'error');
      } else {
        Swal.fire('新增成功!', '', 'success');
        setText("");
        setData([...data, { todoId: Date.now(), content: text, isFinished: false }]);
      }
    };
    return (
      <div className="inputBox">
        <input
          type="text"
          placeholder="請輸入待辦事項"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <a href="#" onClick={() => add()}>
          <i className="fa fa-plus"></i>
        </a>
      </div>
    );
}

export default AddInput;