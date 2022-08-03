import React, { useEffect, useState } from 'react';
import Postcode from 'react-daum-postcode';
//import '../postcode.scss'

const MemberComponent = ({modal,modalShowFn, 이용약관}) => {


  const [field, setField] = useState({
    아이디:'',
    아이디중복확인:false,
    showId:false,
    isErrorId:'',

    비밀번호:'',
    showPw:false,
    isErrorPw1:'',
    isErrorPw2:'',
    isErrorPw3:'',

    비밀번호중복:'',
    showPwRe:false,
    isPwSame:'',

    이름:'',

    이메일:'',
    이메일확인:'',
    이메일중복확인:false,

    휴대폰:'',
    휴대폰중복확인:false,
    휴대폰확인:'',
    인증번호:'',
    인증확인번호:'',
    isDisabledHp:true,
    isShowHp:false,
    minutes:2,
    seconds:59,
    setId:0,
    isDisabledHpInput:false,
    isDisabledHpBtn:false,
    isClassHp1:false,
    isClassHp2:false,
    isShowHpSpan:true,

    주소1:'',
    주소2:'',
    isShowAddress:false,

    성별:'선택안함',

    생년:'',
		생월:'',
		생일:'',
		isShowBirthText:'',
		isShowBirthError:false,

    추가입력사항선택:'',
    isShowAddInput:false,
    추가입력사항:'',

    이용약관동의:[],
  });

///////////////////////////////////////////////////
////아이디 입력 함수////////////////////////////////
  const onChangeId=(e)=>{
    const regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])*[^\s][A-Za-z0-9]{6,}$/;
    let isErrorId = '';

    if(e.target.value===''){
      //console.log('공백 : '+e.target.value)
      isErrorId = '';
    }
    else{
      //console.log('공백 아님: '+ e.target.value )
      if(regExp.test(e.target.value)===false){
        isErrorId = false;
      }
      else{
        isErrorId =true;
      }
      setField({...field, 아이디:e.target.value, isErrorId:isErrorId})
    };
    
  }
  const onFocusId=()=>{
    setField({...field, showId:true})
  }
  const onClickId=(e)=>{
    e.preventDefault();
    if(field.아이디===''){
      modalShowFn('아이디를 입력하세요.');
      setField({...field, 아이디중복확인:false});
    }
    else{
      if(field.isClassId===false){
        modalShowFn('아이디는 6자 이상의 영문 혹은 영문과 숫자의 조합만 가능합니다.'); 
        setField({...field, 아이디중복확인:false});
      }
      else {
        let imsi =[];
        for(let i=0; i<localStorage.length; i++){
          imsi.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        let result = imsi.filter((item)=>item.아이디===field.아이디);
      
        if(result.includes(true)){
          modalShowFn('중복된 아이디입니다. 다른 아이디를 사용해주세요.');
        }
        else{
          modalShowFn('사용가능한 아이디입니다.');
          setField({...field, 아이디중복확인:true});
        }
      }
      
    }
  }

/////////////////////////////////////////////////////
////비밀번호 입력 함수////////////////////////////////
  const onChangePw=(e)=>{

    const regExp1 = /.{10,}/; 
    const regExp2 = /((?=.*[A-Za-z])+((?=.*[0-9])+|(?=.*[!@#$%&*_-])+)+)[^\s][A-Za-z0-9!@#$%&*_-]{10,}/;
    const regExp3 = /(.)\1\1/;
    
    let pwError1 = '';
    let pwError2 = '';
    let pwError3 = '';

    if(e.target.value===''){
      pwError1 = '';
      pwError2 = '';
      pwError3 = '';

    }
    else{
      if(regExp1.test(field.비밀번호)===false){      
        pwError1 = false;
      }
      else{
        pwError1 = true;
      }
      if(regExp2.test(e.target.value)===false){
        pwError2 = false;
      }
      else{
        pwError2 = true;
      }
      if(regExp3.test(e.target.value)===true){
        pwError3 = false;
      }
      else{
        pwError3 = true;
      }
      setField({...field, 비밀번호:e.target.value, isErrorPw1:pwError1, isErrorPw2:pwError2, isErrorPw3:pwError3})
    }
  }
  const onFocusPw=()=>{
    setField({...field, showPw:true})
  }

////////////////////////////////////////////////////////////
////비밀번호 재확인 입력 함수////////////////////////////////
  const onChangePwRe=(e)=>{
    let pwSame ='';
    if(e.target.value===''){
      pwSame='';
    }
    else{
      if(e.target.value===field.비밀번호){
        pwSame=true;
      }
      if(e.target.value!==field.비밀번호){
        pwSame=false;
      }
      setField({...field, 비밀번호중복:e.target.value, isPwSame:pwSame});
    }



  }
  const onFocusPwRe=()=>{
    setField({...field, showPwRe:true})
  }

////////////////////////////////////////////////////////////
////이름 입력 함수//////////////////////////////////////////
  const onChangeName=(e)=>{
    const regExp= /[^A-Za-z가-힣ㄱ-하-ㅣ\s]/g;
    let name = '';
    //console.log(e.target.value.toString().replace(regExp,''))
    name = e.target.value.toString().replace(regExp,'');
    setField({...field, 이름:name});
  }

  ////////////////////////////////////////////////////////////
  /////이메일 입력 함수////////////////////////////////////////
  const onChangeEmail =(e)=>{
    const regExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/g;
    let email= '';
    if(regExp.test(e.target.value)){
      email = true;
    }
    else{
      email = false;
    }
    setField({...field, 이메일:e.target.value, 이메일확인:email});
  }
  const onClickEmail=(e)=>{
    e.preventDefault();
    if(field.아이디===''){
      modalShowFn('이메일을 입력하세요.');
      setField({...field, 이메일중복확인:false});
    }
    else{
      if(!field.이메일확인){
        modalShowFn('올바른 이메일 형식을 입력해주세요.')
        setField({...field, 이메일중복확인:false});
      }
      else{
        let imsi =[];
        for(let i=0; i<localStorage.length; i++){
          imsi.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        let result = imsi.filter((item)=>item.이메일===field.이메일);
      
        if(result.includes(true)){
          modalShowFn('중복된 이메일입니다. 다른 이메일을 사용해주세요.');
        }
        else{
          modalShowFn('사용가능한 이메일입니다.');
          setField({...field, 이메일중복확인:true});
        }        
      }
    }
  }

  ////////////////////////////////////////////////////////////
  /////전화번호 입력 함수//////////////////////////////////////
  const onChangePhone = (e) => {
    const regExp1 = /[^0-9]/g;
    const regExp2 = /^01[0|6|7|8|9]+\d{3,4}\d{4}$/;
    let ph = '';
    let phOk = '';
    ph = e.target.value.toString().replace(regExp1,'');
    if(regExp2.test(ph)){
      phOk=true;
    }
    else{
      phOk=false;
    }

    setField({
      ...field, 
      휴대폰:ph, 
      휴대폰확인:phOk,
      isDisabledHp:!phOk,
      휴대폰중복확인:false,
    });
  }
  const onClickHp =(e)=>{
    e.preventDefault();
    let num = Math.floor(Math.random()*900000+100000).toString();
    setField({
      ...field, 
      isShowHp:true, 
      인증번호:num,
      인증확인번호:'',
      isDisabledHpInput:false,
      isDisabledHpBtn:false,
      isClassHp1:false,
      isClassHp2:false,
      isShowHpSpan:true
    });
    modalShowFn('인증번호가 전송되었습니다.');
  }
  const onMouseDownHp=(e)=>{
    clearInterval(field.setId);
    setField({field, isShowHp:false});
  }
  const timerCount=()=>{
    let sec = 59;
    let min = 2;
    let setId =0;

    setId = setInterval(()=>{
      sec--;
      if(sec<=0){
        sec=59;
        min--;
        if(min<0){
          clearInterval(setId);
          sec=0;
          min=0;
        }
      }
      setField({...field, seconds:sec, minutes:min, setId:setId});
    },1000)
  }
  useEffect(()=>{
    field.isShowHp && timerCount();
  },[field.isShowHp]);
  //[이 안에 든 내용이]바뀌면 실행해라
  const onChangeHpNum=(e)=>{
    clearInterval(field.setId);
    setField({...field, 인증확인번호:e.target.value});
  }
  const onClickHpConfirm=(e)=>{
    e.preventDefault();
    if(field.인증번호===field.인증확인번호){
      modalShowFn('인증되었습니다.');
      setField({
        ...field,
        isShowHp:true, 
        isDisabledHpInput:true,
        isDisabledHpBtn:true,
        isClassHp1:true,
        isClassHp2:true,
        인증확인번호:'',
        isShowHpSpan:false,
        setId:0,
        휴대폰중복확인:true
      });
    }
    else{
      setField({...field, 휴대폰중복확인:false});
      modalShowFn('인증번호를 다시 확인해주세요.');
    }
  }

  
  ////////////////////////////////////////////////////////////
  ///////주소 입력 함수///////////////////////////////////////
  const onClickAddress=(e)=>{
    e.preventDefault();
    setField({...field, isShowAddress:true});
  };
  const onChangeAddress1=(e)=>{
    setField({...field, 주소1:e.target.value});
  };
  const onChangeAddress2=(e)=>{
    setField({...field, 주소2:e.target.value})
  };
  const sytlePost = {
    position:'fixed',
    top:'50%',
    left:'50%',
    width:'420px',
    height:'500px',
    marginLeft:'-210px',
    marginTop:'-250px',
    background:'#fff',
    border:'1px solid #ccc',
    zIndex: '2'
  };
  const onCompeletePost=(data)=>{
    console.log(data);
    console.log(data.address);
    console.log(data.jibunAddress);
    console.log(data.zonecode);

    setField({...field, 주소1:data.address});
  };

  //////////////////////////////////////////////////////
  //////젠더 버튼 //////////////////////////////////////
  const onChangeGender=(e)=>{
    setField({...field, 성별:e.target.value});
  };

	//////////////////////////////////////////////////////////////
  //////생년월일 입력 함수 //////////////////////////////////////
	const onChangeYear=(e)=>{
		const regExp = /[^0-9]/g;
		let replace = e.target.value.trim().replace(regExp,'');
		setField({...field, 생년:replace});
	};
	const onChangeMonth=(e)=>{
		const regExp = /[^0-9]/g;
		let replace = e.target.value.trim().replace(regExp,'');
		setField({...field, 생월:replace});
	};
	const onChangeDate=(e)=>{
		const regExp = /[^0-9]/g;
		let replace = e.target.value.trim().replace(regExp,'');
		setField({...field, 생일:replace});
	};
	const birthDayCheck=()=>{
		const {생년, 생월, 생일}=field;
		const regExpYear = /^(?:19[0-9][0-9]|2[0-9][0-9][0-9])$/g;
		const regExpMonth = /^(?:0?[1-9]|1[0-2])$/g;
		const regExpDate = /^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g;
		
		const nowYear = new Date().getFullYear();
		const nowMonth = new Date().getMonth();
		const nowDate = new Date().getDate();
		const today = new Date(nowYear, nowMonth, nowDate);

		const errorY = '태어난 년도 4자리를 정확히 입력해주세요.';
		const errorM = '태어난 월을 정확히 입력해주세요.';
		const errorD = '태어난 일을 정확하게 입력해주세요.';
		const errorF = '미래의 날짜가 입력되었어요. 다시 한 번 확인해주세요.';
		const errorO = '생년월일을 다시 한 번 확인해주세요.';
		const errorU = '만 14세 미만은 가입이 불가합니다.';

		if(생년==='' && 생월==='' && 생일===''){
			return;
		}
		else{
			if(regExpYear.test(생년)===false){ //생년 체크
				setField({...field, isShowBirthError:true, isShowBirthText:errorY});
				return;
			}
			else{//생년 통과하면
				setField({...field, isShowBirthError:false, isShowBirthText:''});
				if(regExpMonth.test(생월)===false){///생월체크
					setField({...field, isShowBirthError:true, isShowBirthText:errorM});
					return;
				}
				else{//생월 통과하면
					setField({...field, isShowBirthError:false, isShowBirthText:''});
					if(regExpDate.test(생일)===false){//생일체크
						setField({...field, isShowBirthError:true, isShowBirthText:errorD});
						return;
					}
					else{//전부 통과하면
						setField({...field, isShowBirthError:false, isShowBirthText:''});

						const birthDay = new Date(생년, 생월, 생일);
						//120년전, 14년전이니까 둘 다 -가 맞음. 미래가일수록 숫자가 크다
						const over120 = new Date(nowYear-120, nowMonth, nowDate);
						const under14 = new Date(nowYear-14, nowMonth, nowDate);

						if(birthDay>today){
							setField({...field, isShowBirthError:true, isShowBirthText:errorF}); return;
						}
						else if(over120>today){
							setField({...field, isShowBirthError:true, isShowBirthText:errorO}); return;
						}
						else if(under14<today){
							setField({...field, isShowBirthError:true, isShowBirthText:errorU}); return;
						}
						else{setField({...field, isShowBirthError:false, isShowBirthText:''})};
					}
				}
			}
		}
	}
	const onBlurBirth=()=>{
		birthDayCheck();
	}

  //////////////////////////////////////////////////////////////
  //////추가입력사항////////////////////////////////////////////
  const onChangeRadioAddInput=(e)=>{
    setField({...field, isShowAddInput:true, 추가입력사항선택:e.target.value});
  } 
  const onChangeAddInput = (e) =>{
    setField({...field, 추가입력사항:e.target.value});
  }

  ///////////////////////////////////////////////////////////////
  ///////이용약관 동의 //////////////////////////////////////////
  const onChangeServiceAll =(e)=> {
    if(e.target.checked){
      setField({...field, 이용약관동의:이용약관});
    }
    else{
      setField({...field, 이용약관동의:[]});
    }
  }

  const onChangeService =(e)=>{
    let imsi = [];
    if(e.target.checked===true){
      if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의'){ //chk4
        setField({...field, 이용약관동의: [...field.이용약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의','SNS','이메일'] });
      }
      else if(field.이용약관동의.includes('SNS') && e.target.value==='이메일'){
        setField({...field, 이용약관동의: [...field.이용약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의','이메일'] });
      }
      else if(field.이용약관동의.includes('이메일') && e.target.value==='SNS'){
        setField({...field, 이용약관동의: [...field.이용약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의','SNS'] });
      }
      else{
        setField({...field, 이용약관동의:[...field.이용약관동의, e.target.value]});
      }
      
    }
    else{
      if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의'){ //chk4
        imsi = field.이용약관동의.filter((item)=> item !== e.target.value);
        imsi = imsi.filter((item)=> item !== 'SNS');
        imsi = imsi.filter((item)=> item !== '이메일');
        setField({...field, 이용약관동의: imsi });
      } 
      else if( field.이용약관동의.includes('SNS') && e.target.value==='이메일' ){
        imsi = field.이용약관동의.filter((item)=> item !== '이메일');
        imsi = imsi.filter((item)=> item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의');
        setField({...field, 이용약관동의: imsi });
      } 
      else if( field.이용약관동의.includes('이메일') && e.target.value==='SNS' ){
        imsi = field.이용약관동의.filter((item)=> item !== 'SNS');
        imsi = imsi.filter((item)=> item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의');
        setField({...field, 이용약관동의: imsi });
      } 
      else{
        imsi = field.이용약관동의.filter((item)=>item !== e.target.value);
        setField({...field, 이용약관동의:imsi});
      }
    }
  }

  const onSubmitMember=(e)=>{
    e.preventDefault();

    const {아이디,비밀번호,비밀번호확인,이름,이메일,휴대폰,주소1,주소2,이용약관동의,아이디중복확인,이메일중복확인,휴대폰중복확인,성별,생년,생월,생일,추가입력사항,추가입력사항선택} = field;
    let cnt = 0;
    이용약관동의.map((item)=>{if(item.includes('필수')){cnt++;}})

    if(아이디==='' || 비밀번호==='' || 비밀번호확인===''|| 이름==='' || 이메일==='' || 휴대폰==='' || 주소1==='' || 주소2==='' || 아이디중복확인===false || 이메일중복확인===false || 휴대폰중복확인===false){

      if(아이디===''){modalShowFn('아이디를 입력해주세요.')}
      else if(비밀번호===''){modalShowFn('비밀번호를 입력해주세요.')}
      else if(비밀번호확인===''){modalShowFn('비밀번호 확인을 입력해주세요.')}
      else if(이름===''){modalShowFn('이름을 입력해주세요.')}
      else if(이메일===''){modalShowFn('이메일을 입력해주세요.')}
      else if(휴대폰===''){modalShowFn('전화번호를 입력해주세요.')}
      else if(주소1==='' || 주소2===''){modalShowFn('주소를 입력해주세요.')}
      else if(아이디중복확인===false){modalShowFn('아이디 중복확인을 해주세요.')}
      else if(이메일중복확인===false){modalShowFn('이메일 중복확인을 해주세요.')}
      else if(휴대폰중복확인===false){modalShowFn('휴대폰중복확인을 해주세요.')}
      
      return
    }
    else{
      if(cnt<3){
        modalShowFn(`이용약관동의 필수사항을 모두 동의하셔야합니다. ${3-cnt}개를 마저 동의해주세요.`)
        return;
      }
      else{
        let imsi = {
          아이디:아이디,
          비밀번호:비밀번호,
          이름:이름,
          이메일:이메일,
          휴대폰:휴대폰,
          주소:`${주소1} ${주소2}`,
          성별:성별,
          생년월일:`${생년}-${생월}-${생일}`,
          추가입력사항:`${추가입력사항선택}:${추가입력사항}`,
          이용약관동의:이용약관동의
        };
        localStorage.setItem(imsi.아이디, JSON.stringify(imsi));
        modalShowFn('회원가입이 완료되었습니다.');
        setField({...field,
          아이디:'',
          아이디중복확인:false,
          showId:false,
          isErrorId:'',
      
          비밀번호:'',
          showPw:false,
          isErrorPw1:'',
          isErrorPw2:'',
          isErrorPw3:'',
      
          비밀번호중복:'',
          showPwRe:false,
          isPwSame:'',
      
          이름:'',
      
          이메일:'',
          이메일확인:'',
          이메일중복확인:false,
      
          휴대폰:'',
          휴대폰중복확인:false,
          휴대폰확인:'',
          인증번호:'',
          인증확인번호:'',
          isDisabledHp:true,
          isShowHp:false,
          minutes:2,
          seconds:59,
          setId:0,
          isDisabledHpInput:false,
          isDisabledHpBtn:false,
          isClassHp1:false,
          isClassHp2:false,
          isShowHpSpan:true,
      
          주소1:'',
          주소2:'',
          isShowAddress:false,
      
          성별:'선택안함',
      
          생년:'',
          생월:'',
          생일:'',
          isShowBirthText:'',
          isShowBirthError:false,
      
          추가입력사항선택:'',
          isShowAddInput:false,
          추가입력사항:'',
      
          이용약관동의:[],
        })
      }

    }

  }

  return (
    <section id="member">
      <div className="container">
        <div className="wrap">
            {/* <!-- 타이틀 --> */}
            <div className="title">
                <h2>회원가입</h2>
            </div>
            {/* <!-- 전송할 회원가입폼 --> */}
            <div className="content">
              <form id="member" name="member" autoComplete="off" method="post" action="response.php">
                <ul id="memberForm">
                  <li>
                    <h3><i>*</i><span>필수입력사항</span></h3>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>아이디</span><i>*</i></label>
                    </div>
                    <div className="right">
                      <input 
                      type="text" 
                      id="inputId" 
                      name="아이디" 
                      placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" 
                      maxLength="20"
                      onChange={onChangeId}
                      onFocus={onFocusId}
                      input={field.아이디}
                      
                      />
                      <button onClick={onClickId} className="id-double-btn" type='button'>중복확인</button>
                      {
                        field.showId && (
                        <div className="guide-text guide-id">
                          <p className={field.isErrorId=== '' ? '' : (field.isErrorId===false ? 'error' : 'success')}>6자 이상의 영문 혹은 영문과 숫자를 조합</p>
                          <p>아이디 중복확인</p>
                        </div>
                        )
                      }
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>비밀번호</span><i>*</i></label>
                    </div>
                    <div className="right">
                      <input 
                      type="password" 
                      id="inputPw" 
                      name="inputPw" 
                      placeholder="비밀번호를 입력해주세요" 
                      maxLength="20" 
                      onChange={onChangePw}
                      onFocus={onFocusPw}
                      input={field.비밀번호}
                      />
                      {
                      field.showPw && (
                        <div className="guide-text guide-pw">
                          <p className={field.isErrorPw1===''?'':(field.isErrorPw1===false?'error':'success')}>10자 이상 입력</p>
                          <p className={field.isErrorPw2===''?'':(field.isErrorPw2===false?'error':'success')}>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>
                          <p className={field.isErrorPw3===''?'':(field.isErrorPw3===false?'error':'success')}>동일한 숫자 3개 이상 연속 사용 불가</p>
                        </div>
                      )
                      }
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>비밀번호확인</span><i>*</i></label>
                    </div>
                    <div className="right">
                      <input 
                      type="password" 
                      id="inputPwConfirm" 
                      name="inputPwConfirm" 
                      placeholder="비밀번호를 한번 더 입력해주세요" 
                      maxLength="20" 
                      onFocus={onFocusPwRe}
                      onChange={onChangePwRe}
                      input={field.비밀번호중복}
                      />
                      <div className="guide-text guide-password-confirm">
                       {
                         field.showPwRe && ( <p className={field.비밀번호===''?'':(field.isPwSame===false? 'error' :'success')}>동일한 비밀번호를 입력해주세요.</p>)
                       }
                      </div>                    
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>이름</span><i>*</i></label>
                    </div>
                    <div className="right">
                      <input 
                      type="text" 
                      id="inputName" 
                      name="inputName" 
                      placeholder="이름을 입력해주세요" 
                      maxLength="30" 
                      onChange={onChangeName}
                      value={field.이름}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>이메일</span><i>*</i></label>
                    </div>
                    <div className="right">
                      <input 
                      type="email" 
                      id="inputEmail" 
                      className="" 
                      name="inputEmail" 
                      placeholder="예: marketkurly@kurly.com" 
                      maxLength="50" 
                      onChange={onChangeEmail}
                      value={field.이메일}
                      />
                      <button onClick={onClickEmail} className="email-double-btn" type='button'>중복확인</button>
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>휴대폰</span><i>*</i></label>
                    </div>
                    <div className="right">
                      <input 
                      type="text" 
                      id="inputPhone" 
                      name="inputPhone" 
                      placeholder="숫자만 입력해주세요" 
                      maxLength="11" 
                      onChange={onChangePhone}
                      value={field.휴대폰}
                      />
                      <button 
                        onMouseDown={onMouseDownHp}
                        onClick={onClickHp} 
                        disabled={field.isDisabledHp}
                        type='button'
                        className={field.isDisabledHp ? "phone-btn" : "phone-btn on"}>
                        인증번호 받기
                      </button>
                       {
                         field.isShowHp && (
                          <>
                            <input 
                            type="text" 
                            id="inputPhoneok" 
                            name="inputPhoneok" 
                            className={field.isClassHp1?'ok':''}
                            placeholder="인증번호를 입력해주세요" 
                            maxLength="6" 
                            disabled={field.isDisabledHpInput} 
                            onChange={onChangeHpNum}
                            value={field.인증확인번호}
                            />

                            <button 
                            type='button'
                            className={field.isClassHp2?'phone-btn phone-ok-btn ok':'phone-btn phone-ok-btn on'} 
                            disabled={field.isDisabledHpBtn}
                            onClick={onClickHpConfirm}
                            >인증번호 확인</button>
                            {
                              field.isShowHpSpan && (
                                <span className="count-timer">{field.minutes}:{field.seconds<10?`0${field.seconds}`:field.seconds}</span>
                              )
                            }
                          </>
                         )
                       }

                    </div>
                  </li>
                  <li className="address">
                    <div className="left">
                      <label><span>주소</span><i>*</i></label>
                    </div>
                    <div className="right">
                      {
                        field.isShowAddress && (
                          <>
                            <input onChange={onChangeAddress1} value={field.주소1} type="text" id="inputAddress1" name="inputAddress1" placeholder="검색주소" />
                            <input onChange={onChangeAddress2} value={field.주소2} type="text" id="inputAddress2" name="inputAddress2" placeholder="세부주소를 입력하세요" />
                          </>
                        )
                      }
                      <button onClick={onClickAddress} id="addressBtn" className="address-btn" title="주소검색"><span><img src="./images/ico_search.svg" alt="" /><i className="address-text">주소검색</i></span></button>
                      <div className="guide-text guide-transfer on">
                        <h4> </h4>
                      </div>
                      <p className="address-guidetext">배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                      {/* 카카오 주소검색 패키지 컴포넌트 모달 */}
                      {
                        field.isShowAddress &&(
                          <div>
                            <Postcode sytle={sytlePost} onComplete={onCompeletePost}/>
                          </div>
                        )
                      }
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>성별</span></label>
                    </div>
                    <div className="right gender">
                      <label htmlFor="male">
                        <input onChange={onChangeGender} checked={field.성별.includes('남자')} type="radio" id="male" name="gendeer" value="남자" />
                        <span> 남자</span>
                      </label>                    
                      <label htmlFor="female">
                        <input onChange={onChangeGender} checked={field.성별.includes('여자')} type="radio" id="female" name="gendeer" value="여자" />
                        <span> 여자</span>
                      </label>                    
                      <label htmlFor="none">
                        <input onChange={onChangeGender} checked={field.성별.includes('선택안함')} type="radio" id="none" name="gendeer" value="선택안함" />
                        <span> 선택안함</span>
                      </label>                    
                    </div>
                  </li>
                  <li>
                    <div className="left">
                      <label><span>생년월일</span></label>
                    </div>
                    <div className="right">
                      <div className="date-box">
                        <ul>
                          <li>
														<input 
															type="text" 
															id="year" 
															name="year" 
															placeholder="YYYY" 
															maxLength="4"
															onChange={onChangeYear}
															onBlur={onBlurBirth}
															value={field.생년}
														/>
													</li>
                          <li><span>/</span></li>
                          <li>
														<input 
															type="text" 
															id="month" 
															name="month"  
															placeholder="MM" 
															maxLength='2'
															onChange={onChangeMonth}
															onBlur={onBlurBirth}
															value={field.생월}
														/>
													</li>
                          <li><span>/</span></li>
                          <li>
														<input 
															type="text" 
															id="date" 
															name="date"  
															placeholder="DD" 
															maxLength='2' 
															onChange={onChangeDate}
															onBlur={onBlurBirth}
															value={field.생일}
														/>
														</li>
                        </ul>
                      </div>
                      <div className="guide-text guide-birthday-confirm">
                        {
													field.isShowBirthError && (
														<p className="error">{field.isShowBirthText}</p>
													)
												}
                      </div>  
                    </div>
                  </li>
                  <li className="add-input-item">
                    <div className="left">
                      <label><span>추가입력 사항</span></label>
                    </div>
                    <div className="right gender add">
                      
                      <label htmlFor="add1">
                        <input type="radio" id="add1" name="add" className="add-radio" onChange={onChangeRadioAddInput} value="추천인아이디" checked={field.추가입력사항선택.includes('추천인아이디')}/>
                        <span>추천인 아이디</span>
                      </label>                    
                      <label htmlFor="add2">
                        <input type="radio" id="add2" name="add" className="add-radio" onChange={onChangeRadioAddInput} value="참여이벤트" checked={field.추가입력사항선택.includes('참여이벤트')}/>
                        <span>참여 이벤트</span>
                      </label>

                      <div className="add-input-box">
                        {
                          field.isShowAddInput && (
                            <>
                            <input type="text" id="inputAdd" name="inputAdd" placeholder="" onChange={onChangeAddInput}/>
                            <p>
                              추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br />
                              가입 이후, 수정이 불가합니다.<br/>
                              대소문자 및 띄어쓰기에 유의해주세요.
                            </p>
                            </>
                          )
                        }
                      </div>                        
                    </div>
                  </li>
                  <li>
                    <hr />
                  </li>
                  {/* <!-- 약관동의 : 체크박스 --> */}
                  <li className="check-box">
                    <div className="left">
                      <label><span>이용약관동의<i>*</i></span></label>
                    </div>
                    <div className="right service">

                      <ol>
                        <li>
                          <label htmlFor="chkAll">
                            <input type="checkbox" id="chkAll" name="chkAll" value="전체동의합니다." onChange={onChangeServiceAll} checked={field.이용약관동의.length>=7?true:false} />
                            <span>전체동의합니다.</span>
                          </label>
                          <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                        </li>
                        <li className="view-box">
                          <label htmlFor="chk1">
                            <input type="checkbox" id="chk1" name="chk1" className="chkbox-btn" value="이용약관동의(필수)" onChange={onChangeService} checked={field.이용약관동의.includes('이용약관동의(필수)')}/>
                            <span>이용약관동의<i>(필수)</i></span>
                          </label>
                          <span  className="view-btn-box">
                            <a href="#!" className="view-btn" title="약관보기">약관보기<i>&gt;</i></a>
                          </span>
                        </li>
                        <li className="view-box">
                          <label htmlFor="chk2">
                            <input type="checkbox" id="chk2" name="chk2" className="chkbox-btn" value="개인정보수집·이용(필수)" onChange={onChangeService} checked={field.이용약관동의.includes('개인정보수집·이용(필수)')}/>
                            <span>개인정보 수집·이용<i>(필수)</i></span>
                          </label>
                          <span  className="view-btn-box">
                            <a href="#!" className="view-btn" title="약관보기">약관보기<i>&gt;</i></a>
                          </span>
                        </li>
                        <li className="view-box">
                          <label htmlFor="chk3">
                            <input type="checkbox" id="chk3" name="chk3" className="chkbox-btn" value="개인정보수집·이용(선택)" onChange={onChangeService} checked={field.이용약관동의.includes('개인정보수집·이용(선택)')}/>
                            <span>개인정보 수집·이용<i>(선택)</i></span>
                          </label>
                          <span  className="view-btn-box">
                            <a href="#!" className="view-btn" title="약관보기">약관보기<i>&gt;</i></a>
                          </span>
                        </li>
                        <li>
                          <label htmlFor="chk4">
                            <input type="checkbox" id="chk4" name="chk4" className="chkbox-btn" value="무료배송, 할인쿠폰 등 혜택/정보 수신 동의" onChange={onChangeService} checked={field.이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의')} />
                            <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의<i>(선택)</i></span>
                          </label>
                          <dl>
                              <dd>
                                <label htmlFor="chk5">
                                  <input type="checkbox" id="chk5" name="chk5" className="chkbox-btn" value="SNS" onChange={onChangeService} checked={field.이용약관동의.includes('SNS')}/>
                                  <span>SNS</span>
                                </label>
                                <label htmlFor="chk6">
                                  <input type="checkbox" id="chk6" name="chk6" className="chkbox-btn" value="이메일" onChange={onChangeService} checked={field.이용약관동의.includes('이메일')}/>
                                  <span>이메일</span>
                                </label>
                              </dd>
                              <dt>
                                  <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                              </dt>
                          </dl>
                        </li>
                        <li>
                          <label htmlFor="chk7">
                            <input type="checkbox" id="chk7" name="chk7" className="chkbox-btn" value="본인은 만 14세 이상입니다.(필수)" onChange={onChangeService} checked={field.이용약관동의.includes('본인은 만 14세 이상입니다.(필수)')}/>
                            <span>본인은 만 14세 이상입니다.<i>(필수)</i></span>
                          </label>
                        </li>
                      </ol>                  
                    </div>              
                  </li>
                  <li className="bottom-line">
                    <hr />
                  </li>                
                  <li className="button-box">
                    <button type="submit" className="submit-btn" onClick={onSubmitMember}>가입하기</button>
                  </li>
                </ul>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};

MemberComponent.defaultProps = {
  성별: ['남자', '여자', '선택안함'],
  추가입력사항:['추천인아이디','참여이벤트'],
  이용약관:[
    '전체동의합니다.',
    '이용약관동의(필수)',
    '개인정보수집·이용(필수)',
    '개인정보수집·이용(선택)',
    '무료배송, 할인쿠폰 등 혜택/정보 수신 동의',
    'SNS',
    '이메일',
    '본인은 만 14세 이상입니다.(필수)'
  ]
}

export default MemberComponent;