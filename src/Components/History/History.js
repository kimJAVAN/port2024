import './History.css'

function History() {
  return (
    <div className='my-his-page'>
      <p className='mini-title'>경력사항</p>
      <p className='big-title'>
        다양한 UI 디자인의 구현 경험이 있으며,
        REST API통신을 통해 기능을 구현할 수 있습니다.
      </p>
      <div className='my-his-wrap'>
        <div className='my-his-unit'> 
          <div className='my-his-left'>
            <p className='grey-text'>2023. 06 - 2024. 09</p>
          </div>
          <div className='my-his-right'>
            <p className='comp-title'>봄바람</p>
            <p className='grey-text'>개발부서 부팀장, 프론트엔드</p>
            <div className='my-stack-wrap'>
              
            </div>
            <div className='context-wrappere'>
              <p>주요 업무 내용</p>
              <p>
                  - React, PHP를 기반으로 화면 구성<br/>
                  - REST API를 통한 통신 작업 <br/>
                  - 사이트 유지보수 및 업그레이드<br/>
                  - 사내 기본 개발 시스템 제작<br/>
                  - 팀원의 업무 분배 및 개발 일정 체크  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
