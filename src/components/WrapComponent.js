import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import ModalComponent from './ModalComponent';

const WrapComponent = () => {

  //모달 상태관리
  const [modal,setModal] = useState({title:'리액트 이용한 기본 모달 타이틀',isShow:false});
  
  const modalCloseFn=()=>{
    setModal({...modal, isShow:false});
  }
  const modalShowFn=(tit)=>{
    setModal({...modal, title:tit, isShow:true});
  }

  return (
    <div id="wrap">
        <HeaderComponent />
        <MainComponent modalShowFn={modalShowFn} />
        <FooterComponent />
        <ModalComponent modal={modal} modalCloseFn={modalCloseFn}/>        
    </div>
  );
};

export default WrapComponent;