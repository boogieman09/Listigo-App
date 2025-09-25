import Logo from '../Assets/Asset 2.png'
import StartBtn from '../Components/StartBtn'
import '../Pages/Home.css';

const Home = () => {
  return (
    <main className='container'>
        <img src={Logo} className='main-logo' alt='logo-image.png'/>
        <p className='tag-line'>Your tasks, always on the go.</p>
        <StartBtn />
    </main>
  );
};

export default Home;