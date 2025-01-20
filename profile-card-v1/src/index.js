import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
    return(
    <div className="app">
        <Avatar />
        <Introduction />
        <SkillList />
    </div>);
}

function Avatar() {
    return <img className="card-avatar" src="avatar.png" alt="Photo of me" />;
}

function Introduction() {
    return(
        <div className="introduction">
            <h2>Hi! My name is Arthur!</h2>
            <p>Hello! My name is Arthur, and I’m a 22-year-old aspiring developer with a passion for building engaging and dynamic web applications. I’m currently focused on learning React and deepening my understanding of modern front-end development.</p>
        </div>
    )
}

function SkillList() {
    return(
        <div className="skill-list">
            <Skill name="HTML" emoji="📝" color="#E34F26" />
            <Skill name="CSS" emoji="🎨" color="#1572B6" />
            <Skill name="JavaScript" emoji="💻" color="#F7DF1E" />
            <Skill name="NodeJS" emoji="🌐" color="#339933" />
            <Skill name="Git" emoji="🔧" color="#F05032" />
            <Skill name="React" emoji="⚛️" color="#61DAFB" />
        </div>
    )
}

function Skill(props) {
    return(
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.name}</span>
            <span>{props.emoji}</span>
        </div>
    );
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

