import React, { useState, useCallback, useEffect, useRef } from 'react';
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header"

import "./right.css"

import img_1 from './KIPRIS/KIPRIS_1.png';
import img_2 from './KIPRIS/KIPRIS_2.png';
import img_3 from './KIPRIS/KIPRIS_3.png';
import img_4 from './KIPRIS/KIPRIS_4.png';
import img_5 from './KIPRIS/KIPRIS_5.png';
import img_6 from './KIPRIS/KIPRIS_6.png';
import img_7 from './KIPRIS/KIPRIS_7.png';
import img_8 from './KIPRIS/KIPRIS_8.png';


const Right = () => {

    return (
        <div>
            <Header />
            특허 사전조사 방법 - 특허명세서 작성법 - 특허명세서 예시들 (순서대로 페이지를 길게 작성)
            <br/>
            특허 사전조사 방법 : 발명이해 - 키워드 선정- 키워드 확장, 키워드 보안 - 검색식 작성
            <br/>
            키워드 확장, 키워드 보안 : <br/>
            키워드 확장 : 누락되는 특허를 방지하기 위해 키워드 선택시 동의어, 유사어를 키워드에 포함시키는 작업 (영어- 한국어의 경우 동의어가 많을 수 있음 ex) 자동차, 차량, 승용차) <br/>
            키워드 보안 : 노이즈를 줄이기 위해 키워드를 제한하는 작업 (검색범위 좁히기 ex) 차, 엔진) <br/>
            * : AND
            + : OR
            ! : 키워드를 포함하지 않는경우
            ^1~^3 : 뛰어쓰기

            <br/>
            <a href='http://dtox.patent.go.kr/xmlconverter/sample/release/01_patent_ko.docx' className='download'>다운로드</a>
            <br/>
            <a href="http://kportal.kipris.or.kr/kportal/search/search_frn_pct.do" className='kipris'>KIPRIS (한국특허 정보원)</a>
            <br/>
            <div className='search_img'>
                <div className='line_1'>
                    <img className="img_1" src={img_1}></img>
                    <span className='right_row'>화살표</span>
                    <img className="img_2" src={img_2}></img>
                </div>
                <br/>
                <br/>
                <div className='line_2'>
                    <img className="img_3" src={img_3}></img>
                    <span className='right_row'>화살표</span>
                    <img className="img_4" src={img_4}></img>
                </div>
                <br/>
                <br/>
                <div className='line_3'>
                    <img className="img_5" src={img_5}></img>
                    <span className='right_row'>화살표</span>
                    <img className="img_6" src={img_6}></img>
                </div>
                <br/>
                <br/>
                <div className='line_4'>
                    <img className="img_7" src={img_7}></img>
                    <span className='right_row'>화살표</span>
                    <img className="img_8" src={img_8}></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Right


// http://dtox.patent.go.kr/xmlconverter/sample/release/01_patent_ko.docx 
// 다운로드할 수 있는 링크
// http://kportal.kipris.or.kr/kportal/search/search_frn_pct.do
// 키프리스 무료 특허 정보사이트 링크