import logo from './logo.svg';
import './App.css';
import './App.css';
import { Client, Events, GatewayIntentBits } from 'discord';
const token = process.env['one'];
function dealData(url,data,menthod='post'){
  let form=new FormData()
  form.append('payload_json',JSON.stringify(data))
  fetch(url, {
    method: menthod,
    body: form,
    headers: {
      "Authorization": "MTExODc5MjI2MDE0Njk3MDYyNA.G2Iays.Gf41gP2CJt0hhB4LbQaIBiSWxWBK2mdTI4NW5o"
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
      "guild_id": "1119528821654290544",
      "channel_id": "1119528822283444287",
      "session_id": "779bad36731d24a104e0346cca35767f",
      "data": {
          "version": "1118961510123847772",
          "id": "938956540159881230",
          "name": "imagine",
          "type": 1,
          "options": [
              {
                  "type": 3,
                  "name": "prompt",
                  "value": "The melodious singing of the orioles echoes across a thousand li, as the green hues reflect upon the river. In the water villages and mountain towns, the flags flutter in the wind, signaling the presence of wine. In the Southern Dynasty, there are four hundred and eighty temples, and countless towers and pavilions amidst the misty rain."
              }
          ],
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
              "contexts": [
                  0,
                  1,
                  2
              ],
              "options": [
                  {
                      "type": 3,
                      "name": "prompt",
                      "description": "The prompt to imagine",
                      "required": true
                  }
              ]
          },
          "attachments": []
      },
      "nonce": "1123450391493607424"
  }
    dealData('https://discord.com/api/v9/interactions',obj)
    // 示例1
  }
  
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
    // partials: [Partials.Channel],
  });
  // When the client is ready, run this code (only once)
  // We use 'c' for the event parameter to keep it separate from the already defined 'client'
  client.on(Events.ClientReady, async c => {
  
    // console.log(Events);
    // console.log(GatewayIntentBits)
    
    // await axios.post("https://discord.com/api/v9/interactions", postdata).then(res => {
    //   console.log('跑起来了吗？')
    //   // console.log(res)
    //   if ((res.status < 300) && (res.status >= 200)) {
    //     let mysecond = funaxios("https://discord.com/api/v9/guilds/1119528821654290544/messages/search");
    //     let myThird = funaxios("https://discord.com/api/v9/channels/1119528822283444287/messages?limit=1");
    //     console.log('第三条')
    //     console.log(myThird)
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
  
  });
  // Log in to Discord with your client's token
  
  
  client.on(Events.MessageCreate, async message => {
    // console.log(message);
    if (message.author.bot) return; // 忽略机器人自己的消息
  
    if (message.content != '') {
      // const response = '你好有什么需要帮你的吗？';
      // message.reply(response);
  
      // 发送一条消息到当前频道
      // message.channel.send('/imagine prompt: a cute boy');
      message.channel.send('你发送了这些内容：' + message.content);
  
    }
  });
  
  
  client.login(token);
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
