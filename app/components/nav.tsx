"use client"
import { useState } from 'react'
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdOutlineDriveEta } from "react-icons/md";
import { MdDriveEta } from "react-icons/md";
import { IoCard,IoCardOutline  } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { MdSupervisorAccount, MdOutlineSupervisorAccount  } from "react-icons/md";

import './nav.css'

interface propsType{
    navOnPress: (navMenuName : string)=> void,
    logout: ()=> void
}
export default function Navigation(prop : propsType){
    const [menuOpen, setMenuOpen] = useState('dashboard')
    const menuPress = (menu: string) =>{
      prop.navOnPress(menu)
        setMenuOpen(menu)
    }
    return(
        <div className="nav-container">
          

          <div>
          <div className='nav-items'>
             <div className={menuOpen == 'dashboard'? 'nav-item active' : 'nav-item'} onClick={()=> menuPress('dashboard')}>
               <div className='nav-item-icon'>{menuOpen == 'dashboard'? <GoHomeFill size={17} /> : <GoHome />}</div>
                <p className='nav-itme-text'>Dashboard</p>
              
             </div>
           </div>
           <div className='nav-items'>
             <div className={menuOpen == 'drivers'? 'nav-item active' : 'nav-item'} onClick={()=> menuPress('drivers')}>
               <div className='nav-item-icon'>{menuOpen == 'drivers'? <MdDriveEta size={17} /> : <MdOutlineDriveEta />}</div>
                <p className='nav-itme-text'>Drivers</p>
              
             </div>
           </div>

           <div className='nav-items'>
             <div className={menuOpen == 'riders'? 'nav-item active' : 'nav-item'} onClick={()=> menuPress('riders')}>
               <div className='nav-item-icon'>{menuOpen == 'riders'? <MdSupervisorAccount size={17} /> : <MdOutlineSupervisorAccount  />}</div>
                <p className='nav-itme-text'>Riders</p>
              
             </div>
           </div>

           <div className='nav-items'>
             <div className={menuOpen == 'transactions'? 'nav-item active' : 'nav-item'} onClick={()=> menuPress('transactions')}>
               <div className='nav-item-icon'>{menuOpen == 'transactions'? <IoCard size={17} /> : <IoCardOutline  />}</div>
                <p className='nav-itme-text'>Transactions</p>
              
             </div>
           </div>

           
          </div>

          <div>

          <div className='nav-items'>
             <div className='nav-item' onClick={()=> props.logout()}>
               <div className='nav-item-icon'> <IoMdLogOut /></div>
                <p className='nav-itme-text'>Logout</p>
              
             </div>
             </div>
             </div>

            
          </div>
        
    )
}