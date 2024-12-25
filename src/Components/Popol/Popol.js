import './Popol.css'

function Popol() {
  return (
    <div>
      <div className='main-popol-wrap'>
        <div>
          <p className='popol-title'>Portfolio</p>
        </div>
        {/* 네비바 */}
        <div className='popol-btn-wrap'>
          <div className='popol-btn'>
            <p>All</p>
          </div>
          <div className='popol-btn'>
            <p>React</p>
          </div>
          <div className='popol-btn'>
            <p>JavaScript</p>
          </div>
          <div className='popol-btn'>
            <p>CSS</p>
          </div>
          <div className='popol-btn'>
            <p>HTML</p>
          </div>
          <div className='popol-btn'>
            <p>REST API</p>
          </div>
          <div className='popol-btn'>
            <p>NEXT.js</p>
          </div>
          <div className='popol-btn'>
            <p>Node.js</p>
          </div>
        </div>

        {/* 유닛 */}
        <div className='popol-unit-wrap'>
          <div className='popol-unit-div'>
            <div className='popol-unit-front-text'>
              <div className='front-index-wrap'>
                <div className='front-index'>
                  <p className='front-inner-text'>HTML</p>
                </div>
                <div className='front-index'>
                  <p className='front-inner-text'>CSS</p>
                </div>
              </div>
            </div>
            <div className='popol-unit-back-img'>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Popol;
