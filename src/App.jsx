import { useState, useEffect } from "react"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const date = new Date();
    const todayDate = date.toDateString();
    document.getElementById("date").innerHTML = todayDate;
    
    const updateTime = () => {
      const now = new Date();
      const currentTime = 
        now.getHours().toString().padStart(2, '0') + ":" + 
        now.getMinutes().toString().padStart(2, '0') + ":" + 
        now.getSeconds().toString().padStart(2, '0');
      
      document.getElementById("time").innerHTML = currentTime;
    };
    
   
    const interval = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(interval)
  }, [])


  return (
    <div>
      <header class="header">
        <h1 class="logo-placeholder">Frank Owusu Buabeng</h1>
        <svg
          class="menu-btn"
          id="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          xmlns="http://www.w3.org/2000/svg" 
          height="24px" 
          viewBox="0 -960 960 960" 
          width="24px" 
          fill="#102649"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
        <nav class="nav-bars" id="nav-bars">
          <a href="#about" class="nav-bar">About</a>
          <a href="#schedule" class="nav-bar">Countdown</a>
          <a href="#speakers" class="nav-bar">Panelists</a>
        </nav>
      </header>
      <nav class={`${isOpen ? "nav-menu" : "hidden"}`} id="nav-menu">
        <a href="#about" class="nav-link">About</a>
        <a href="#schedule" class="nav-link">Countdown</a>
        <a href="#speakers" class="nav-link">Panelists</a>
      </nav>
      
      <main class="">
        <div class="main-body">
          <h1><b>Welcome to Project Defence 2025</b></h1>
          <p>A Comparative Analysis of Front-End Optimisation Methods for Reducing Web Page Load Time</p>
          <img src="/assets/images/edinburgh_napier_logo.png" alt="University of Edinburgh logo" class="edin-logo" />
        </div>
        
        <div class="shadow-cont" id="about">
          <h2 class=""><b>About the Defense</b></h2>
          <p>Project Defense 2025 presents a benchmarking study comparing HTML and JavaScript frameworks, measuring performance metrics and optimisation techniques under controlled conditions.</p>
        </div>

        <div class="shadow-cont" id="schedule">
          <h2>Countdown to Defense</h2>
          <div class="countdown-cont">
            <img src="/assets/images/countdown-clock.jpg" alt="clock countdown" class="countdown-img" />
            <div class="timer-cont">
              <h3 class="countdown-text">Time Details</h3>
              <p class="def-date">Defence Date: 28-08-2025</p>
              <div class="countdown-timer" id="countdown-timer">
                <p>Current Date: <span id="date"></span></p>
                <p>Current Time: <span id="time"></span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow-cont" id="speakers">
          <h2><b>Meet the Panelists</b></h2>
          <h3>Supervisor for MSc Dissertation</h3>
          <ul>
            <li class="info">Andreas Steyven</li>
            <li class="info">Email: A.Steyven&#64;napier.ac.uk</li>
          </ul>
          <h3>Internal Examiner</h3>
          <ul>
            <li class="info">Simon Wells</li>
            <li class="info">Email: S.Wells&#64;napier.ac.uk</li>
          </ul>
        </div>
      </main>

      <footer class="">
        Frank Owusu Buabeng | Copyright &copy; 2025
      </footer>
    </div>
  )
}

export default App
