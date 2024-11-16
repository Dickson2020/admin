import './Home.css'

import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ANALYTICS from './analytics';
import { FiArrowDownLeft } from 'react-icons/fi';


interface propsType{
    showReceiptDetails: (id: number)=> void,
    hideReceiptDetails: ()=> void,
}
export default function TransactionsPage( prop : propsType) {

    const [analyticsData, setAnalyticsData] = useState(ANALYTICS().daysAnalytics)
    const [chooseAnalyticsView, setChooseAnalyticsView] = useState('days')

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

     


    return (
        <div className='dashboard-home-container'>
        
         
        <div className='activity-overview2'>
                <div className='graph-area'>
                    <div className='graph-top-area'>
                    <div className='graph-top-area-section-1'>
                    <span className='graph-top-area-title'>Transactions Overview</span>

                    </div>

                    <div className='graph-top-area-section-2'>
                        <div onClick={()=>setChooseAnalyticsView('days')} className={chooseAnalyticsView == 'days'? 'graph-top-area-section-2-item active-graph-control text-color ' : 'text-color  graph-top-area-section-2-item'}>
                            Today
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('yesterday')} className={chooseAnalyticsView == 'yesterday'? 'graph-top-area-section-2-item active-graph-control text-color ' : 'text-color  graph-top-area-section-2-item'}>
                            Yesterday
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('weekly')} className={chooseAnalyticsView == 'weekly'? 'graph-top-area-section-2-item active-graph-control text-color ' : 'text-color  graph-top-area-section-2-item'}>
                            7days
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('monthly')} className={chooseAnalyticsView == 'monthly'? 'graph-top-area-section-2-item active-graph-control text-color ' : 'text-color  graph-top-area-section-2-item'}>
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

             
            </div>
            <div className='grid-drivers-overview2'>
            <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='top-drivers-area-title text-color'>Card Payments</span>
                    </div>

                    <div>

                        <div className='top-driver-item' onClick={()=> prop.showReceiptDetails(1)}>
                            <div className='c-item gray-w'>
                                <FiArrowDownLeft color='#000'/>
                            </div>
                            <div>
                                <p className='top-driver-item-name text-color'>$45,989 USD Card Deposit</p>
                                <p className='top-driver-item-email text-color'>VISA CARD : 09pm October, 2024</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>View receipt</span>
                            </div>
                        </div>



                    </div>
                </div>

                <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='top-drivers-area-title'>Payments</span>
                    </div>

                    <div>

                        <div className='top-driver-item' onClick={()=> prop.showReceiptDetails(1)}>
                            <div className='c-item gray-w'>
                                <FiArrowDownLeft color='#fff'/>
                            </div>
                            <div>
                                <p className='top-driver-item-name text-color'>Yasser Payed $150 Pickup Ride</p>
                                <p className='top-driver-item-email text-color'>from: WALLET : 09pm October, 2024</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>View receipt</span>
                            </div>
                        </div>

                       
                        

                    </div>
                </div>

             

              
            </div>
        </div>
    )
}