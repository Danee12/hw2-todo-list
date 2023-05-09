import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import { findTodo } from '../redux/modules/todo';


function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // id값 받아오기
  const params = useParams();
  const id = params.id;
  
  // todo state불러오기
  const foundTodo = useSelector((state) => state.todoReducer.todo)
  // 상세페이지에 맞는 todo 불러오기
  dispatch(findTodo(id));

  console.log(foundTodo);

  return (
    <StDetail>
      <StDetailBox>
        <StDetailTitle>
          <div>
            ID: {id}
          </div>
          <StHomeReturn onClick={()=>navigate('/')}>이전으로</StHomeReturn>
        </StDetailTitle>
        <h1 style={{margin:'30px 0px'}}>{foundTodo.title}</h1>
        <p>{foundTodo.content}</p>
      </StDetailBox>
    </StDetail>
  )
}

const StDetail = styled.div`
  border: 3px solid	#EBEBEB;
  width: 100%;
  height: 700px;
  margin: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const StDetailBox = styled.div`
  padding: 0px 20px;
  border: 1px solid	#EBEBEB;
  width: 600px;
  height: 400px;
`

const StDetailTitle = styled.div`
  height: 60px;
  border-bottom:1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StHomeReturn = styled.button`
  border: 1px solid #EBEBEB;
  border-radius: 10px;
  background-color: white;

  height: 40px;
  width: 100px;
`

export default Detail