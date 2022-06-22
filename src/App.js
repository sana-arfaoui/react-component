import logo from './logo.svg';
import './App.css';
import { Address } from './component/Profil/Address';
import { ProfilePhoto } from './component/Profil/ProfilePhoto';
import { FullName } from './component/Profil/FullName';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Address/>
      <ProfilePhoto/>
      
    </div>
  );
}

export default App;
