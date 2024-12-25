import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Popol.css'
import { GrClose } from "react-icons/gr";

function Popol() {
  // 각 포트폴리오 항목의 상태와 더보기/닫기 기능을 관리하기 위한 상태
  const [viewVisible, setViewVisible] = useState(null);

  // 각 포트폴리오 항목 데이터
  const portfolios = [
    {
      title: "React 기반 쇼핑몰 사이트 개발 및 유지보수",
      description: "쇼핑몰 사이트 개발 및 유지보수 업무. 3명의 프론트, 3명의 백엔드 개발자와 협업.",
      techStack: ["React", "Node.js", "REST API", "HTML", "CSS"],
      projectDescription: "쇼핑몰 사이트 개발 및 유지보수 업무.",
      techUsed: "React, Node.js, Html, Css, REST API",
      participants: "6명(FE6, BE3)",
      period: "2023.08 ~ 2024.09",
      link: "",
      linkDescription: "", 
      details: [
        { title: "1. REST API 개발 및 통신 연결", 
          items: [
            "Node.js를 이용하여 회원기능 백엔드 제작", 
            "백엔드를 수정하여 사용자의 정보를 로드하는 데 시간을 줄임",
            "기획자와 소통하며 사용자가 더 쉽게 접근할 수 있도록 아이디어 제안"] 
        },
        { title: "2. React 이용하여 화면 구성", 
          items: [
            "상세설명22", 
            "상세설명22"] 
          }
      ]
    },
    {
      title: "2023 국민대학교 졸업전시",
      description: "기존의 사이트를 참고하여 화면을 구성한다.",
      techStack: ["CSS", 'Html', "JavaScript"],
      projectDescription: "기존의 사이트를 참고하여 화면을 구성한다.",
      techUsed: "CSS, Html, JavaScript",
      participants: "3명(FE3)",
      period: "2023.02 ~ 2023.04",
      link: "",
      linkDescription: "",
      details: [
        { title: "1. 역할분배 및 ", 
          items: [
            "쉽게 찾아갈 수 있도록 작성 규칙 마련", 
            "CSS이름 작성에 유사성을 부여하여 작업속도 단축"] 
          }
      ]
    },
    {
      title: "회사 소개 사이트",
      description: "기존의 사이트를 참고하여 화면을 구성한다.",
      techStack: ["CSS", 'Html', "JavaScript"],
      projectDescription: "기존의 사이트를 참고하여 화면을 구성한다.",
      techUsed: "CSS, Html, JavaScript",
      participants: "3명(FE3)",
      period: "2023.02 ~ 2023.04",
      link: "https://kimjavan.github.io/project4_G/sub1.html",
      linkDescription: "프로젝트 링크",
      details: [
        { title: "1. 역할분배 및 ", 
          items: [
            "쉽게 찾아갈 수 있도록 작성 규칙 마련", 
            "CSS이름 작성에 유사성을 부여하여 작업속도 단축"] 
          }
      ]
    },
    {
      title: "STEAM 클론코딩",
      description: "기존의 사이트를 참고하여 화면을 구성한다.",
      techStack: ["CSS", 'Html', "JavaScript"],
      projectDescription: "기존의 사이트를 참고하여 화면을 구성한다.",
      techUsed: "CSS, Html, JavaScript",
      participants: "3명(FE3)",
      period: "2023.02 ~ 2023.04",
      link: "https://kimjavan.github.io/project4_G/sub1.html",
      linkDescription: "프로젝트 링크",
      details: [
        { title: "1. 역할분배 및 ", 
          items: [
            "쉽게 찾아갈 수 있도록 작성 규칙 마련", 
            "CSS이름 작성에 유사성을 부여하여 작업속도 단축"] 
          }
      ]
    },
    {
      title: "RIDI 클론코딩",
      description: "기존의 사이트를 참고하여 화면을 구성한다.",
      techStack: ["CSS", 'Html', "JavaScript","SCSS"],
      projectDescription: "기존의 사이트를 참고하여 화면을 구성한다.",
      techUsed: "CSS, Html, JavaScript, SCSS",
      participants: "1명(FE1)",
      period: "2023.02 ~ 2023.04",
      link: "https://kimjavan.github.io/project5/",
      linkDescription: "프로젝트 링크",
      details: [
        { title: "1. SCSS이용하여 파일 규칙 정리 및 관리", 
          items: [
            "쉽게 찾아갈 수 있도록 작성 규칙 마련", 
            "CSS이름 작성에 유사성을 부여하여 작업속도 단축"] 
          }
      ]
    },
    {
      title: "기존 사이트 리뉴얼(마녀공방)",
      description: "기존 사이트를 리뉴얼하여 화면을 구성하고 제작한다.",
      techStack: ["React", "CSS", 'Html', "JavaScript"],
      projectDescription: "기존 사이트를 리뉴얼하여 화면을 구성하고 제작한다.",
      techUsed: "React, CSS, Html, JavaScript",
      participants: "1명(FE1)",
      period: "2023.02 ~ 2023.04",
      link: "https://kimjavan.github.io/project6/",
      linkDescription: "프로젝트 링크",
      details: [
        { title: "1. 리액트 이용하여 화면을 구성하고 정보관리", 
          items: [
            "Redux를 이용하여 제품의 정보를 관리", 
            "React Bootstrap을 이용하여 빠르게 화면을 구성"] 
          }
      ]
    }
    // 다른 포트폴리오 항목을 추가할 수 있습니다.
  ];

  // 유닛 클릭 시 해당 항목의 상세 정보를 보이게 하는 함수
  const handleUnitClick = (index) => {
    setViewVisible(index);
  };

  // 닫기 버튼 클릭 시 해당 항목의 상세 정보를 숨기는 함수
  const handleCloseClick = () => {
    setViewVisible(null);
  };

  return (
    <div>
      <div className='main-popol-wrap'>
        <div>
          <p className='popol-title'>포트폴리오</p>
        </div>
        
        {/* 네비바 */}
        <div className='popol-btn-wrap'>
          <div className='popol-btn active'>
            <p>전체</p>
          </div>
          <div className='popol-btn'>
            <p>회사</p>
          </div>
          <div className='popol-btn'>
            <p>개인</p>
          </div>
        </div>

        {/* 포트폴리오 유닛 */}
        <div className='popol-unit-wrap'>
          {portfolios.map((portfolio, index) => (
            <div key={index} className='popol-unit-div' onClick={() => handleUnitClick(index)}>
              <div className='popol-unit-front-text'>
                <div className='po-title-text'>
                  <p>{portfolio.title}</p>
                </div>
                <div className='po-context-text'>
                  {portfolio.description}
                </div>
                <div className='front-index-wrap'>
                  {portfolio.techStack.map((tech, idx) => (
                    <div key={idx} className='front-index'>
                      <p className='front-inner-text'>{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* more-view-context */}
        {viewVisible !== null && (
          <div className='more-view-context'>
            <div className='more-scroll-div'>
              {/* 상단 */}
              <div className='top-title-and-close-wrap'>
                <p className='po-more-title'>{portfolios[viewVisible].title}</p>
                <div className='close-btn' onClick={handleCloseClick}>
                  <GrClose />
                </div>
              </div>

              {/* 중간 */}
              <div className='center-context-wrap'>
                <div className='center-unit'>
                  <div className='center-context-title'>
                    <p>프로젝트 설명</p>
                  </div>
                  <div className='center-context'>
                    <p>{portfolios[viewVisible].projectDescription}</p>
                  </div>
                </div>
                <div className='center-unit'>
                  <div className='center-context-title'>
                    <p>기술 스택</p>
                  </div>
                  <div className='center-context'>
                    <p>{portfolios[viewVisible].techUsed}</p>
                  </div>
                </div>
                <div className='center-btm-unit-wrap'>
                  <div className='center-unit'>
                    <div className='center-context-title'>
                      <p>참여인원</p>
                    </div>
                    <div className='center-context'>
                      <p>{portfolios[viewVisible].participants}</p>
                    </div>
                  </div>
                  <div className='center-unit'>
                    <div className='center-context-title'>
                      <p>기간</p>
                    </div>
                    <div className='center-context'>
                      <p>{portfolios[viewVisible].period}</p>
                    </div>
                  </div>
                  {/* 링크가 있을 경우에만 표시 */}
                  {portfolios[viewVisible].link && portfolios[viewVisible].linkDescription && (
                    <div className='center-unit'>
                      <div className='center-context-title'>
                        <p>관련링크</p>
                      </div>
                      <div className='center-context'>
                        <NavLink to={portfolios[viewVisible].link}>
                          {portfolios[viewVisible].linkDescription}
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>  

              {/* 하단 */}
              <div className='btm-context-wrap'>
                <p className='btm-big-title'>상세 내용</p>
                {portfolios[viewVisible].details.map((detail, index) => (
                  <div key={index} className='btm-sul-unit'>
                    <p className='btm-sul-title'>{detail.title}</p>
                    <ul>
                      {detail.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Popol;
