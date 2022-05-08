import FullVideoBanner from './components/FullVideoBanner';
import Markalar from './components/Markalar';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive';
import './css/App.css'

function App() {
  return (
    <div className="App">
      <div className='İlkBanner'>
      <FullVideoBanner />
      </div>
      <div>
        <Markalar />
      </div>
      <div>
        <SectionThree />
      </div>
      <div>
        <SectionFour />
      </div>
      <div>
        <SectionFive />
      </div>
    </div>
  );
}

export default App;