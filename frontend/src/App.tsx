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
      <div className="flex justify-center items-center block">
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
      <div className="mt-80 text-5xl text-[#008B8B] block">About Me</div>
      <div className="mt-5 text-xl w-3/4 block">
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
      <div className="w-4/5">
        <div className="mt-20 w-4/5 rounded-3xl">
          <iframe
            className="w-4/5"
            allow="fullscreen"
            height="100%"
            src="https://streamable.com/e/bsh311?"
            width="100%"
          />
        </div>
        <div className="mt-5 text-xl text-[#008B8B]">
          An informative video about who I am
        </div>
      </div>
      <div className="mt-80 text-5xl text-[#008B8B] block">My Goals</div>
      <div className="mt-5 text-xl text-left w-3/4 block">
        <strong className="text-2xl">
          Critical thinking and problem-solving skills
        </strong>
        <br />
        By March 3rd, have sufficient knowledge of the codebase architecture and
        the different concepts used in what I’m working with, getting sufficient
        assistance from my mentor to improve my knowledge
        <br />
        <br />
        By April 1st, get well-versed with the languages and technologies I’m
        working with, mainly Azure, C#, and React. I’ll do this by reading up
        documentation and self-learning.
        <br />
        <br />
        This competency is important to my development. As a developer, I’m
        constantly trying to find ways to find solutions to real world problems.
        Things that include optimizing performance to give out efficient
        solutions to clients, debugging and troubleshooting to fix a certain bug
        in the codebase, and understanding abstract concepts such as data
        structures and algorithms. I’m still learning how to critically think
        and problem solve, and I believe this internship will truly evolve my
        way of thinking when I’m finished. Agility and Adaptability skills
        <br />
        <br />
        <strong className="text-2xl">Agility and Adaptability skills</strong>
        <br />
        By June 16th, I will be doing at least 4-6 tickets per sprint to go
        above and beyond my manager’s expectations, and I will accomplish this
        by using my hours efficiently to make sure no time goes to waste while
        working.
        <br />
        <br />
        By Augest 15th, I’ll have done at least 200 leetcode problems to
        solidify my skills in data structures and algorithms, by doing 1
        leetcode problem a day and consulting with my coworkers if I’m ever
        stuck on a problem.
        <br />
        <br />
        This competency is important to my development. The modern world is
        constantly changing, and this is no different in the world of tech. With
        the vast growth of Artificial Intelligence, and the emergence of General
        AI, I need to constantly be adapting to these new technologies. I need
        to constantly learn about them, see how they work, and even implement
        them to keep up my skills and relevancy as a developer. Technology isn’t
        the only thing that I need to adapt to, but rather I also need to adapt
        to my team’s coding styles, and communication styles. This is especially
        important since I’m going to be working with many teams and many
        different types of people in the workforce. In a field like computer
        science, you either have to constantly adapt and keep up to the changing
        world around you, or get left behind without the relevant knowledge to
        survive in the work force.
        <br />
        <br />
        <strong className="text-2xl">
          Initiative-taking and entrepreneurial skills
        </strong>
        <br />
        By May 30th, I will launch a new feature in the frontend and backend,
        and will present it in a demo. I will accomplish this by getting big
        tickets from my team or participating in a project with other coworkers
        <br />
        <br />
        By April 12th, I’ll have connected with at least 4 professionals from my
        company, and develop a deep connection with them. I’ll do this through
        going to company webinars, coffee chats, business opportunities, etc.
        <br />
        <br />
        This competancy is important to my development. Taking initiative not
        only ties into my entrepreneurial skills, but it also shows that I’m
        willing to go above and beyond when it comes to completing my tasks, and
        that I’m always on the lookout for new opportunities. It shows that I’m
        willing to take the step-up and make strategic and high-pressure
        decisions in a fast-paced environment. Especially since I’m a software
        developer, it shows that I’m always innovating and looking for growth
        inside my company, including thinking of new ways a part of the new
        feature I’m developing can be tackled. I’m also doing various side
        projects during my degree, so my entrepreneurial skills will definitely
        come into play as I’m developing these by myself.
      </div>
      <div className="mt-80 text-5xl text-[#008B8B] block">Experience</div>
      <div className="mt-20 text-left">
        <VerticalTimeline className="block">
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
      <div className="mt-80 text-5xl text-[#008B8B] block">Projects</div>
      <div className="mt-10 flex justify-center mb-40 block">
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
