import './Force.css';

function Force() {
  const images = [
    { src: '/image/react.png', alt: 'React' },
    { src: '/image/java.png', alt: 'JavaScript' },
    { src: '/image/node.png', alt: 'Node.js' },
    { src: '/image/html.png', alt: 'HTML' },
    { src: '/image/css2.png', alt: 'CSS' },
    { src: '/image/git2.png', alt: 'Git' },
    { src: '/image/figma.png', alt: 'Figma' },
    { src: '/image/sass.png', alt: 'Sass' },
    { src: '/image/mui.jpg', alt: 'MUI' },
    { src: '/image/swiper-logo.svg', alt: 'Swiper' },
  ];

  return (
    <div className='force-main-div'>
        <p className='mini-text'>기술 스택 및 도구</p>
        <p className='large-text'>하단의 기술을 사용할 수 있습니다.</p>

        <div className='force-unit-wrap'>
          {images.map((image, index) => (
            <div className='force-unit' key={index}>
              <img src={`${process.env.PUBLIC_URL}${image.src}`} alt={image.alt} />
              <span className='tooltip'>{image.alt}</span>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Force;
