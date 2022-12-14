import { useState } from "react";
import AddInput from "./AddInput";
import TodoItem from "./TodoItem";
import empty from "../images/workImg.png";
import Swal from 'sweetalert2';

function TodoList() {
    const [text, setText] = useState("");
    const [todoState, setTodoState] = useState("all");
    const [stateList] = useState([
      {
        todoState: "all",
        content: "全部"
      },
      {
        todoState: "active",
        content: "待完成"
      },
      {
        todoState: "completed",
        content: "已完成"
      }
    ]);
    const [data, setData] = useState([]);
  
    const filterTodo = () => {
      if (todoState === "completed")
        return data.filter((item) => item.isFinished);
      else if (todoState === "active")
        return data.filter((item) => !item.isFinished);
      else return data;
    };

    const clearAll = () => {
        Swal.fire({
            title: '確定要清除已完成項目?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '確認',
            cancelButtonText: '取消',
        }).then((result) => {
            if (result.isConfirmed) {
                setData(data.filter((item) => !item.isFinished));
              Swal.fire('清除成功!', '', 'success');
            }
        });
    }

    return (
        <div id="todoListPage" className="bg-half">
            <nav>
                <h1><a href="#">ONLINE TODO LIST</a></h1>
                <ul>
                    <li className="todo_sm"><a href="#"><span>王小明的代辦</span></a></li>
                    <li><a href="#loginPage">登出</a></li>
                </ul>
            </nav>
            <div className="conatiner todoListPage vhContainer">
                <div className="todoList_Content">
                    <AddInput text={text} setText={setText} data={data} setData={setData} />
                    { data.length > 0 ?
                    (<div className="todoList_list">
                        <ul className="todoList_tab">
                            {stateList.map((item, i) => {
                                return (
                                <li key={i}>
                                    <a href="#" className={todoState === item.todoState ? "active" : ""}
                                    onClick={() => setTodoState(item.todoState)} >
                                    {item.content}
                                    </a>
                                </li>
                                );
                            })}
                        </ul>
                        <div className="todoList_items">
                            <ul className="todoList_item">
                                {filterTodo().map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <TodoItem item={item} data={data} setData={setData} />
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="todoList_statistics">
                                <p>
                                    {data.filter((item) => !item.isFinished).length} 個待完成項目
                                </p>
                                <a href="#" onClick={() => clearAll() }>
                                    清除已完成項目
                                </a>
                            </div>
                        </div>
                    </div>) :
                    (
                        <div className="empty">
                            <p>目前尚無待辦事項</p>
                            <img src={empty} alt="empty"/>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
  }

  export default TodoList;