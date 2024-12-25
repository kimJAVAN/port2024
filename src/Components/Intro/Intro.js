import './Intro.css';
import { useEffect, useState } from 'react';

const words = ['프론트엔드', '의견을 나누는', '디자인을 아는', '즐겁게 개발하는'];

function Intro() {

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentPhase, setCurrentPhase] = useState('visible');
  const [charIndex, setCharIndex] = useState(words[0].length); // Start with full '프론트엔드'
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (currentPhase === 'visible') {
      timer = setTimeout(() => setCurrentPhase('deleting'), 3000);
    } else if (currentPhase === 'deleting') {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(charIndex - 1), 120);
      } else {
        const nextIndex = (wordIndex + 1) % words.length;
        setWordIndex(nextIndex);
        setCurrentPhase('typing');
      }
    } else if (currentPhase === 'typing') {
      if (charIndex < words[wordIndex].length) {
        timer = setTimeout(() => setCharIndex(charIndex + 1), 120);
      } else {
        setCurrentPhase('visible');
      }
    }

    return () => clearTimeout(timer);
  }, [currentPhase, charIndex, wordIndex]);

  useEffect(() => {
    setCurrentWord(words[wordIndex].slice(0, charIndex));
  }, [charIndex, wordIndex]);

  return (
    <div className='intro-main-page'>
      <div className='int-main-flex-div'>
        <p className='int-main-text'>
          안녕하세요, <br/>
          <span className='animated-word'>{currentWord}</span> 개발자<br/>
          <span className='colored-text'>김근영</span>입니다.
        </p>
        <p className='int-btm-text'>
          React를 중심으로 웹 프론트엔드를 개발합니다.<br/>
          다양한 UI 제작 경험이 있으며 같이 성장하는 가치를 알고 있습니다.<br/>
          단순 개발만을 하는 개발자가 아닌, <br/>
          소통하며 더 나은 방향으로 가는 프론트엔드 개발자입니다.
        </p>
      </div>
    </div>
  );
}

export default Intro;
