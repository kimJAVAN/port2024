import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import './Main.css'
import Popol from '../Popol/Popol';
import History from '../History/History';
import Force from '../Force/Force';

function Main() {
  return (
    <div>
      {/* 메인 페이지 */}
      <Intro />
      {/* 기술 페이지 */}
      <Force />
      {/* 경력 + 학력 페이지 */}
      <History />
      {/* 포트폴리오 페이지 // 회사 작업 + 개인 작업 */}
      <Popol />
      {/* 컨택트 페이지 */}
      <Contact />
    </div>
  );
}

export default Main;
