import React, { useState } from 'react'

export default function About() {
  const bg = {
    backgroundColor:'rgb(168, 199, 202)'
  }
  return (
    <>

    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="text-center">Abdulla Ahmed</h2>
          <p className="text-center">abdullabrhm@gmail.com | +16128865730</p>
          <p className="text-center">
            <a href="https://www.linkedin.com/in/abdulla-ibrahim-85839910a"  target="_blank" rel="noopener noreferrer">
              <h5 className=''>Click Here for my LinkedIn Page </h5>
            </a>
          </p>

          <hr />

          <h4 className="text-center">Summary</h4>
          <p className="text-center" style={bg}>
            Hi, I'm Abdulla, a Passionate Full-Stack Software Engineer! Seeking Junior/Entry-Level Opportunities in Full-Stack Development or Front-End Engineering.
            Specializing in Web Development, JavaScript, React, Node.js, HTML, CSS.
            Experienced in Agile Development, Version Control (Git), and Testing.
            Strong Problem-Solving and Analytical Skills, Eager to Learn and Grow.
            Bachelor's Degree in Information Systems/Full Stack Bootcamp UofM.
            Passionate about Building User-Focused Applications for a Better Web Experience.
            Open to Collaborative Projects, Internships, and Learning Opportunities.
            Connect with Me to Explore Potential Synergies! Let's Elevate the Web Together!
          </p>

          <hr />

          <h4 className="text-center">Experience</h4>
          <div className="card">
            <div className="card-body" style={bg}>
              <h5 className="card-title">Asset Management Specialist</h5>
              <p className="card-text">Olympic Financial Group</p>
              <p className="card-text">May 2021 - Present (2 years 2 months)</p>
            </div>
          </div>

          <hr />

          <h4 className="text-center">Education</h4>
          <div className="card">
            <div className="card-body" style={bg}>
              <h5 className="card-title">University of Minnesota Boot Camps</h5>
              <p className="card-text">Full Stack Development, Computer Software Engineering</p>
              <p className="card-text">Feb 2023 - Aug 2023</p>
              <p className="card-text">
                This bootcamp is a great addition to my information systems bachelor's degree and it's definitely a great way to get started in frontend and backend development.
              </p>
            </div>
          </div>

          <hr />

          <h4 className="text-center">Skills</h4>
          <p className="text-center" style={bg}>
            Front-End Development • Back-End Web Development • JavaScript • GitHub • Heroku • HTML • Cascading Style Sheets (CSS)
          </p>

          <hr />

          <h4 className="text-center">Honors & Awards</h4>
          <div className="card">
            <div className="card-body" style={bg}>
              <h5 className="card-title">Certificate of Appreciation - ADNOC</h5>
              <p className="card-text">Mar 2021</p>
              <p className="card-text ">
                The Certificate is Awarded to Abdulla Ahmed for his supportive efforts and extraordinary contribution during his time at the largest Oil Company in the UNITED ARAB EMIRATES and one of the leading oil companies in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >


    </>
  )
}

