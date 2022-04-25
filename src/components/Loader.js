import './css/Loader.css';

const Loader = ({ text }) => {
  return (
    <div className='Loader'>
      <div className='spinnerPairHolder'>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
        <div className='spinnerPair'>
          <div className='spinnerPairCercle'></div>
          <div className='spinnerPairCercle'></div>
        </div>
      </div>
      <h1 className='loadingText'>{text}</h1>
    </div>
  );
};

export default Loader;
