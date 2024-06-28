import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Player from './components/Player';
import Team from './components/Team';
import Book from './components/Book';
import Library from './components/Library';
import ConfirmDialog from './components/ConfirmDialog';
import Clock from './components/Clock';
import Comment from './components/Comment';
import Comment1 from './components/Comment1';
import Comment2 from './components/Comment2';

import CommentList from './components/CommentList';
import NumberList from './components/NumberList';
import WelcomeDialog from './components/WelcomeDialog';
import Dialog from './components/Dialog';
import ProfileCard from './components/ProfileCard';
import Card from './components/Card';
import MainWrap from './components/blog/MainWrap';
import BlogMain from './components/blog/BlogMain';
import Greeting from './components/Greeting';
import MyButton from './components/MyButton';
import Toolbar from './components/ToolBar';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import ConfirmButton from './components/ConfirmButton';
import MainPage from './components/Mainpage';
import NameForm from './components/NameForm';
import SignUp from './components/SignUp';
import Reservation from './components/Reservation';
import SignUpDialog from './components/SignUpDialog';
import Container from './components/ex1/Container';
import WordContainer from './components/ex2/WordContainer';
import CartContainer from './components/ex3/CartContainer';
import ProductList from './components/ex3/ProductList';


const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
  imgUrl: 'https://c.files.bbci.co.uk/4118/production/_119546661_gettyimages-1294130887.jpg',
  userName: '손흥민'
}

const onClickLoginHandle = (event) => {
    alert('로그인 페이지로 이동합니다.')
}

const onClickLogoutHandle = (event) => {
  alert('로그아웃 되었습니다.')
}
    
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* 20240624 코드 수정 */}
    {/* <Player playerName='이강인' playerNumber='19' />
    <Player playerName='손흥민' playerNumber='7' />
    <Team>
      
    </Team> */}
    {/* <Book bookName='오늘만 있다' bookPage='일상을 담은 내용' />
    <Library>

    </Library> */}

    {/* <Clock>
        
    </Clock> */}
    {/* <Comment user={user} content="안녕하세요. 1등!!!" replydate="2024.06.25"></Comment> */}
    {/* <Comment1 user={user} content="코멘트 복사" replydate="2024.06.25-2"></Comment1> */}
    {/* <Comment2 user={user} content="안녕하세요. 1등!!" replydate="2024.06.25"></Comment2> */}

    {/* <Comment2 user={user} content="안녕하세요. 1등!!" replydate="2024.06.25"></Comment2>
    <Comment2 user={user} content="안녕하세요. 1등!!" replydate="2024.06.25"></Comment2>
    <Comment2 user={user} content="안녕하세요. 1등!!" replydate="2024.06.25"></Comment2>
    <Comment2 user={user} content="안녕하세요. 1등!!" replydate="2024.06.25"></Comment2>
    <Comment2 user={user} content="안녕하세요. 1등!!" replydate="2024.06.25"></Comment2> */}

    {/* <Team></Team> */}
    {/* <CommentList /> */}
    {/* <NumberList /> */}
    {/* <Dialog /> */}
    {/* <WelcomeDialog /> */}
    {/* <ProfileCard /> */}
    {/* <ConfirmDialog /> */}

    {/* <MainWrap></MainWrap> */}

    {/* <BlogMain /> */}
    
    {/* <Toolbar isLogin={true}
      onClickLoginHandle={onClickLoginHandle}
      onClickLogoutHandle={onClickLogoutHandle}
    ></Toolbar> */}
    
    {/* <Greeting isLogin={false} /> */}
    {/* <MyButton /> */}
    {/* <Counter /> */}

    {/* <Toggle /> */}
    {/* <ConfirmButton /> */}
    {/* <MainPage /> */}

    {/* <NameForm /> */}

    {/* <SignUp /> */}

    {/* <Reservation /> */}

    {/* <SignUpDialog /> */}

    {/* <Container></Container> */}

    {/* <WordContainer /> */}

    {/* <CartContainer /> */}

    <CartContainer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
