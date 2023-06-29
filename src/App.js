import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [노래제목,노래제목변경] = useState(['낭만젊음사랑','숲']);
  let [좋아요,좋아요변경] = useState(0);



  return (

    
    <div className="App">
      <div className="white-nav">
        <div style={ {fontSize : '30px',textAlign : 'center'}}>my mood playlist</div>
      </div>
      <div className="list">
        <h4>{ 노래제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>🧡</span> {좋아요} </h4>
        <p>2020.06.15</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J8F-sVVNPZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <p style={{fontWeight:'bold'}}> 가수  </p>
        <p>이세계</p><br></br>
        <p style={{fontWeight:'bold'}}> 장르  </p>
        <p>인디음악, 록/메탈</p><br></br>
        <p style={{fontWeight:'bold'}}> 노래 소개  </p>
        <p>21살의 우리에게 가장 중요했던 세 가지와 그것에 대한 답을 못 찾아도 괜찮았으면 하는 마음을 담았습니다.</p>
        <br></br>
        <p style={{fontWeight:'bold'}}> 가사  </p>
        <p className="type">고요한 밤이 찾아와<br></br>
아무도 몰래 멀리 떠나자<br></br>
아침 햇살이 우릴 비춰도<br></br>
계속 춤추자 너를 사랑해<br></br>
우린 낭만이란 배를 타고 떠나갈 거야<br></br>
우린 젊음이란 배를 타고 떠나갈 거야<br></br>
우린 사랑이란 배를 타고 떠나갈 거야<br></br>
아무것도 모르지만 우린 괜찮을 거야<br></br>
길을 잃어도 우린 서로 꼭<br></br>
붙잡고 있어 나를 안아줘<br></br>
따스한 아침 햇살과 우리<br></br>
둘의 사랑은 영원할 거야<br></br>
우린 낭만이란 배를 타고 떠나갈 거야<br></br>
우린 젊음이란 배를 타고 떠나갈 거야<br></br>
우린 사랑이란 배를 타고 떠나갈 거야<br></br>
아무것도 모르지만 우린 괜찮을 거야<br></br>
We don’t know 어디로 가고 있는지<br></br>
어디에 있는지<br></br>
We don’t care 어디든 같이 떠나자<br></br>
괜찮을 거야<br></br>
우린 낭만이란 배를 타고 떠나갈 거야<br></br>
우린 젊음이란 배를 타고 떠나갈 거야<br></br>
우린 사랑이란 배를 타고 떠나갈 거야<br></br>
아무것도 모르지만 우린 괜찮을 거야</p><br></br>
        <hr/>
      </div>

      <div>
        <h4>{ 노래제목[1] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>🧡</span> {좋아요} </h4>
        <p>2022.08.24</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8kQH_bBMrMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    <br></br>
        <br></br>
        <p style={{fontWeight:'bold'}}> 가수  </p>
        <p>최유리</p><br></br>
        <p style={{fontWeight:'bold'}}> 장르  </p>
        <p>인디음악, 포크/블루스</p><br></br>
        <p style={{fontWeight:'bold'}}> 노래 소개  </p>
        <p>사람들 사이에서 나는 고작 키 작은 나무에 불과했다. <br></br>
        너무나 잘 살아가는 주변 사람들이 꼭 큰 나무 같아서 나 또한 그렇게 생긴 나무라 착각했다. <br></br>
        키가 작은 내가 흘린 눈물은 금방 내 발에 닿아 꼭 바다처럼 느껴졌다. <br></br>
        나도 키 큰 나무가 되어 남들과 함께 숲이 되고 싶다. <br></br>
        그 속에서 어울려 살아가고 싶다.<br></br>

( 작사 : 최유리 / 작곡 : 최유리 / 편곡 : 최유리, 문지혁 )</p>
        <br></br>
        <p style={{fontWeight:'bold'}}> 가사  </p>
        <p className="type">난 저기 숲이 돼볼게<br></br>
너는 자그맣기만 한 언덕 위를<br></br>
오르며 날 바라볼래<br></br>
나의 작은 마음 한구석이어도 돼<br></br>
길을 터 보일게 나를 베어도 돼<br></br>
날 지나치지 마 날 보아줘<br></br>
나는 널 들을게 이젠 말해도 돼<br></br>
날 보며<br></br>
아 숲이 아닌 바다이던가<br></br>
옆엔 높은 나무가 있길래<br></br>
하나라도 분명히 하고파 난 이제<br></br>
물에 가라앉으려나<br></br>
난 저기 숲이 돼볼래<br></br>
나의 옷이 다 눈물에 젖는대도<br></br>
아 바다라고 했던가<br></br>
그럼 내 눈물 모두 버릴 수 있나<br></br>
길을 터 보일게 나를 베어도 돼<br></br>
날 밀어내지 마 날 네게 둬<br></br>
나는 내가 보여 난 항상 나를 봐<br></br>
내가 늘 이래<br></br>
아 숲이 아닌 바다이던가<br></br>
옆엔 높은 나무가 있길래<br></br>
하나라도 분명히 하고파 난 이제<br></br>
물에 가라앉으려나<br></br>
나의 눈물 모아 바다로만<br></br>
흘려보내 나를 다 감추면<br></br>
기억할게 내가 뭍에 나와있어<br></br>
그때 난 숲이려나</p><br></br>
        <hr/>
      </div>




      <div className = "modal">
        <h2>my now mood</h2>
        <p>2023.06.29</p>
 
      </div>

 
    </div>
  );

    
}

export default App;
