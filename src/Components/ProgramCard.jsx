import React from 'react';
import './ProgramCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
const ProgramCard = ({ program, bonus }) => {
  const graduate=<FontAwesomeIcon icon={faGraduationCap} style={{color: "#B197FC",}} />
  return (
    <div className="program-card" >
      <div className="program-name">{graduate}{program}</div>
      <div style={{display:"flex",gap:"10rem"}}>
        <span className="value">₹{bonus.referrer}</span>
    
        <span className="value">₹{bonus.referee}</span>
        </div>

    </div>
  );
};

const ProgramList = () => {
  const programs = [
    {
      program: 'Professional Certificate Program in Product Management',
      bonus: { referrer: 7000, referee: 9000 },
    },
    {
      program: 'PG Certificate Program in Strategic Product Management',
      bonus: { referrer: 9000, referee: 11000 },
    },
    {
      program: 'Executive Program in Data Driven Product Management',
      bonus: { referrer: 10000, referee: 10000 },
    },
    {
      program: 'Executive Program in Product Management and Digital Transformation',
      bonus: { referrer: 10000, referee: 10000 },
    },
    {
      program: 'Executive Program in Product Management',
      bonus: { referrer: 10000, referee: 10000 },
    },
    {
      program: 'Advanced Certification in Product Management',
      bonus: { referrer: 10000, referee: 10000 },
    },
    {
      program: 'Executive Program in Product Management and Project Management',
      bonus: { referrer: 10000, referee: 10000 },
    },
  ];

  return (
    <div className="container" >
      <div className="sidebar">
        <div className="sidebar-header">ALL PROGRAMS</div>
        <div className="sidebar-list">
          <div className="sidebar-item">PRODUCT MANAGEMENT</div>
          <div className="sidebar-item">STRATEGY & LEADERSHIP</div>
          <div className="sidebar-item">BUSINESS MANAGEMENT</div>
          <div className="sidebar-item">FINTECH</div>
          <div className="sidebar-item">SENIOR MANAGEMENT</div>
          <div className="sidebar-item">DATA SCIENCE</div>
          <div className="sidebar-item">DIGITAL TRANSFORMATION</div>
          <div className="sidebar-item">BUSINESS ANALYTICS</div>
        </div>
      </div>
      <div className="content">
        <div style={{display:"flex",justifyContent:"space-between",borderRadius:"14px",backgroundColor: "#1A73E859",padding:"8px",height:"3rem"}}>
        <div className="header">Programs</div>
        <div style={{display:"flex",gap:"6rem"}}>
        <div className="header">Referrer Bonus</div>
        <div className="header">Referrer Bonus</div>
        </div>
        </div>
        <div className="program-list">
          {programs.map((program) => (
            <ProgramCard key={program.program} program={program.program} bonus={program.bonus} />
          ))}
        </div>
        <button className="refer-now-button">Refer Now</button>
      </div>
    </div>
  );
};

export default ProgramList;