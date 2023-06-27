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
      "Authorization": "MTExODc5MjI2MDE0Njk3MDYyNA.Gn-LWx.rx_pgmIGY6pWT988VHVNlkpXEb9CBwMSB3GpPg"
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
    let obj = {
      "type": 2,
      "application_id": "936929561302675456",
      "guild_id": "1118790480692527154",
      "channel_id": "1118790481187450893",
      "session_id": "0097963a6eea34545e783d8509967fc7",
      "data": {
        "version": "1118961510123847772",
        "id": "938956540159881230",
        "name": "imagine",
        "type": 1,
        "options": [{
          "type": 3,
          "name": "prompt",
          "value": "一个小狗在哭泣"
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
      "nonce": "1123078689156759552"
    }
    dealData('https://discord.com/api/v9/interactions',obj)
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
