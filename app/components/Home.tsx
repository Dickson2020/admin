import './Home.css'
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle, Legend } from 'recharts';

import ANALYTICS from './analytics';
import OnGoingRIdesMap from './ongoing-rides';
import BASEURL from '../url';
import { BiLoaderCircle } from 'react-icons/bi';




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
    showDriverDetails: (id: number, data : driverDetails)=> void,
    hideDriverDetails: ()=> void
}
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
  
export default function DashboardHome( prop : propsType) {

     const [analyticsData, setAnalyticsData] = useState(ANALYTICS().daysAnalytics)
     const [chooseAnalyticsView, setChooseAnalyticsView] = useState('days')

     const trafficAnalytics = [
        {
          name: '6 am',
          transactions: 4000,
          profit: 2400,
        },
        {
            name: '7 am',
            transactions: 24000,
            profit: 24500,
        },
        {
            name: '8 am',
            transactions: 443000,
            profit: 24000,
        },

        {
            name: '9 am',
            transactions: 443000,
            profit: 24000,
        },
        {
            name: '10 am',
            transactions: 443000,
            profit: 24000,
        },
        
        
      ];

     useEffect(()=>{
        switch(chooseAnalyticsView){
            case 'days':
            setAnalyticsData(ANALYTICS().daysAnalytics)
            break
            case 'weekly':
            setAnalyticsData(ANALYTICS().weeklyAnalytics)
            break
            case 'yesterday':
            setAnalyticsData(ANALYTICS().yesterdayAnalytics)
            break
            case 'monthly':
            setAnalyticsData(ANALYTICS().monthlyAnalytics)
            break
        }
     },[chooseAnalyticsView])

     const [isError, setIsError] = useState(false)
     const [errorMessage, setErrorMessage] = useState('')
     const [isLoading, setIsLoading] = useState(false)
    
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
            alert(JSON.stringify(result))
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
             //alert(JSON.stringify(result))
             fetchUpdates()
             if(result.status){
              
                 setRankedDrivers(result.ranked)
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
                    <span className='text-color overview-grid-item-text'>BOOKED RIDES</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='text-color text-color overview-grid-item-desc-text-1'>{updates?.bookedRides}</h4>
                        <span className='text-color overview-grid-item-desc-text-2'>+0.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='text-color overview-grid-item-text'>CANCELLED RIDES</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='text-color text-color overview-grid-item-desc-text-1'>{updates?.cancelledRides}</h4>
                        <span className='text-color overview-grid-item-desc-text-2 danger-text hide'>-10.5%<FaArrowDownLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='text-color overview-grid-item-text'>AVALIABLE RIDES</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='text-color text-color overview-grid-item-desc-text-1'>{updates?.cancelledRides}</h4>
                        <span className='text-color overview-grid-item-desc-text-2 hide'>+20.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='text-color overview-grid-item-text'>TOTAL EARNING</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='text-color text-color text-color  overview-grid-item-desc-text-1'>${updates?.totalEarnings}</h4>
                        <span className='text-color overview-grid-item-desc-text-2 hide'>+36.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>
            </div>

            <div className='activity-overview'>
                <div className='graph-area'>
                    <div className='graph-top-area'>
                    <div className='graph-top-area-section-1'>
                    <span className='text-color graph-top-area-title'>Active Drivers By Time</span>

                    </div>

                    <div className='graph-top-area-section-2'>
                        <div onClick={()=>setChooseAnalyticsView('days')} className={chooseAnalyticsView == 'days'? 'text-color graph-top-area-section-2-item active-graph-control' : 'text-color graph-top-area-section-2-item'}>
                            Today
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('yesterday')} className={chooseAnalyticsView == 'yesterday'? 'text-color graph-top-area-section-2-item active-graph-control' : 'text-color graph-top-area-section-2-item'}>
                            Yesterday
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('weekly')} className={chooseAnalyticsView == 'weekly'? 'text-color graph-top-area-section-2-item active-graph-control' : 'text-color graph-top-area-section-2-item'}>
                            7days
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('monthly')} className={chooseAnalyticsView == 'monthly'? 'text-color graph-top-area-section-2-item active-graph-control' : 'text-color graph-top-area-section-2-item'}>
                            30days
                        </div>
                    </div>
                    </div>
                    <div className='grap-dom'>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={analyticsData}
                                className='chart-view' 
                                defaultShowTooltip={true} 
                                
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="drivers" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className='visits-activity'>
                    <div className='top-visits-activity'>
                        <span className='text-color top-visits-activity-title'>Transaction Overview</span>
                    </div>

                    <div className='analytics-dom'>

                     <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={200}
          data={trafficAnalytics}
          className='chart-view' 
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 39,
          }}

          
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="transactions" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="profit" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

                    </div>
                </div>
            </div>

            <div className='map-drivers-overview'>
                <div className='navigation-map-area'>
                    <div className='navigation-map-area-top-area'>
                        <span className='text-color navigation-map-area-top-area-title'>On Going Rides</span>
                    </div>
                    <div className='map-dom'>
                        <OnGoingRIdesMap />
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