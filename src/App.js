import logo from './logo.svg';
import './App.css';
import './App.css';
// import { Client, Events, GatewayIntentBits } from "./discord.js";
function dealData(url,data,menthod='post'){
  fetch(url, {
    method: menthod,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "MTExOTUyNjM1Mjg1MzQyMjEzMQ.GLDKgQ.9JnMD3ngMfwiYebIQN-pfOpwTZDP_gwXq8gSI0"
    }
  }).then(res => {
    return res.json();
  }).then(data => {
    console.log(data.msg);
  }).catch(e => {
    console.log(e);
  })
}

function MyButton() {

  function handleClick() {
    let needdata={
      "type": 2,
      "application_id": "936929561302675456",
      "guild_id": "1119528821654290544",
      "channel_id": "1119528822283444287",
      "session_id": "88e0dcc2e6a55e640b1890b64378c97b",
      "data": {
        "version": "1118961510123847772",
        "id": "938956540159881230",
        "name": "imagine",
        "type": 1,
        "options": [{
          "type": 3,
          "name": "prompt",
          "value": "The grand palace of the Qin dynasty stands tall in the Qin River, while the magnificent imperial residence of the Han dynasty dominates the Hangu Pass. The palace is adorned with countless splendid halls and chambers, and the imperial gardens are home to more than a hundred exotic birds. The palace walls stretch far into the distance, and the towering observatories offer breathtaking views of the surrounding landscape. The misty clouds often obscure the sun, and the gentle breeze carries the fragrance of exotic flowers. Amidst all this beauty, one can easily lose track of time and become immersed in the grandeur of the palace."
        }],
        "application_command": {
          "id": "938956540159881230",
          "application_id": "936929561302675456",
          "version": "1118961510123847772",
          "default_member_permissions": null,
          "type": 1,
          "nsfw": false,
          "name": "imagine",
          "description": "Create images with Midjourney",
          "dm_permission": true,
          "contexts": [0, 1, 2],
          "options": [{
            "type": 3,
            "name": "prompt",
            "description": "The prompt to imagine",
            "required": true
          }]
        },
        "attachments": []
      },
      "nonce": "1119530868424048640"
    }
    dealData('https://discord.com/api/v9/interactions',needdata)
    // 示例1
  }

  return (
    <button onClick={handleClick}>
      Clicked times
    </button>
  );
}
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton />
        <p >
          更改内容 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
