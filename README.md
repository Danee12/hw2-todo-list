# To Do List 2
이번엔 항해 99 리액트 2차 과제로 기능이 추가된 todo list를 만들었습니다.
<br/><br/>

## 기능
1. 기존의 내용과 동일
2. 각 todo에 대하여 상세 페이지 생성
3. 상세 페이지는 각 todo의 id와 제목, 내용이 포함됨
4. 또한 상세 페이지에서 '이전으로'라는 버튼 클릭 시 메인 페이지로 이동
<br/><br/>

## 사용 기술
- react
- styled-components
- react-redux : useDispatch, useSelector
- react-router-dom : useNavigate, useParams, Link
- uuid
<br/><br/>

## 변경 사항
1. 기존에는 나만의 디자인으로 만들었지만 이번에는 예시 페이지와 최대한 동일하게 만드려고 노력했습니다.
2. 이번에 새로 배운 styled-components를 최대한 사용했습니다.
3. Router와 Redux를 적용했습니다.
4. 코드 리뷰 시 받았던 피드백을 최대한 적용하려 했습니다.
	- title, content 하나의 state로 묶기
	- Working와 Done의 컴포넌트 일체화
	- id 생성 함수
<br/><br/>

## 아쉬운 점 및 향후 개선 사항
1. styled components 끼리 따로 파일을 만들기
2. 공통 css 적용
3. 입력 날짜를 저장하여 표출
4. 자신이 진행한 todo에 대한 피드백