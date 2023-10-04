import React from "react";
import accessibilityImage from "../../assets/small/accessibilitychallenge.png";
import javascriptquizImage from "../../assets/small/javascriptquiz.png";
import notetakerImage from "../../assets/small/notetaker.png";
import passwordImage from "../../assets/small/passwordgenerator.png";
import texteditorImage from "../../assets/small/texteditor.png";
import weatherImage from "../../assets/small/weatherdashboard.png";
import workdayImage from "../../assets/small/workdayscheduler.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://usflfelipe.github.io/accessibility-challenge/">
                {" "}
                <img
                  src={accessibilityImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Accessibility-Challenge"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Accessibility Challenge</h4>
              <p>
              In this project I was assigned to make a website more accessible to the users.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://usflfelipe.github.io/javascript-quiz/">
                {" "}
                <img
                  src={javascriptquizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Javascript-Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Javascript Quiz</h4>
              <p>
              In this project I had the challenge of making a JavaScript fundamentals quiz that saves the scores locally. The person has to answer the test before the time runs out and each wrong answer is penalized with the subtraction of time{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://note-taker-ch-626d3d94d81c.herokuapp.com/">
                {" "}
                <img
                  src={notetakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note-Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
              For this challenge, I was tasked with creating an application called Note Taker that can be used to write and save notes. The app uses an Express.js back end and will save and retrieve user generated note data from a JSON file.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://usflfelipe.github.io/password-generator/">
                {" "}
                <img
                  src={passwordImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password-Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              In this project I had the challenge of making a secure password generator using HTML, CSS and mainly JavaScript. We can choose to generate a password between 8 and 128 characters containing upper and lower case letters, numbers and special characters.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://text-editor-ch19-b8990938beba.herokuapp.com/">
                {" "}
                <img
                  src={texteditorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Text-Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
              The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use. The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://usflfelipe.github.io/weather-dashboard/">
                {" "}
                <img
                  src={weatherImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              This challenge involved creating a 5 day weather forecast for cities. The user can enter a name and it will search for and match the closest city with that name. If it cannot find the city, it will alert the user. It will store the city in a list on the left side and as the user searches for more cities, they will be added to the list.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://usflfelipe.github.io/work-day-scheduler-5/">
                {" "}
                <img
                  src={workdayImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work Day Scheduler"
                />
              </a>
            </div>
            <div className="Work-Day-Scheduler">
              <h4>Work Day Scheduler</h4>
              <p>
              A simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
