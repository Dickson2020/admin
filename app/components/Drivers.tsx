import { useEffect, useState } from 'react';
import './Home.css'
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import BASEURL from '../url';
import { BiLoaderCircle } from 'react-icons/bi';



interface objProps{
    status: boolean, 
    bookedRides: number,
    totalEarnings: number,
    cancelledRides: number,
    availableRides:number
    totalTodayPickup: number,
    totalPickupPayment: number,
    totalUsers: number,
    totalTransactions: number,
    ongoingRides: number
  }

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

  interface propsType{
    showDriverVerificationDetails: (id: number)=> void,
    hideDriverVerificationDetails: ()=> void,
    showDriverDetails: (id: number, data : driverDetails)=> void,
    hideDriverDetails: ()=> void,
}
  
export default function DriversPage( prop : propsType) {
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [unverifiedDrivers, setUnverifiedDrivers] = useState<driverDetails[]>([])
    const [verifiedDrivers, setVerifiedDrivers] = useState<driverDetails[]>([])
    const [rankedDrivers, setRankedDrivers] = useState<driverDetails[]>([])

    const [updates, setUpdates] = useState<objProps>()
     const fetchUpdates = () =>{
       

        fetch(BASEURL + '/admin/fetch-updates',{
            method: 'POST',
            body: JSON.stringify({}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=> res.json()).then((result)=>{
            setIsError(false)
            setIsLoading(false)
            //alert(JSON.stringify(result))
            if(result.status){
                setUpdates(result)
                
            }else{
                setIsError(true)
               
            }

        }).catch((err)=>{
           console.log(err.message)
        })
    }
  
    const fetchDrivers = () =>{
        const data = {
            type: '0',
           
        }

 setIsError(false)
 setIsLoading(true)
 setErrorMessage('')

        fetch(BASEURL + '/admin/fetch-drivers',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=> res.json()).then((result)=>{
            setIsError(false)
            setIsLoading(false)
           // //alert(JSON.stringify(result))
            if(result.status){
                setUnverifiedDrivers(result.unverified)
                setVerifiedDrivers(result.verified)
                setRankedDrivers(result.ranked)
                 fetchUpdates()
            }else{
                setIsError(true)
                setErrorMessage(result.message)
            }

        }).catch((err)=>{
            setIsError(true)
            setIsLoading(false)
            setErrorMessage(err.message)

        })
    }

    useEffect(()=>{
        fetchDrivers()
        fetchUpdates()
    },[])
    return (
        <div className='dashboard-home-container'>
            <div className='grid-overview'>
                <div className='overview-grid-item'>
                    <span className='text-color overview-grid-item-text'>TOTAL TODAY PICKUPS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='text-color overview-grid-item-desc-text-1'>{updates?.totalTodayPickup}</h4>
                        <span className='text-color overview-grid-item-desc-text-2 hide'>+36.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='text-color overview-grid-item-text'>TOTAL PICKUP PAYMENTS</span>
                    <div className='overview-grid-item-desc'>
                    <h4 className='text-color overview-grid-item-desc-text-1'>${updates?.totalPickupPayment}</h4>
                    <span className='text-color overview-grid-item-desc-text-2 danger-text hide'>-10.5%<FaArrowDownLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='text-color overview-grid-item-text'>ACTIVE DRIVERS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='text-color overview-grid-item-desc-text-1'>${updates?.availableRides}</h4>
                        <span className='text-color overview-grid-item-desc-text-2 hide'>+20.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='text-color overview-grid-item-text'>ADMIN EARNINGS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='text-color overview-grid-item-desc-text-1'>${updates?.totalEarnings}</h4>
                        <span className='text-color overview-grid-item-desc-text-2 hide'>+36.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>
            </div>

         

            <div className='grid-drivers-overview'>
            <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='text-color top-drivers-area-title'>Unverified Drivers</span>
                    </div>

                    <div>
                    {

unverifiedDrivers.length > 0?    unverifiedDrivers.map((value : driverDetails,index : number) => (
                       
                       <div key={index} className='top-driver-item' onClick={()=> prop.showDriverDetails(value.id, value)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='text-color top-driver-item-name'>{value.name}</p>
                                <p className='text-color top-driver-item-email'>{value.email}</p>
                            </div>
                            <div>
                                <span className='text-color view-details-btn'>View details</span>
                            </div>
                        </div>

)
                       )

                       :
                       !isLoading && <p className='error-message2'>No data yet!</p>

                      }
                     <div className='c-item'>

                        {
                           isLoading && unverifiedDrivers.length < 1 &&  <BiLoaderCircle className='animated-loader mt' size={30} color='#000'/> 
                        }
                     {
                        errorMessage.length >  2 && <p className='error-message2 mt'>{errorMessage}</p>
                      }

                      {
                        isError && <button onClick={()=> fetchDrivers()} className='refresh-btn'>Refresh</button>
                      }
                     </div>
                    </div>
                </div>

                <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='text-color top-drivers-area-title'>Approved Drivers</span>
                    </div>
                    <div>
                    {

verifiedDrivers.length > 0?  verifiedDrivers.map((value : driverDetails,index : number) => (
                       
                       <div key={index} className='top-driver-item' onClick={()=> prop.showDriverDetails(value.id, value)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='text-color top-driver-item-name'>{value.name}</p>
                                <p className='text-color top-driver-item-email'>{value.email}</p>
                            </div>
                            <div>
                                <span className='text-color view-details-btn'>View details</span>
                            </div>
                        </div>

                       
                       )
                    )
                    :

                    !isLoading && <p className='error-message2'>No data yet!</p>

                      }
                     <div className='c-item'>

                        {
                           isLoading && verifiedDrivers.length < 1 &&  <BiLoaderCircle className='animated-loader mt' size={30} color='#000'/> 
                        }
                     {
                        errorMessage.length >  2 && <p className='error-message2 mt'>{errorMessage}</p>
                      }

                      {
                        isError && <button onClick={()=> fetchDrivers()} className='refresh-btn'>Refresh</button>
                      }
                     </div>
                    </div>
                </div>

                <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='text-color top-drivers-area-title'>Top Drivers</span>
                    </div>

                    <div>
                    {

rankedDrivers.length > 0?   rankedDrivers.map((value : driverDetails,index : number) => (
                       
                       <div key={index} className='top-driver-item' onClick={()=> prop.showDriverDetails(value.id, value)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='text-color top-driver-item-name'>{value.name}</p>
                                <p className='text-color top-driver-item-email'>{value.email}</p>
                            </div>
                            <div>
                                <span className='text-color view-details-btn'>View details</span>
                            </div>
                        </div>

)
                       )

                       :

                      !isLoading && <p className='error-message2'>No data yet!</p>
                      }
                     <div className='c-item'>

                        {
                           isLoading && rankedDrivers.length < 1 &&  <BiLoaderCircle className='animated-loader mt' size={30} color='#000'/> 
                        }
                     {
                        errorMessage.length >  2 && <p className='error-message2 text-color mt'>{errorMessage}</p>
                      }

                      {
                        isError && <button onClick={()=> fetchDrivers()} className='refresh-btn'>Refresh</button>
                      }
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
}