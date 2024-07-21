import {React,useState} from 'react';
import imgbg from './res/imgbg01.png';
import img01 from './res/img01.png'
import img02 from './res/img02.png'
import ToggleSwitch from "./Components/ToggleSwitch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faClipboard, faWallet } from '@fortawesome/free-solid-svg-icons'
import ProgramList from './Components/ProgramCard';
import FAQ from './Components/FAQ';
import {addNewRefer} from './config'
function Container(){
    const userPlus=<FontAwesomeIcon icon={faUserPlus} style={{color:"#1A73E8"}}/>
    const notepad=<FontAwesomeIcon icon={faClipboard}  style={{color:"#1A73E8"}}/>
    const Wallet=<FontAwesomeIcon icon={faWallet}   style={{color:"#1A73E8"}}/>
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [refereeName, setRefereeName] = useState('');
    const [refereeEmail, setRefereeEmail] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const handlePopupOpen = () => {
        topFunction()
        setIsPopupVisible(true);
    };

    const handlePopupClose = () => {
        setIsPopupVisible(false);
    };
  

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addNewRefer(name,email,phone,message,refereeName,refereeEmail);
        handlePopupClose()
      };
    return(
        <div className="container" >
             {isPopupVisible && (
                        <div className="popup-wrap" style={{ display: isPopupVisible ? 'block' : 'none', opacity: isPopupVisible ? 1 : 0 }}>
                            <div className={`popup-box ${isPopupVisible ? 'transform-in' : 'transform-out'}`}>
                                <button onClick={()=>{handlePopupClose()}}>Close</button>
                            <form onSubmit={handleSubmit}>
      <div className='cls-st'>
        <label >
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className='cls-st'>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className='cls-st'>
        <label>
          Phone:
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </div>
      <div className='cls-st'>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <div className='cls-st'>
        <label>
          Referee Name:
          <input
            type="text"
            value={refereeName}
            onChange={(e) => setRefereeName(e.target.value)}
          />
        </label>
      </div>
      <div className='cls-st'>
        <label>
          Referee Email:
          <input
            type="email"
            value={refereeEmail}
            onChange={(e) => setRefereeEmail(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
                                
                            </div>
                        </div>
                    )}
            <div className="Container-01">
            <img src={imgbg} className='m-101'/>
            <img src={imgbg} className='m-102'/>
            <img src={imgbg} className='m-103'/>
            <img src={imgbg} className='m-104'/>
            <img src={imgbg} className='m-105'/>
            <img src={img01} className='models'/>
            <div>
            <div className='text-106'>
                <h2>
                Let’s Learn & Earn
                </h2>
                
            </div>
             <div className='text-107'>
             <p>
                Get a chance to win up-to <strong style={{color:"#1A73E8"}}> Rs. 15,000 </strong>
                </p>
                
            </div>
            </div>

            <button className=' btn' onClick={()=>{handlePopupOpen()}}>Refer Now</button>
           

            </div>
            <div className="Container-02">
            <h2>How Do I <strong style={{color:"#1A73E8"}}>Refer? </strong></h2>
            <img src={img02} />
            <div className='userPlus'>{userPlus}
                <p>Submit referrals easily via our website’s referral section.</p>
            </div>
            <div className='refer'>{notepad}
                <p>Earn rewards once your referral joins an Accredian program.</p>
            </div>
            <div className='wallet'>{Wallet}
                <p>Both parties receive a bonus 30 days after program enrollment.</p>
            </div>
            <button className='referbtn btn' onClick={()=>{handlePopupOpen()}}>Refer Now</button>

            </div>
            <div className='Container-03'>
            <h2>What Are The <strong style={{color:"#1A73E8"}}>Referral Benefits? </strong></h2>
            <div className='E-checkbox'><ToggleSwitch label="Enrolled" /></div>
            </div>
            <div className='Container-04' style={{position: "absolute",top: "106rem"}}>
            <ProgramList/>
        
            </div>
            <div style={{ position: "absolute",top: "154rem",    marginTop: "3rem"}}>
                <FAQ/>
            </div>


        </div>
    )
}
export default Container;