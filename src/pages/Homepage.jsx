import React from "react";

const Home = () => {
  return (
    <div class='home'>
      <img
        src="https://s.tmimgcdn.com/scr/1200x627/212900/spoon-and-fork-restaurant-logo_212966-original.png"
        alt="logo"
      />
      <div className="homeBox">
        <div className="homeItem">
          <img
            src="https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="partyhome"
          />
          <div className="homeText">
            <p className='strong'>FRIDAY</p>
            <h3 className="white">FRIDAY NIGHT</h3>
            <p>EatHere is in touch and is already thoroughly preparing to break away to the fullest! Live concert at 10pm.</p>
          </div>
        </div>
        <div className="homeItem">
          <img
            src="https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="partyhome"
          />
          <div className="homeText">
            <p className='strong'>SATURDAY</p>
            <h3 className="white">Saturday evening is the hottest time!</h3>
            <p>In the Liberty Bar you will find music straight from the hot countries of Latin America. Hot rhythms, southern dances, strong alcohol - what else do you need for a decent weekend?</p>
          </div>
        </div>
        <div className="homeItem">
          <img
            src="https://images.unsplash.com/photo-1519214605650-76a613ee3245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="partyhome"
          />
          <div className="homeText">
            <p className='strong'>SUNDAY</p>
            <h3 className="white">SUNDAY SALSA PARTY</h3>
            <p>Let's get together and dance hot salsa!</p>
          </div>
        </div>
        <div className="homeItem">
          <img
            src="https://images.unsplash.com/photo-1612189459328-13f9d03623b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="partyhome"
          />
          <div className="homeText">
            <p className='strong'>REVOLUTIONARY CASHBACK!</p>
            <h3 className="white">Multiply the deposited money by 30%!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
