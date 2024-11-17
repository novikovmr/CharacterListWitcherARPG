import './App.css';
import 'normalize.css';
import Stats from './components/Stats/Stats';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import { playerInfoData, weaponsData } from './data/data.js';
import WeaponList from './components/WeaponList/WeaponList.js';
import { useState } from 'react';


function App() {

  const [playerData, setPlayerData] = useState(playerInfoData);

  const updatePlayerData = (updatedData) => {
    setPlayerData(updatedData);
  }
  return (
    <div className="App">
      <div className='container'>
        <Stats />
        <div className='playerInfo__container'>
          <PlayerInfo playerData={playerData}/>
          <WeaponList weaponsData={weaponsData} 
                      updatePlayerData={updatePlayerData}
                      playerData={playerData}
          />
        </div>
        <button onClick={()=> console.log(playerData)}>Вывести playerData в консоль</button> 
      </div>
    </div>
    
  );
}

export default App;
