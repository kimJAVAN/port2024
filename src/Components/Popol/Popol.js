import { useState, useEffect } from 'react';
import AOS from "aos";

import { NavLink } from 'react-router-dom';
import './Popol.css'
import { GrClose } from "react-icons/gr";

function Popol() {

  useEffect(() => {
    AOS.init();
  },[])

  // 각 포트폴리오 항목의 상태와 더보기/닫기 기능을 관리하기 위한 상태
  const [viewVisible, setViewVisible] = useState(null);

  const [filterType, setFilterType] = useState('all'); 

  // 각 포트폴리오 항목 데이터
  const portfolios = [
    // 쇼핑몰
    {
      index : 'company',
      title: "React 기반 쇼핑몰 사이트 개발 및 유지보수",
      description: "쇼핑몰 사이트 개발 및 유지보수 업무. 3명의 프론트, 3명의 백엔드 개발자와 협업.",
      techStack: ["React", "Node.js", "REST API", "HTML", "CSS"],
      projectDescription: "쇼핑몰 사이트 개발 및 유지보수 업무.",
      techUsed: "React, Node.js, Html, CSS, REST API",
      participants: "6명(FE6, BE3)",
      period: "2023.08 ~ 2024.09",
      link: "",
      linkDescription: "", 
      details: [
        {
          title: "1. REST API 개발 및 통신 최적화",
          items: [
            "Node.js를 활용하여 회원 기능과 관련된 백엔드 시스템을 개발",
            "REST API를 수정하여 필요한 정보만 불러오도록 최적화해 데이터 로드 시간을 단축",
            "회원 시스템 개발 과정에서 사용자 데이터를 효율적으로 처리하는 로직 구현"
          ]
        },
        {
          title: "2. React를 활용한 화면 구성",
          items: [
            "React를 사용해 회원 관련 화면과 주요 UI를 구성",
            "디자이너와 협업하여 Figma 디자인을 기반으로 직관적인 사용자 경험을 제공",
            "UI 개발 중 디자이너의 의도를 반영하고 사용자 접근성을 높이는 아이디어를 제안"
          ]
        },
        {
          title: "3. 외부 API를 활용한 건강 분석 페이지 개발",
          items: [
            "외부 API를 연동하여 사용자의 건강검진 기록 데이터를 수집 및 처리",
            "수집된 데이터를 분석해 사용자의 건강 상태를 시각화한 결과 페이지 제작",
            "건강 분석 결과를 직관적으로 제공하여 사용자 경험을 개선"
          ]
        },
        {
          title: "4. ChatGPT 기반 챗봇 개발",
          items: [
            "ChatGPT를 활용해 사용자의 채팅 데이터를 분석하고 미리 입력된 Q&A를 제공",
            "사용자 요청과 데이터를 기반으로 적합한 영양제를 추천하는 기능 구현",
            "자연스러운 대화 흐름과 유용한 정보를 제공해 사용자 만족도를 높임"
          ]
        }
      ]
    },

    // 사내 기본 개발 틀 제작
    {
      index : 'company',
      title: "사내 기본 개발 틀 제작",
      description: "사내 기본 개발 틀을 구축하여 개발 환경의 표준화 및 작업 효율성을 향상",
      techStack: ['React','Node.js','Html', "CSS", "JavaScript"],
      projectDescription: "사내의 기본 개발 틀을 제작하여 개발 환경과 프로세스의 표준화 및 일관성을 확보하고, 이를 통해 작업 효율성을 대폭 향상시켰습니다. 프로젝트 구조와 코드 작성 규칙을 정의하고, 자동화 도구 및 라이브러리 세팅을 통해 개발자의 반복적인 작업을 줄였으며, 팀원 간 협업을 최적화하는 기반을 마련했습니다.",
      techUsed: "Html, CSS, JavaScript",
      participants: "3명(FE3, BE2)",
      period: "2024.06 ~ 2024.09",
      link: "",
      linkDescription: "",
      details: [
        {
          title: "1. 기본 개발 틀 제작 및 표준화",
          items: [
            "React를 활용한 프론트엔드 개발 틀을 제작하여 개발 환경의 표준화 및 일관성 확보",
            "프로젝트 구조와 코드 작성 규칙을 정의하고, 자동화 도구 및 라이브러리 세팅을 통해 효율성 증대",
            "파일 구조를 명확히 하여 팀원들이 전체 코드를 파악하지 않고도 쉽게 작업할 수 있도록 설계",
            "기존 규칙을 유지하면서 더 나은 방향으로 개선할 수 있는 방안을 논의하고, 불편했던 규칙을 개선하여 효율적인 작업 환경을 마련"
          ]
        },
        {
          title: "2. Node.js 백엔드 참여 및 최적화",
          items: [
            "Node.js를 사용해 기본 CRUD 작업 및 간단한 게시판 기능을 개발",
            "불필요한 데이터가 전달되지 않도록 백엔드 로직을 최적화하여 프론트엔드의 화면 로딩 시간을 단축",
            "기존의 백엔드 로직에서 발생한 불편한 점들을 개선하고, 이를 통해 팀원들과 협업을 통해 더 나은 방향으로 시스템을 개선"
          ]
        }
      ]
      
    },

    // 개발 블로그 운영
    {
      index : 'personal',
      title: "개발 블로그 운영",
      description: "개발을 공부하거나 작업을 마무리 한 후 복기할 때 블로그에 작성함",
      techStack: [ 'Html', "CSS","JavaScript", "React", 'Node.js'],
      projectDescription: "개발 공부나 작업을 마친 후 복기하여 블로그에 작성하는 습관을 가지고 있습니다. 이를 통해 자신의 학습을 정리하고, 다른 사람들과 지식을 공유하는 방식으로 지속적인 자기 개선을 추구합니다.",
      techUsed: " React, Node.js, Html, CSS, JavaScript",
      participants: "1명(FE1)",
      period: "2023.08 ~",
      link: "https://fron-end-note.tistory.com/",
      linkDescription: "블로그",
      details: [
        {
          title: "1. 블로그를 통한 개발 학습 및 정보 공유",
          items: [
            "개발 블로그를 작성하며 학습한 내용을 정리하고 기록",
            "자주 사용하는 정보나 기억이 잘 나지 않는 부분을 블로그에 기록해 두고, 동료들과 공유하여 효율적인 시간 관리 및 코드 재사용"
          ]
        }
      ]
      
    },

    // 사내 사이트1
    {
      index : 'company',
      title: "회사 소개 사이트1",
      description: "디자이너의 피그마를 바탕으로 회사 소개 사이트 제작",
      techStack: ["React",'Html',"CSS", "JavaScript"],
      projectDescription: "디자이너가 제작한 Figma 디자인과 UI/UX 설계를 바탕으로 회사의 소개를 하는 웹사이트를 구현했습니다.",
      techUsed: "React, Html, CSS, JavaScript",
      participants: "1명(FE1)",
      period: "2024.07 ~ 2024.08",
      link: "https://chalixsub.2spsample4.shop/4",
      linkDescription: "사이트",
      details: [
        { title: "1. Figma 디자인 기반 구현", 
          items: [
            "디자이너가 제작한 Figma 디자인을 바탕으로 웹사이트를 개발하여 시각적 요소와 인터렉션을 충실히 반영"] 
          },
          { title: "2. UI/UX 설계 반영", 
            items: [
              "UI/UX 설계의 사용자 경험을 이해하고, 이를 실제 웹 환경에서 직관적이고 사용하기 편리한 형태로 구현",
              "사용자의 더 나은 경험을 위해 의견을 적극 제시하고 반영"] 
            },
            { title: "3. 디자이너와의 협업", 
              items: [
                "디자인 의도를 충실히 구현하기 위해 디자이너와 긴밀히 소통하며 프로젝트 진행",
              '불필요한 재작업을 줄이고, Figma 프로토타입과 CSS 및 레이아웃 구현 단계에서 효율성을 극대화하여 개발 시간을 단축. Design-to-Code 작업의 정확성을 높이고 커뮤니케이션 병목 현상을 최소화.'] 
              },
              { title: "4. 최적화와 호환성", 
                items: [
                  "웹사이트의 성능 최적화와 브라우저 간 호환성을 고려하여 높은 품질의 결과물을 완성.",
                  "PC/MOBILE/TABLET 전체 기기에 맞춰 디자이너가 구성한 레이아웃이 망가지지 않도록 개발."
                ] 
                }
      ]
    },

    // 사내 사이트2
    {
      index : 'company',
      title: "회사 소개 사이트2",
      description: "디자이너의 피그마를 바탕으로 회사 소개 사이트 제작",
      techStack: ["PHP",'Html',"CSS", "JavaScript"],
      projectDescription: "디자이너가 제작한 Figma 디자인과 UI/UX 설계를 바탕으로 회사의 소개를 하는 웹사이트를 구현했습니다.",
      techUsed: "PHP, Html, CSS, JavaScript",
      participants: "1명(FE1)",
      period: "2023.08 ~ 2023.10",
      link: "https://anipearl.com/",
      linkDescription: "사이트",
      details: [
        { title: "1. Figma 디자인 기반 구현", 
          items: [
            "디자이너가 제작한 Figma 디자인을 바탕으로 웹사이트를 개발하여 시각적 요소와 인터렉션을 충실히 반영"] 
          },
          { title: "2. UI/UX 설계 반영", 
            items: [
              "UI/UX 설계의 사용자 경험을 이해하고, 이를 실제 웹 환경에서 직관적이고 사용하기 편리한 형태로 구현",
              "사용자의 더 나은 경험을 위해 의견을 적극 제시하고 반영"] 
            },
            { title: "3. 디자이너와의 협업", 
              items: [
                "디자인 의도를 충실히 구현하기 위해 디자이너와 긴밀히 소통하며 프로젝트 진행",
              '불필요한 재작업을 줄이고, Figma 프로토타입과 CSS 및 레이아웃 구현 단계에서 효율성을 극대화하여 개발 시간을 단축. Design-to-Code 작업의 정확성을 높이고 커뮤니케이션 병목 현상을 최소화.'] 
              },
              { title: "4. 최적화와 호환성", 
                items: [
                  "웹사이트의 성능 최적화와 브라우저 간 호환성을 고려하여 높은 품질의 결과물을 완성.",
                  "PC/MOBILE/TABLET 전체 기기에 맞춰 디자이너가 구성한 레이아웃이 망가지지 않도록 개발."
                ] 
                }
      ]
    },

    // 사내 사이트3
    {
      index : 'company',
      title: "회사 소개 사이트3",
      description: "디자이너의 피그마를 바탕으로 회사 소개 사이트 제작",
      techStack: ["PHP",'Html',"CSS", "JavaScript"],
      projectDescription: "디자이너가 제작한 Figma 디자인과 UI/UX 설계를 바탕으로 회사의 소개를 하는 웹사이트를 구현했습니다.",
      techUsed: "PHP, Html, CSS, JavaScript",
      participants: "1명(FE1)",
      period: "2023.10 ~ 2023.12",
      link: "https://samples.hagunlab.com/main/dogmind/05/",
      linkDescription: "사이트",
      details: [
        { title: "1. Figma 디자인 기반 구현", 
          items: [
            "디자이너가 제작한 Figma 디자인을 바탕으로 웹사이트를 개발하여 시각적 요소와 인터렉션을 충실히 반영"] 
          },
          { title: "2. UI/UX 설계 반영", 
            items: [
              "UI/UX 설계의 사용자 경험을 이해하고, 이를 실제 웹 환경에서 직관적이고 사용하기 편리한 형태로 구현",
              "사용자의 더 나은 경험을 위해 의견을 적극 제시하고 반영"] 
            },
            { title: "3. 디자이너와의 협업", 
              items: [
                "디자인 의도를 충실히 구현하기 위해 디자이너와 긴밀히 소통하며 프로젝트 진행",
              '불필요한 재작업을 줄이고, Figma 프로토타입과 CSS 및 레이아웃 구현 단계에서 효율성을 극대화하여 개발 시간을 단축. Design-to-Code 작업의 정확성을 높이고 커뮤니케이션 병목 현상을 최소화.'] 
              },
              { title: "4. 최적화와 호환성", 
                items: [
                  "웹사이트의 성능 최적화와 브라우저 간 호환성을 고려하여 높은 품질의 결과물을 완성.",
                  "PC/MOBILE/TABLET 전체 기기에 맞춰 디자이너가 구성한 레이아웃이 망가지지 않도록 개발."
                ] 
                }
      ]
    },

    // 국민대학교
    {
      index : 'company',
      title: "2023 국민대학교 졸업전시",
      description: "디자이너의 피그마를 바탕으로 사이트 제작",
      techStack: ['Html',"CSS", "JavaScript", "PHP"],
      projectDescription: "디자이너가 제작한 Figma 디자인과 UI/UX 설계를 바탕으로 웹사이트를 구현했습니다.",
      techUsed: "Html, CSS, JavaScript, PHP",
      participants: "1명(FE1)",
      period: "2023.09 ~ 2023.11",
      link: "http://ksd2023graduate.com/",
      linkDescription: "2023 국민대학교 졸업전시",
      details: [
        { title: "1. Figma 디자인 기반 구현", 
          items: [
            "디자이너가 제작한 Figma 디자인을 바탕으로 웹사이트를 개발하여 시각적 요소와 인터렉션을 충실히 반영"] 
          },
          { title: "2. UI/UX 설계 반영", 
            items: [
              "UI/UX 설계의 사용자 경험을 이해하고, 이를 실제 웹 환경에서 직관적이고 사용하기 편리한 형태로 구현",
              "사용자의 더 나은 경험을 위해 의견을 적극 제시하고 반영"] 
            },
            { title: "3. 디자이너와의 협업", 
              items: [
                "디자인 의도를 충실히 구현하기 위해 디자이너와 긴밀히 소통하며 프로젝트 진행",
              '불필요한 재작업을 줄이고, Figma 프로토타입과 CSS 및 레이아웃 구현 단계에서 효율성을 극대화하여 개발 시간을 단축. Design-to-Code 작업의 정확성을 높이고 커뮤니케이션 병목 현상을 최소화.'] 
              },
              { title: "4. 최적화와 호환성", 
                items: [
                  "웹사이트의 성능 최적화와 브라우저 간 호환성을 고려하여 높은 품질의 결과물을 완성.",
                  "PC/MOBILE/TABLET 전체 기기에 맞춰 디자이너가 구성한 레이아웃이 망가지지 않도록 개발."
                ] 
                }
      ]
    },

     //리디 클론코딩
    {
      index : 'personal',
      title: "RIDI 클론코딩",
      description: "기존의 사이트를 참고하여 화면을 구성",
      techStack: [ 'Html', "CSS","JavaScript","SCSS"],
      projectDescription: "기존의 사이트를 참고하여 화면을 구성한다.",
      techUsed: "Html, CSS, JavaScript, SCSS",
      participants: "1명(FE1)",
      period: "2023.02 ~ 2023.02",
      link: "https://kimjavan.github.io/project5/",
      linkDescription: "프로젝트 링크",
      details: [
        {
          title: "1. SCSS를 활용한 규칙 정리 및 작업 효율화",
          items: [
            "SCSS를 활용해 기존 CSS와 다르게 작성 규칙을 정립하고 코드 접근성을 향상",
            "클래스 네이밍에 규칙성을 부여하여 작업 속도를 단축",
            "기존 사이트의 디테일을 분석해 통일성을 유지하고 하나의 사이트처럼 느껴지도록 세부 사항 조정"
          ]
        },
        {
          title: "2. 도서 API를 활용한 화면 구현",
          items: [
            "도서 API를 사용하여 책의 썸네일과 제목 데이터를 받아와 화면을 구성",
            "사용자에게 직관적이고 깔끔한 인터페이스로 정보를 제공"
          ]
        }
      ]
      
    },

    //스팀 클론코딩
    {
      index : 'personal',
      title: "STEAM 클론코딩",
      description: "기존의 사이트를 참고하여 화면을 구성",
      techStack: ['Html', "CSS", "JavaScript"],
      projectDescription: "기존의 사이트를 참고하여 화면을 구성한다.",
      techUsed: "Html, CSS, JavaScript",
      participants: "3명(FE3)",
      period: "2023.01 ~ 2023.02",
      link: "https://kimjavan.github.io/project4_G/sub1.html",
      linkDescription: "프로젝트 링크",
      details: [
        {
          title: "1. 팀장 역할 수행 및 프로젝트 관리",
          items: [
            "프로젝트 팀장으로서 팀원들의 역할을 분배하고 효율적으로 작업이 진행되도록 조율",
            "개별 작업물을 통합하여 하나의 사이트로 완성",
            "Steam 사이트를 참고하여 게임을 판매하는 사이트의 기획과 제작 주도"
          ]
        },
        {
          title: "2. 디자인 작업과 UI 구현",
          items: [
            "사이트의 전체적인 디자인 작업을 맡아 일관성과 시각적 완성도를 확보",
            "사용자 경험을 고려한 UI를 설계하고 구현"
          ]
        }
      ]
      
    },

    // 사이트 리뉴얼
    {
      index : 'personal',
      title: "기존 사이트 리뉴얼(마녀공방)",
      description: "기존 사이트를 리뉴얼하여 화면을 구성하고 제작",
      techStack: ["React", 'Html', "CSS", "JavaScript"],
      projectDescription: "기존 사이트를 리뉴얼하여 화면을 구성하고 제작한다.",
      techUsed: "React, Html, CSS, JavaScript",
      participants: "1명(FE1)",
      period: "2023.02 ~ 2023.04",
      link: "https://kimjavan.github.io/project6/",
      linkDescription: "프로젝트 링크",
      details: [
        {
          title: "1. React를 이용한 화면 구성 및 정보 관리",
          items: [
            "Redux를 활용해 제품 정보를 효율적으로 상태로 관리",
            "React Bootstrap을 사용해 빠르고 일관된 화면 UI를 구현",
            "스스로 디자인을 기획하여 화면을 구성하고 표현",
            "React Router를 이용해 페이지 간 라우팅과 네비게이션을 체계적으로 관리"
          ]
        }
      ]
    }
  ];

  // 유닛 클릭 시 해당 항목의 상세 정보를 보이게 하는 함수
  const handleUnitClick = (index) => {
    setViewVisible(index);
  };

  // 닫기 버튼 클릭 시 해당 항목의 상세 정보를 숨기는 함수
  const handleCloseClick = () => {
    setViewVisible(null);
  };

  const filteredPortfolios = portfolios.filter(portfolio => {
    if (filterType === 'all') return true;
    return portfolio.index === filterType;
  });

  const handleFilterClick = (type) => {
    setFilterType(type);
  };

  return (
    <div>
      <div className='main-popol-wrap'>
        <div>
          <p className='popol-title' data-aos='fade-up'>포트폴리오</p>
        </div>

        {/* 네비바 */}
        <div className='popol-btn-wrap' data-aos='fade-up'>
          <div className={`popol-btn ${filterType === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>
            <p>전체</p>
          </div>
          <div className={`popol-btn ${filterType === 'company' ? 'active' : ''}`} onClick={() => handleFilterClick('company')}>
            <p>회사</p>
          </div>
          <div className={`popol-btn ${filterType === 'personal' ? 'active' : ''}`} onClick={() => handleFilterClick('personal')}>
            <p>개인</p>
          </div>
        </div>

        {/* 포트폴리오 유닛 */}
        <div className='popol-unit-wrap'>
          {filteredPortfolios.map((portfolio, index) => (
            <div key={index} className='popol-unit-div' data-aos='fade-in' onClick={() => handleUnitClick(index)}>
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
                <p className='po-more-title'>{filteredPortfolios[viewVisible].title}</p>
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
                    <p>{filteredPortfolios[viewVisible].projectDescription}</p>
                  </div>
                </div>
                <div className='center-unit'>
                  <div className='center-context-title'>
                    <p>기술 스택</p>
                  </div>
                  <div className='center-context'>
                    <p>{filteredPortfolios[viewVisible].techUsed}</p>
                  </div>
                </div>
                <div className='center-btm-unit-wrap'>
                  <div className='center-unit'>
                    <div className='center-context-title'>
                      <p>참여인원</p>
                    </div>
                    <div className='center-context'>
                      <p>{filteredPortfolios[viewVisible].participants}</p>
                    </div>
                  </div>
                  <div className='center-unit'>
                    <div className='center-context-title'>
                      <p>기간</p>
                    </div>
                    <div className='center-context'>
                      <p>{filteredPortfolios[viewVisible].period}</p>
                    </div>
                  </div>
                  {/* 링크가 있을 경우에만 표시 */}
                  {filteredPortfolios[viewVisible].link && filteredPortfolios[viewVisible].linkDescription && (
                    <div className='center-unit'>
                      <div className='center-context-title'>
                        <p>관련링크</p>
                      </div>
                      <div className='center-context'>
                        <NavLink to={filteredPortfolios[viewVisible].link}>
                          {filteredPortfolios[viewVisible].linkDescription}
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 하단 */}
              <div className='btm-context-wrap'>
                <p className='btm-big-title'>상세 내용</p>
                {filteredPortfolios[viewVisible].details.map((detail, index) => (
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
