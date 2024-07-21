import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronRight, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import './FAQs.css'

const FAQ = () => {
  const [expanded, setExpanded] = React.useState({
    question1: false,
    question2: false,
  });

  const handleToggle = (question) => {
    setExpanded((prevExpanded) => ({...prevExpanded, [question]:!prevExpanded[question] }));
  };

  return (
    <div className='FAQs'>
      <div className='Faq-sec'>
        <div>
        <button>Eligibility</button>
        </div>
        <div>
        <button>How to Use?</button>
        </div>
        <div>
        <button>Terms & Conditions</button>
        </div>
      </div>
      <div className='faq-ques'>
      <h1>Frequently Asked <strong style={{color:"#1A73E8"}}>Questions</strong></h1>

      <div className="question">
        <h2>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h2>
        <button onClick={() => handleToggle('question1')}>
          {expanded.question1? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </button>
      </div>
      {expanded.question1 && (
        <div className="answer">
          <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
        </div>
      )}

<div className="question">
        <h2>What is the minimum system configuration required?</h2>
        <button onClick={() => handleToggle('question2')}>
          {expanded.question2? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </button>
      </div>
      {expanded.question2 && (
        <div className="answer">
          <p>The minimum system configuration is a laptop or desktop computer with an internet connection. You will also need a web browser such as Chrome, Firefox, or Safari.</p>
        </div>
      )}
      </div>

      

      <div className="cta">
        <div className='headicon'>
        <FontAwesomeIcon icon={faHeadphonesSimple} style={{color:"#1A73E8"}}/>
      </div>    
      <div style={{position: "absolute",top: "3rem",left: "6rem",textalign: "left"}}>
        <h2>Want to delve deeper into the program?</h2>
        <p>Share your details to receive expert insights from our program team!</p>
       
        </div>
        <button style={{ height: "2rem",width: "8rem",position: "absolute",left: "51rem",top: "6rem"}}>Get in touch <FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
    </div>
  );
};

export default FAQ;