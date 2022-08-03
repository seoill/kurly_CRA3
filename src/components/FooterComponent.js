import React from 'react';

const FooterComponent = () => {
  return (
    <footer id="footer">
      <div className="top">
        <div className="container">
          <div className="info-box">
            <div className="left">
              <h2>고객행복센터</h2>
              <div className="cs1 cs">
                <span className="tit">1644-1107</span>
                <dl className="list">
                  <dt>365고객센터</dt>
                  <dd>오전 7시 - 오후 7시</dd>
                </dl>
              </div>
              <div className="cs2 cs">
                <a href="#!" className="tit">카카오톡 문의</a>
                <dl className="list">
                  <dt>365고객센터</dt>
                  <dd>오전 7시 - 오후 7시</dd>
                </dl>
              </div>
              <div className="cs3 cs">
                <a href="#!" className="tit">1:1 문의</a>
                <dl className="list">
                  <dt>24시간 접수 가능</dt>
                  <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
                </dl>
              </div>
              <div className="cs4 cs">
                <a href="#!" className="tit">대량주문 문의</a>
                <dl className="list">
                  <p>비회원의 경우 메일로 문의 바랍니다.</p>
                </dl>
              </div>
            </div>
            <div className="right">
              <ul className="shortcut">
                <li><a href="#!">컬리소개</a></li>
                <li><a href="#!">컬리소개영상</a></li>
                <li><a href="#!">인재채용</a></li>
                <li><a href="#!">이용약관</a></li>
                <li><a href="#!">개인정보처리방침</a></li>
                <li><a href="#!">이용안내</a></li>
              </ul>
              <ul className="company-ex">
                <li>
                  <p>법인명 (상호): 주식회사 컬리 | 사업자 등록번호 : 261-81-23567 <a href="#!">사업자정보 확인</a></p>
                </li>
                <li>
                  <p>통신판매업: 제 2018-서울강남-01646호 | 개인정보보호책임자 : 이원준</p>
                </li>
                <li>
                  <p>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 김슬아</p>
                </li>
                <li>
                  <p>입점문의:<a href="#!">입점문의하기</a> | 마케팅제휴 : <a href="#!">business@kurlycorp.com</a></p>
                </li>
                <li>
                  <p>채용문의:<a href="#!">recruit@kurlycorp.com</a></p>
                </li>
                <li>
                  <p>팩스:070-7500-6098 | 이메일:<a href="#!"> help@kurlycorp.com</a></p>
                </li>
                <li>
                  <p>대량주문 문의:<a href="#!">kurlygift@kurlycorp.com</a></p>
                </li>
              </ul>
              <ul className="company-sns">
                <li><a href="#!"><img src="./images/ico_instagram.png" alt="insta icon"/></a></li>
                <li><a href="#!"><img src="./images/ico_fb.png" alt="facebook icon"/></a></li>
                <li><a href="#!"><img src="./images/ico_blog.png" alt="blog icon"/></a></li>
                <li><a href="#!"><img src="./images/ico_naverpost.png" alt="naverpost icon"/></a></li>
                <li><a href="#!"><img src="./images/ico_youtube.png" alt="youtube icon"/></a></li>
              </ul>
            </div>
          </div>
          <div className="icon-box">
            <div className="left">
              <a href="#!">
                <img src="./images/isms_220310.png" alt="isms icon"/>
                <p className="txt">
                  [인증범위]마켓컬리 쇼핑몰 서비스 개발·운영<br/>(심사받지 않은 물리적 인프라 제외)<br/>[유효기간]2022.01.19~2025.01.18
                </p>
              </a>
            </div>
            <div className="center">
              <a href="#!">
                <img src="./images/logo_eprivacyplus.png" alt="eprivacy icon"/>
                <p className="txt">
                  개인정보보호 우수 웹사이트·<br/>개인정보처리시스템인증(ePRIVACYPLUS)
                </p>
              </a>
            </div>
            <div className="right">
              <a href="#!">
                <img src="./images/logo_payments.png" alt="payments icon"/>
                <p className="txt">
                  고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한<br/>토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
        <p>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
        <em>© KURLY CORP. ALL RIGHTS RESERVED</em>
      </div>
    </footer>
  )
};

export default FooterComponent;