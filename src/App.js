
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Address';
function App() {
  return (
    <div className='bg-dark vw-100 vh-100'>
    <ProfilePhoto></ProfilePhoto>
    <FullName>
    </FullName>
    <Adress></Adress>    
</div>
    
  );
}

export default App;
