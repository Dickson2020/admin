"use client"
import { useEffect, useState } from 'react';
import './styles/index.css'
import Navigation from './components/nav';
import './components/login.css';
import { TbNavigationFilled } from 'react-icons/tb';
import { BiSearch } from 'react-icons/bi';
import DashboardHome from './components/Home';
import { GoBell, GoBellFill } from 'react-icons/go';
import { BsEnvelopeAt, BsEnvelopeAtFill } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiSendPlaneLine } from 'react-icons/ri';
import { GrAttachment } from 'react-icons/gr';
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { TbHistoryToggle } from "react-icons/tb";
import DriversPage from './components/Drivers';
import RidersPage from './components/Riders';
import TransactionsPage from './components/Transactions';
import LoginForm from './components/Login';
import formatAmount from './money-format'




interface driverDetails{
  id: number,
  name:string,
  email:string,
  phone:string,
  password:string,
  rating:string,
  years_of_experience: string,
  verified:string,
  latitude: string,
  longitude: string,
  active_status: string,
  location:string,
  customers: string,
  about: string,
  country: string,
  account_balance: string,
  organisation: string,
}


interface featurePropType {
  id: number,
  pattern: string,
  title: string

}

export default function Home() {


  const [MESSAGES_MODAL, setMESSAGES_MODAL] = useState(false)
  const [NOTY_MODAL, setNOTY_MODAL] = useState(false)
  const [REPLY_MESSAGES, setREPLY_MESSAGES] = useState(false)
  const [REPLY_CHAT_NAME, setREPLY_CHAT_NAME] = useState('')
  const [DRIVER_DETAILS, setDRIVER_DETAILS] = useState(false)
  const [SEARCHING_MODAL, setSEARCHING_MODAL] = useState(false)
  const [SEARCH_PATTERN, setSEARCH_PATTERN] = useState('')
  const [FILTERED_FEATURES, setFILTERED_FEATURES] = useState<featurePropType[]>([])
  const [DRIVER_VERIFICATION_DETAILS, setDRIVER_VERIFICATION_DETAILS] = useState(false)
  const [RECEIPT_DETAILS, setRECEIPT_DETAILS] = useState(false)

  const showReceiptDetails = () =>{
    setRECEIPT_DETAILS(true)
  }

  const hideReceiptDetails = () =>{
    setRECEIPT_DETAILS(false)
  }

  const showDriverVerificationDetails = (id: number) =>{
    setDRIVER_VERIFICATION_DETAILS(true)
    hideReceiptDetails()
    console.log(id)
  }

  
  const hideDriverVerificationDetails = () =>{
    setDRIVER_VERIFICATION_DETAILS(false)
  }

  const closeAllModal = () => {
    setSEARCHING_MODAL(false)
    setMESSAGES_MODAL(false)
    setNOTY_MODAL(false)
    setREPLY_MESSAGES(false)
  }

  const handleSearchInput = (value: string) => {
    setSEARCH_PATTERN(value)
  }

  const SEARCH_FEATURES: featurePropType[] = [
    {
      id: 1,
      pattern: 'users drivers',
      title: 'View Registered Drivers'

    },
    {
      id: 2,
      pattern: 'users riders',
      title: 'View Registered Riders'

    },
    {
      id: 3,
      pattern: 'payment methods transactions',
      title: 'Manage Payment Methods'

    },
    {
      id: 4,
      pattern: 'payments transactions',
      title: 'Manage transactions'

    }
  ]

  useEffect(() => {
    const FILTERED_DATA: featurePropType[] = []
    for (let FEATURE = 0; FEATURE <= SEARCH_FEATURES.length - 1; FEATURE++) {
      if (SEARCH_FEATURES[FEATURE].pattern.includes(SEARCH_PATTERN)) {
        FILTERED_DATA.push(SEARCH_FEATURES[FEATURE])
      }
    }

    setFILTERED_FEATURES(FILTERED_DATA)

  }, [SEARCH_PATTERN])

  const handleSearchedFeature = (id: number) => {
    switch (id) {
      case 1:
        navOnPress('drivers')
        break
      case 2:
        navOnPress('riders')

        break
      case 3:
        navOnPress('manage_payments')

        break
      case 4:
        navOnPress('transactions')
        break

    }
    setSEARCHING_MODAL(false)

    hideReceiptDetails()
  }




  const setREPLY_MESSAGE = (name: string) => {
    setREPLY_MESSAGES(true)
    setMESSAGES_MODAL(false)
    setNOTY_MODAL(false)
    setREPLY_CHAT_NAME(name)
    hideReceiptDetails()
  }

  const [driverInfo,setDriverInfo] = useState<driverDetails>()
  const showDriverDetails = (id: number, data: driverDetails) => {
    const ID_ = id
    console.log(ID_)
   // //alert(JSON.stringify(data))
    setDriverInfo(data)
   // //alert('driver details')
    setDRIVER_DETAILS(true)
    hideDriverVerificationDetails()
    hideReceiptDetails()
  }

  const hideDriverDetails = () => {
    setDRIVER_DETAILS(false)
    hideReceiptDetails()
  }
 

  useEffect(() => {
    setNOTY_MODAL(false)
    setSEARCHING_MODAL(false)
  }, [MESSAGES_MODAL, DRIVER_DETAILS])

  useEffect(() => {
    setMESSAGES_MODAL(false)
  }, [NOTY_MODAL])


  const [PAGE_COMPONENT, setPAGE_COMPONENT] = useState(<DashboardHome showDriverDetails={showDriverDetails} hideDriverDetails={hideDriverDetails}/>)
  const navOnPress = (navMenuName: string) => {
    console.log(navMenuName)
    switch(navMenuName){
      case 'dashboard':
        setPAGE_COMPONENT(<DashboardHome showDriverDetails={showDriverDetails} hideDriverDetails={hideDriverDetails}/>)
        break
      
      case 'drivers':
        setPAGE_COMPONENT(<DriversPage 
          showDriverDetails={showDriverDetails} 
          hideDriverDetails={hideDriverDetails} 
          showDriverVerificationDetails={showDriverVerificationDetails} 
          hideDriverVerificationDetails={hideDriverVerificationDetails} 
          />)
        break
      
      case 'riders':
        setPAGE_COMPONENT(<RidersPage />)
        break

        case 'transactions':
          setPAGE_COMPONENT(<TransactionsPage hideReceiptDetails={hideReceiptDetails} showReceiptDetails={showReceiptDetails}/>)
          break


        
    }
    
  }

  const [isLogin, setIsLogin] = useState(false)


  const setLoginSession = ( id : number)=>{
     localStorage.setItem('session', id +'')
  }

  const getLoginSession = ()=>{
   const session =  localStorage.getItem('session')
   if(session !== null){
    
    setIsLogin(true)
   }
  }

  const logout = () =>{
    localStorage.removeItem('session')
    setIsLogin(false)
  }

  const onLoginSuccess = (id : number) =>{
    setLoginSession(id)
    getLoginSession()
  }
  useEffect(()=>{
   getLoginSession()
  },[])




  return (
    isLogin?
    <div id='container' className='container' >
      <div className='container-header'>
        <div className='header-items-grid'>

          <div className='nav-title'>
            Y<span><TbNavigationFilled className='header-title-icon' /></span>SSER
          </div>

          <div className='header-search'>
            <div className='header-search-view'>
              <BiSearch size={20} className='header-search-view-icon' />
              <input onFocus={() => setSEARCHING_MODAL(true)} onChange={(event) => handleSearchInput(event.target.value)} className='header-search-view-input' placeholder='Type to search' />


            </div>
          </div>

          <div className='header-action-icons'>
           

            <div className='c-mt' onClick={() => setNOTY_MODAL(!NOTY_MODAL)}>
              {
                NOTY_MODAL ?
                  <GoBellFill size={19} color='#000' className='noty-message-icon' />
                  :
                  <GoBell size={19} color='#000' className='noty-message-icon' />

              }
              <div className='noty-indicator'>1</div>


            </div>

            <div className='profile-pic-centralize'>

              <img src='https://th.bing.com/th/id/OIP.Q6UzOWk9FXLJoQN8o5yl5gAAAA?rs=1&pid=ImgDetMain' className='header-profile-image' />
            </div>
          </div>

          <div className={NOTY_MODAL ? 'popup' : 'popup hide-modal'}>
            <div className='popup-modal-content'>
              <div className='popup-modal-content-header'>
                <p className='text-color popup-modal-content-header-title'>Notifications</p>
              </div>
              <div className='popup-modal-content-body'>
                <div className='popup-modal-content-body-item'>
                  <div>
                    <p className='text-color popup-modal-content-body-item-name'>Payment Method Alert</p>
                    <p className='text-color popup-modal-content-body-item-email'>Yasser added a VISA payment card</p>
                  </div>
                </div>




              </div>
            </div>
          </div>

          <div className={MESSAGES_MODAL ? 'popup' : 'popup hide-modal'}>

            <div className='popup-modal-content'>
              <div className='popup-modal-content-header'>
                <p className='text-color popup-modal-content-header-title'>Messages</p>
              </div>
              <div className='popup-modal-content-body'>
                <div className='popup-modal-content-body-item' onClick={() => setREPLY_MESSAGE('Morris Willaim')}>
                  <div>
                    <p className='text-color popup-modal-content-body-item-name'>Morris Willaim</p>
                    <p className='text-color popup-modal-content-body-item-email'>Hi, i need a liecen...</p>
                  </div>
                </div>

                <div className='popup-modal-content-body-item' onClick={() => setREPLY_MESSAGE('Albert Clitch')}>
                  <div>
                    <p className='text-color popup-modal-content-body-item-name'>Albert Clitch</p>
                    <p className='text-color popup-modal-content-body-item-email'>I have an issue with my acc..</p>
                  </div>
                </div>

                <div className='popup-modal-content-body-item' onClick={() => setREPLY_MESSAGE('Kamala Rose')}>
                  <div>
                    <p className='text-color popup-modal-content-body-item-name'>Kamala Rose</p>
                    <p className='text-color popup-modal-content-body-item-email'>What is the shortes route to NYC</p>
                  </div>
                </div>

                <div className='popup-modal-content-body-item' onClick={() => setREPLY_MESSAGE('Emma Clark')}>
                  <div>
                    <p className='text-color popup-modal-content-body-item-name'>Emma Clark</p>
                    <p className='text-color popup-modal-content-body-item-email'>Do i need a passport to drive?</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className={REPLY_MESSAGES ? 'popup-reply-message' : 'popup-reply-message hide-modal'}>
            <div className='popup-modal-content-header grid-header'>
              <div className='close-reply-messages-modal' onClick={() => setREPLY_MESSAGES(false)}>
                <IoMdCloseCircleOutline />
              </div>
              <p className='text-color popup-modal-content-header-title'>{REPLY_CHAT_NAME}</p>
            </div>
            <div className='popup-modal-content-body chat-content'>

              <div className='messages-scrollview'>
                <div className='sender-bubble text-color'>
                  Hi, how may we help you today?
                </div>

                <div className='receiver-bubble text-color'>
                  I have an issue registering on the App
                </div>
              </div>

              <div className='chat-footer'>

                <div className='c-item'>
                  <GrAttachment color='#000' />
                </div>

                <div className='c-item'>
                  <input className='input-message-field' placeholder='Type a message' />
                </div>


                <div className='c-item'>
                  <RiSendPlaneLine color='#000'/>
                </div>
              </div>
            </div>
          </div>

          <div className={DRIVER_DETAILS ? 'popup-bio-info' : 'popup-bio-info hide-modal'}>
            <div className='popup-modal-content-header grid-header'>
              <div className='close-reply-messages-modal' onClick={() => setDRIVER_DETAILS(false)}>
                <IoMdCloseCircleOutline color='#000'/>
              </div>
              <p className='text-color popup-modal-content-header-title'>Driver Details</p>
            </div>
            <div className='popup-modal-content-body'>
              <div className='profile-bio-section'>
                <div className='c-item'>
                  <img src='https://th.bing.com/th/id/OIP.Q6UzOWk9FXLJoQN8o5yl5gAAAA?rs=1&pid=ImgDetMain' className='profile-bio-section-img' />
                  <MdVerified className='verified-driver-details' />
                </div>
                <div>
                  <p className='text-color profile-bio-section-name'>{driverInfo?.name}</p>
                  <p className='text-color profile-bio-section-email'>{driverInfo?.email}</p>
                  <p className='text-color profile-bio-section-address'><FaLocationDot />{driverInfo?.location}, {driverInfo?.country}</p>

                </div>
              </div>

              <div className='ranking-section'>
                <div className='rank-item'>
                  <div className='rank-item-icon c-item'>
                    <MdSupervisorAccount color='#000' size={20} />
                  </div>
                  <p className='text-color rank-item-big-text'>{driverInfo?.customers}</p>
                  <p className='text-color rank-item-small-text'>Customer</p>
                </div>



                <div className='rank-item'>
                  <div className='rank-item-icon c-item'>
                    <FaGift color='#000' size={17} />
                  </div>
                  <p className='text-color rank-item-big-text'>{driverInfo?.years_of_experience}</p>
                  <p className='text-color rank-item-small-text'>Years Exp.</p>
                </div>



                <div className='rank-item'>
                  <div className='rank-item-icon c-item'>
                    <FaStar color='#000' size={17} />
                  </div>
                  <p className='text-color rank-item-big-text'>{driverInfo?.rating}</p>
                  <p className='text-color rank-item-small-text'>Rating</p>
                </div>

                <div className='rank-item'>
                  <div className='rank-item-icon c-item'>
                    <RiMessage2Fill color='#000' size={17} />
                  </div>
                  <p className='text-color rank-item-big-text'>0</p>
                  <p className='text-color rank-item-small-text'>Review</p>
                </div>
              </div>

              <div className='about-section'>
                <p className='text-color about-section-title'>About</p>
                <p className='text-color about-section-desc'>{driverInfo?.about}</p>
              </div>


              <div className='contact-section'>
                <p className='text-color contact-section-title'>Driver Infomations</p>
                <div className='contact-section-detail'>
                  <p className='text-color contact-section-detail-big-text'>Driver Contact</p>
                  <p className='text-color contact-section-detail-small-text'>{driverInfo?.phone}</p>
                </div>
                <div className='contact-section-detail'>
                  <p className='text-color contact-section-detail-big-text'>Verified KYC</p>
                  <p className='text-color contact-section-detail-small-text'>{Number(driverInfo?.verified) == 1? 'Completed' : 'Not verified'}</p>
                </div>

                <div className='contact-section-detail'>
                  <p className='text-color contact-section-detail-big-text'>Wallet Balance</p>
                  <p className='text-color contact-section-detail-small-text'>${formatAmount(driverInfo?.account_balance)}</p>
                </div>

               

              </div>

            </div>
          </div>

          <div className={RECEIPT_DETAILS ? 'popup-bio-info pd' : 'popup-bio-info hide-modal pd'}>
            <div className='popup-modal-content-header grid-header'>
              <div className='close-reply-messages-modal' onClick={() => setRECEIPT_DETAILS(false)}>
                <IoMdCloseCircleOutline />
              </div>
              <p className='text-color popup-modal-content-header-title'>Receipt</p>
            </div>
            <div className='popup-modal-content-body'>
                
                <div>
                  <p className='text-color profile-bio-section-name'>VISA CARD DEPOSIT</p>
                  <p className='text-color profile-bio-section-email'>09:23pm, 10 October, 2024</p>
                
              </div>


              <div className='contact-section'>
                <div className='contact-section-detail'>
                  <p className='text-color contact-section-detail-big-text'>Transaction ID</p>
                  <p className='text-color contact-section-detail-small-text'>9855678765456776567</p>
                </div>
               
                <div className='contact-section-detail'>
                  <p className='text-color contact-section-detail-big-text'>Transaction Type</p>
                  <p className='text-color contact-section-detail-small-text'>CARD PAYMENT</p>
                </div>

                <div className='contact-section-detail'>
                  <p className='text-color contact-section-detail-big-text'>Transaction Time</p>
                  <p className='text-color contact-section-detail-small-text'>09:23pm, 10 October, 2024</p>
                </div>

                <div className='contact-section-detail'>
                  <p className='text-color contact-section-detail-big-text'>Amount Paid</p>
                  <p className='text-color contact-section-detail-small-text'>$100,000</p>
                </div>

              </div>

            </div>
          </div>


          

          <div className={DRIVER_VERIFICATION_DETAILS ? 'popup-bio-info' : 'popup-bio-info hide-modal'}>
            <div className='popup-modal-content-header grid-header'>
              <div className='close-reply-messages-modal' onClick={() => setDRIVER_VERIFICATION_DETAILS(false)}>
                <IoMdCloseCircleOutline />
              </div>
              <p className='text-color popup-modal-content-header-title'>Driver Verification</p>
            </div>
            <div className='popup-modal-content-body'>
              <div className='profile-bio-section'>
                <div className='c-item'>
                  <img src='https://th.bing.com/th/id/OIP.Q6UzOWk9FXLJoQN8o5yl5gAAAA?rs=1&pid=ImgDetMain' className='profile-bio-section-img' />
                </div>
                <div>
                  <p className='text-color profile-bio-section-name'>Morrisa R. Williams</p>
                  <p className='text-color profile-bio-section-email'>morriswilliams@gmail.com</p>
                  <p className='text-color profile-bio-section-address'><FaLocationDot />New York, United States</p>

                </div>
              </div>

            

              <div className='about-section'>
                <p className='text-color about-section-title'>About</p>
                <p className='text-color about-section-desc'>I have been driving for over a decade now, and i know how to navigate well onthe highway </p>
              </div>



              <div className='about-section'>
                <p className='text-color about-section-title'>Drivers Licence</p>
                <div className='kyc-doc-scroll-horizontal'>
                  <div className='kyc-card'>
                    <p className='text-color text-color'>Document Here</p>
                  </div>

                 
                </div>
              </div>

              <div className='action-buttons'>
              <button className='success action-btn'>Approve</button>
              <button className='danger action-btn'>Reject</button>
              </div>

            </div>
          </div>


          <div className={SEARCHING_MODAL ? 'search-popup' : 'search-popup hide-modal'}>
            <div className='popup-modal-content'>
              <div className='popup-modal-content-header grid-header'>
                <div className='close-reply-messages-modal' onClick={() => setSEARCHING_MODAL(false)}>
                  <IoMdCloseCircleOutline />
                </div>
                <p className='text-color popup-modal-content-header-title'>Searching {SEARCH_PATTERN}</p>
              </div>
              <div className='popup-modal-content-body'>

                {
                  FILTERED_FEATURES.length > 0 ?
                    <div>
                      {
                        FILTERED_FEATURES.map((value, index) => (

                          <div className='search-feature-item' onClick={() => handleSearchedFeature(value.id)} key={index} >
                            <div className='c-item'>
                              <TbHistoryToggle />
                            </div>
                            <div>
                              <p className='text-color text-color search-feature-item-name'>{value.title}</p>
                              <p className='text-color text-color search-feature-item-desc'>{value.pattern}</p>
                            </div>
                            <div>
                              <span className='text-color view-details-btn'>Goto</span>
                            </div>
                          </div>

                        ))
                      }
                    </div>
                    :

                    <div className='no-search-pattern'>
                      <p className='text-color no-search-pattern-text'>No search pattern found!</p>
                    </div>
                }


              </div>
            </div>
          </div>




        </div>
      </div>
      <div className='container-body' onClick={() => closeAllModal()}>
        <Navigation logout={logout} navOnPress={navOnPress} />
        <div className='main-container-body'>
        {PAGE_COMPONENT}
        </div>
      </div>
    </div>

    :
    <LoginForm success={onLoginSuccess}/>
  );
}
