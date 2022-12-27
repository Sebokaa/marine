import React from "react";
import "./home.css";

function Home() {
  return (
    <div className = "home">
      <div className="welcome">
        <h1>Welcome</h1>
        <h2>Marine life, sea life, or ocean life is the plants, animals and other organisms that live in the salt water of seas or oceans. Marine life affects the nature of the planet. Do you want to learn about marine species? Do you want to talk about the ocean life with other sea lovers? DO YOU want to learn about the marine bio class?!</h2>
        <h2 className = "yes">You've come to the perfect place!</h2>
        <div className="buttons">
          <button><span>Marine Life</span><span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" className = "icon" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"></path></svg></span></button>
          <button><span className="spacing">Chat</span> <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" className = "icon" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"></path></svg></span></button>
          <button><span>Learn More</span> <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" className = "icon" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"></path></svg></span></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
