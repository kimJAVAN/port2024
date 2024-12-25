import { NavLink } from 'react-router-dom';
import './Contact.css';

function Contact() {
  // 이메일 복사 기능 구현
  const copyEmailToClipboard = () => {
    const email = 'ookim7717@naver.com';  // 복사할 이메일 주소
    navigator.clipboard.writeText(email)  // 클립보드에 이메일 텍스트를 복사
      .then(() => {
        alert('이메일이 복사되었습니다!');  // 복사 성공 시 알림
      })
      .catch(err => {
        alert('이메일 복사에 실패했습니다.');  // 복사 실패 시 알림
        console.error('복사 실패:', err);
      });
  };

  return (
    <div className='contact-and-my-detail'>
      <div className='contact-top-wrap'>
        <div className='my-page-wrap'>
          <NavLink to='https://github.com/kimJAVAN' className={'page-link'}>
            <div className='my-page-unit'>
              {/* <div className='my-page-logo-wrap'>
                <img src='/image/git.png' alt='github' />
              </div> */}
              <p>GITHUB</p>
            </div>
          </NavLink>
          <NavLink to='https://fron-end-note.tistory.com/' className={'page-link'}>
            <div className='my-page-unit'>
              <p>BLOG</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className='cont-us-div'>
        <div className='top-email-div'>
          <p className='email-title-text'>e-mail✉️</p>
          <div className='email-copy-text'>
            <p className='email-text'>ookim7717@naver.com</p>
            {/* 이메일 복사 버튼 */}
            <button onClick={copyEmailToClipboard} className='copy-btn'>COPY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
