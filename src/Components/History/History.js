import './History.css';

const histories = [
  {
    what: 'work',
    date: '2023. 06 - 2024. 09',
    company: '봄바람',
    position: '개발부서 부팀장, 프론트엔드',
    stack: [],
    tasks: [
      '- React, PHP를 기반으로 화면 구성',
      '- REST API를 통한 통신 작업',
      '- 사이트 유지보수 및 업그레이드',
      '- 사내 기본 개발 시스템 제작',
      '- 팀원의 업무 분배 및 개발 일정 체크',
    ],
  },
  {
    what: 'study',
    date: '2022. 11 - 2023. 04',
    company: '(스마트웹&콘텐츠개발)웹표준기반 스마트 UI/UX디자인&웹퍼블리셔 (수료)',
    position: '',
    stack: [],
    tasks: [],
  },
  {
    what: 'school',
    date: '2018. 03 - 2022. 02',
    company: '인천대학교 디자인학부 (졸업)',
    position: '제품디자인학과',
    stack: [],
    tasks: [],
  },
];

function History() {
  return (
    <div className='my-his-page'>
      <p className='mini-title'>경력, 학력사항</p>
      <p className='big-title'>
        다양한 UI 디자인의 구현 경험이 있으며,<br />
        REST API통신을 통해 기능을 구현할 수 있습니다.
      </p>
      <div className='my-his-wrap'>
        {histories.map((history, index) => (
          <div className='my-his-unit' key={index}>
            <p className='what-title'>
              {history.what === 'work' ? '경력' : ''}
              {history.what === 'school' ? '학력' : ''}
              {history.what === 'study' ? '수료' : ''}
            </p>
            <div className='my-his-left'>
              <p className='grey-text'>{history.date}</p>
            </div>
            <div className='my-his-right'>
              <p className='comp-title'>{history.company}</p>
              <p className='grey-text'>{history.position}</p>
              <div className='my-stack-wrap'>
                {history.stack.map((tech, i) => (
                  <span key={i} className='stack-item'>{tech}</span>
                ))}
              </div>
              {history.tasks.length > 0 && (
                <div className='context-wrappere'>
                  <p className='mini-white-text'>* 주요 업무 내용</p>
                  <p className='mini-context'>
                    {history.tasks.map((task, i) => (
                      <span key={i}>
                        {task}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
