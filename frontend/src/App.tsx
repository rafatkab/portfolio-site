import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pfp from "./images/pfp.jpeg";
import mediaVoyage from "./images/media-voyage.png";
import viewrify from "./images/Viewrify.png";
import ujourney from "./images/ujourney.png";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
function App() {
  return (
    <center className="font-poppins mt-64">
      <div className="flex justify-center items-center">
        <div className="w-100 mr-10">
          <h1 className="text-5xl text-left text-[#008B8B]">Hi, I'm Rafat</h1>
          <div className="mt-8 text-xl text-left">
            I'm a software developer with a passion for building web
            applications using a variety of technologies. Reach out to me if
            you'd like to learn more!
          </div>
        </div>
        <img className="rounded-full w-80" src={pfp} />
      </div>
      <div className="mt-80 text-5xl text-[#008B8B]">About Me</div>
      <div className="mt-5 text-xl w-3/4">
        Hello! My name is Rafat. I am a 3rd year computer science student
        studying at York University. I primarily have a programming background,
        and have been developing ever since I was in 10th grade. I’m interested
        in playing various video games, watching shows, playing basketball, and
        developing side projects using my technical skills. What makes me unique
        is my desire to look for technical solutions for real world problems,
        always getting things done in a timely manner. Although I was born in
        Bangladesh, I primarily grew up in Scarborough Toronto, having spent
        most of my life here, starting all the way from grade 1 to 3rd year
        university. Living here, I made many friends from alot of diverse
        backgrounds, and got to learn more about all sorts of things and develop
        many interests along the way. Meeting all sorts of teachers and friends
        made me realize my passion for computer science and game development
        when I went into highschool. I joined York University primarily for the
        prestige of Lassonde School of Engineering in terms of the world class
        professors and how it's a research university. I was driven to choose
        computer science because of my passion when it comes to development in a
        virtual environment, and helping people around the world to make their
        lives easier through the use of technology. I also joined many clubs,
        like CSHub and York University Robotics Society. My inspiration was my
        computer science teacher from highschool. He was possibly the best
        teacher I ever had, and taught me many of the ins and outs of
        programming and developing. He was a very thought-provoking and
        inspiring teacher, who wasn’t afraid to test our limits when it came to
        testing our knowledge in computer science
      </div>
      <div className="mt-80 text-5xl text-[#008B8B]">Experience</div>
      <div className="mt-20 text-left">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Sept 2022 - May 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<div></div>}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              York University
            </h4>
            <p>
              • Ensured aruco scanner functionality by debugging old codebase,
              improving aruco marker detection by 25% <br />• Created Autonomy
              GUI using React and ROS2 for aruco marker input, allowing rover to
              track and to aruco marker tags/gates in a specific order,
              enhancing rover scanning <br /> • Developed a controller using
              react for the rover through keyboard, building a GUI that allows
              basic movement <br />• Contributed to an imaging system with LiDAR
              and OpenCV in ROS2, increasing overall rover performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jan 2025 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<div></div>}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dayforce</h4>
            <p>
              • Did bug fixes that fixed integral parts of the dayforce
              application <br />• Created validations and integration tests that
              helped ensure that the site and new features were in working order{" "}
              <br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="mt-80 text-5xl text-[#008B8B]">Projects</div>
      <div className="mt-10 flex justify-center mb-40 ">
        <div className="mx-20 p-5 border rounded-xl bg-white w-120">
          <img className="rounded-3xl" src={mediaVoyage} />
          <div className="mt-7 text-3xl text-[#008B8B]">Media Voyage</div>
          <div className="mt-5 text-black">
            A website that allows users to browse popular media like films, tv
            shows, and videogames. Has an authorization feature and also allows
            you to rate different movies and make a list based on how much you
            liked them.
          </div>
        </div>
        <div className="mx-20 p-5 border rounded-xl bg-white w-120">
          <img className="rounded-3xl" src={ujourney} />
          <div className="mt-7 text-3xl text-[#008B8B]">UJourney</div>
          <div className="mt-5 text-black">
            UJourney is like having a career GPS with a personality. Tell it
            your dream job, and it will instantly scan the LinkedIn career
            cosmos to reveal the paths others have taken. No more endless
            profile scrolling! Instead, you get a curated list of personalized
            steps—like joining that robotics club or snagging that perfect
            internship—so you can be the most prepared candidate out there. With
            UJourney, the path to your dream job isn’t just a distant vision;
            it’s a series of clear, actionable steps right at your fingertips.
          </div>
        </div>
        <div className="mx-20 p-5 border rounded-xl bg-white w-120">
          <img className="rounded-3xl" src={viewrify} />
          <div className="mt-7 text-3xl text-[#008B8B]">Viewrify</div>
          <div className="mt-5 text-black">
            Our AI video credibility tool generates it's own transcript for the
            video provided, analyzes the text, identifies what claims were made
            and debunks any misinformation. With our intuitive design and high
            functionality, our tool provides a complete picture of the topic at
            hand!
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
