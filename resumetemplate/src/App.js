import React from 'react';
import './App.css';
import { Category } from './Components/Category';
import { ListThing } from './Components/ListThing';
import { Project } from './Components/Project';
import { WorkEd } from './Components/WorkEd';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Anthony Carbajal</h1>
        <a className="url" href="https://acarb.dev">https://acarb.dev</a>
        <span>16855 N Pamelas Loop #101, Nampa ID, 83651</span>
        <span><a className="url" href="mailto:root@acarb.dev">root@acarb.dev</a>||<a href="tel:5036831721">(503) 683-1721</a>||<a className="url" href="https://github.com/crackedpixel">github.com/crackedpixel</a></span>
      </header>
      <Category title="skills">
        <div className="row padL mtop">
          <ListThing arr={['ReactJS', 'JavaScript', 'CSS/LESS/SASS', 'HTML']}/>
          <ListThing arr={['Redux', 'REST APIs', 'Flexbox/CSS Grid', 'GitHub/VC']}/>
          <ListThing arr={['NodeJS', 'MySQL/MongoDB', 'PHP', 'Photoshop/XD']}/>
        </div>
      </Category>
      <Category title="projects">
        <Project title="HackEX" url="" created="ReactJS, NodeJS, Redux, SQL, MaterialUI, SCSS, and MUCH more!">
        <ListThing arr={[
            'Originally a mobile game, I started to clone it in ReactJS.',
            // 'New functionality being added often.',
            'Heavily used React components, Redux, and transitions for a mobile-like look.',
            'Custom BackEnd written from scratch in NodeJS.',
            'Using MySQL for database with public and private endpoints.'
          ]} />
        </Project>
        <Project title="Coinfish" url="" created="ReactJS, API calls, MaterialUI, SCSS, etc">
        <ListThing arr={[
            'Utilized API calls and SVG for accurate Bitcoin Graph display.',
            'Heavily used MaterialUI components.',
            'Worked with the designer 1on1 with rough sketches to make their idea a reality.'
          ]} />
        </Project>
        <Project title="Geometrum" url="" created="ReactJS, SCSS, Flexbox, Photoshop, etc">
        <ListThing arr={[
            'Designed by a user on Dribbble, brought to life in ReactJS.',
            'Edited photos in Photoshop to better match the design.',
            'One of my earliest attempts at ReactJS'
          ]} />
        </Project>
      </Category>
      <Category title="Education">
        <WorkEd title="Lambda School" st="Student" urltitle="Course Overview" url="" tt="May 2019">
          <ListThing arr={
            [
              'Education and training with Full Stack Web Development.',
              'Became very familiar with the use of today’s most popular languages, frameworks and libraries including Javascript, React.js, Node.js, Redux, MongoDB, etc.',
              'Participated in multiple group projects where we were given specific tasks to simulate the structure and communication necessary for a solid work environment.'
            ]
          } />
        </WorkEd>
      </Category>
      <Category title="Work experience">
        <WorkEd title="Tanager Productions" tt="Murray, KY" st="Lead Programmer" stt="July 2014">
          <ListThing arr={[
            'Utilized an array of game engines to develop mobile and PC games.',
            'Designed mathematical formulas for various game aspects.',
            'Utilized strong data structures / algorithms for performance.',
            'Created custom scripts and shaders.'
          ]} />
        </WorkEd>
        <WorkEd title="Epson" tt="Portland, OR" st="Senior Manufacturing Operator II" stt="July 2016">
        <ListThing arr={[
            'Managed records including problem documentation, actions taken, computer utilization logs, equipment inventories.',
            'Used gages and measuring instruments to meet tolerance requirements.',
            'Calculated requirements, using basic math.',
            'Maintained specifications by observing and performing quality checks.'
          ]} />
        </WorkEd>
      </Category>
    </div>
  );
}

export default App;
