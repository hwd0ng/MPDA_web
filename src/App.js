import './App.css';
import React, { useState } from "react";
import logo from './assets/MPDA_logo.jpg';
import menu1 from './assets/brain.png';
import menu2 from './assets/pill.png';
import menu3 from './assets/hosiptal.png';
import search from './assets/search.png';
import tab from './assets/tab.png';

function App() {
  const [selectedOption, setSelectedOption] = useState(""); // 선택된 옵션 상태 관리
  const options = ["치매", "조현병"]; // 드롭다운에 표시할 옵션들

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // 선택된 값을 업데이트
  };


  return (
    <div className="App">
      <header className='header'>
        <img src= { tab } alt='tab icon' className='tabIcon'/>
        <h1 className='header-title'>MPDA</h1>
        <img src= { search } alt='search icon' className='searchIcon'/>
      </header>

      <main className='main-page'>
        <div className='intro-section'>
          <img src={ logo } alt='MPDA Logo' className='logo'/>
          <div className='intro-text'>
            <h2>MPDA (Mental Patient Decision Aids) </h2>
            <p>"정신질환 정보를 한 곳에서, 당신의 더 나은 결정을 돕습니다."</p>
            <hr></hr>
            <button className='btn-learn-more'>MPDA 소개</button>
            <p>- 환자의 의사결정능력 향상을 통해 적극적이고 주체적인 질환 관리를 지원</p>
            <p>- 치매 및 조현병 관련 신뢰할 수 있는 정보를 제공하여 의료진과 환자 간 의사소통을 증진</p>
            <p>- 근거 기반의 정보 및 도구를 통해 맞춤형 의사결정 옵션을 제시 </p>
            <select id="decision-box" className="custom-select" value={selectedOption} onChange={handleChange}>
              <option value=""> 의사결정도구를 선택해주세요</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='features-section'>
          <div className='feature'>
          <img src={ menu1 } alt='menu1' className='menu1'/>
            <p>정신질환 이해하기</p>
          </div>

          <div className='feature'>
          <img src={ menu2 } alt='menu2' className='menu2'/>
            <p>치료 방법</p>
          </div>

          <div className='feature'>
          <img src={ menu3 } alt='menu3' className='menu3'/>
            <p>관리 및 예방법</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
