import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, changeDoneTodo } from '../redux/modules/todo';
import { Link } from 'react-router-dom';

function Main() {
  const dispatch = useDispatch();

  // todo title, content 담을 객체
  const [todoObj, setTodoObj] = useState({ title: '', content: '' })
  const { title, content } = todoObj;

  // onChange에 들어갈 Input setState 함수
  const onChangeInput = (changeObj) => {
    const { name, value } = changeObj.target;

    const newTodo = {
      ...todoObj,
      [name]: value,
    };
    setTodoObj(newTodo);
  }

  // todo state 불러오기
  const todos = useSelector((state) => {
    return state.todoReducer.todos
  })

  // 추가하기 버튼 클릭
  const addBtnHandler = () => {
    dispatch(addTodo(todoObj));

    setTodoObj({ title: '', content: '' })
  }

  // 삭제하기 버튼 클릭
  const deleteBtnHandler = (id) => {
    dispatch(deleteTodo(id));
  }

  // 완료 / 취소 버튼 클릭
  const changeDoneBtnHandler = (id) => {
    dispatch(changeDoneTodo(id));
  }

  // 목록 html
  const todoListBox = (todo) => {
    return (
      <StTodoList key={todo.id}>
        <Link to={`/detail/${todo.id}`}>상세보기</Link>
        <div>
          <h3 style={{ fontSize: '25px' }}>{todo.title}</h3>
          <p>{todo.content}</p>
        </div>
        <StTodoBtnContainer>
          <StTodoBtn color='red' onClick={() => deleteBtnHandler(todo.id)}>삭제하기</StTodoBtn>
          <StTodoBtn color='green' onClick={() => changeDoneBtnHandler(todo.id)}>{todo.isDone?'취소':'완료!'}</StTodoBtn>
        </StTodoBtnContainer>
      </StTodoList>
    )
  }

  return (
    <StRoot>
      <StHeader><div>My Todo List</div> <div>React</div></StHeader>
      <StInputContainer>
        <div>
          <label for="inputTitle" style={{ fontWeight: '900' }}>제목 </label>
          <StInputBox id="inputTitle" name='title' value={title} onChange={onChangeInput} />
          <label for="inputContent" style={{ fontWeight: '900' }}>내용 </label>
          <StInputBox id="inputContent" name='content' value={content} onChange={onChangeInput} />
        </div>
        <StAddBtn onClick={addBtnHandler}>추가하기</StAddBtn>
      </StInputContainer>
      <StBody>
        <h2>🥕 Working!</h2>
        <StListContainer>
          {todos.filter((todo) => !todo.isDone).map((todo) => todoListBox(todo))}
        </StListContainer>
        <h2>🥕 Done!</h2>
        <StListContainer>
          {todos.filter((todo) => todo.isDone).map((todo) => todoListBox(todo))}
        </StListContainer>
      </StBody>
    </StRoot>
  )
}

const StRoot = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
`

const StHeader = styled.div`
  border: 1px solid	#EBEBEB;
  padding: 15px;
  margin-top:5px;
  display: flex;
  justify-content: space-between;
`

const StInputContainer = styled.div`
  background-color: #EBEBEB;
  border-radius: 15px;
  margin-top: 20px;
  padding: 30px;
  
  display: flex;
  justify-content: space-between;
`

const StInputBox = styled.input`
  border: 1px solid	#EBEBEB;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 20px;

  height: 40px;
  width: 250px;
`

const StAddBtn = styled.button`
  border: 1px solid #008080;
  border-radius: 10px;
  background-color: #008080;

  color: white;
  font-weight: 900;
  height: 40px;
  width: 150px;
`

const StBody = styled.div`
  padding: 30px;
`

const StListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const StTodoList = styled.div`
  border: 5px solid #008080;
  border-radius: 10px;
  height: 200px;
  width: 270px;

  padding: 10px;
`

const StTodoBtnContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px;
  justify-content: center;
`

const StTodoBtn = styled.button`
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  background-color: white;
  height: 40px;
  width: 100px;
`

export default Main