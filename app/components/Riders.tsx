import './Home.css'
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle, Legend } from 'recharts';

import ANALYTICS from './analytics';

export default function RidersPage() {

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


    return (
        <div className='dashboard-home-container'>
            <div className='grid-overview'>
                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>ONGOING RIDES</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='overview-grid-item-desc-text-1'>16</h4>
                        <span className='overview-grid-item-desc-text-2'>+36.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>CANCELLED RIDES</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='overview-grid-item-desc-text-1'>27</h4>
                        <span className='overview-grid-item-desc-text-2 danger-text'>-10.5%<FaArrowDownLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>REGISTERED RIDERS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='overview-grid-item-desc-text-1'>49,006</h4>
                        <span className='overview-grid-item-desc-text-2'>+20.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>TOTAL TRANSACTIONS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='overview-grid-item-desc-text-1'>$33,493</h4>
                        <span className='overview-grid-item-desc-text-2'>+36.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>
            </div>

            <div className='activity-overview'>
                <div className='graph-area'>
                    <div className='graph-top-area'>
                    <div className='graph-top-area-section-1'>
                    <span className='graph-top-area-title'>Active Riders By Time</span>

                    </div>

                    <div className='graph-top-area-section-2'>
                        <div onClick={()=>setChooseAnalyticsView('days')} className={chooseAnalyticsView == 'days'? 'graph-top-area-section-2-item active-graph-control' : 'graph-top-area-section-2-item'}>
                            Today
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('yesterday')} className={chooseAnalyticsView == 'yesterday'? 'graph-top-area-section-2-item active-graph-control' : 'graph-top-area-section-2-item'}>
                            Yesterday
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('weekly')} className={chooseAnalyticsView == 'weekly'? 'graph-top-area-section-2-item active-graph-control' : 'graph-top-area-section-2-item'}>
                            7days
                        </div>

                        <div onClick={()=>setChooseAnalyticsView('monthly')} className={chooseAnalyticsView == 'monthly'? 'graph-top-area-section-2-item active-graph-control' : 'graph-top-area-section-2-item'}>
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
                        <span className='top-visits-activity-title'>Transaction Overview</span>
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

           
        </div>
    )
}