

const daysAnalytics = [
    {
        name: '06 am',
        drivers: 20,
        
    },
    {
        name: '07 am',
        drivers: 180,
        
    },
    {
        name: '08 am',
        drivers: 280,
        
    },{
        name: '09 am',
        drivers: 140,
        
    },{
        name: '10 am',
        drivers: 47,
        
    },{
        name: '11 am',
        drivers: 90,
        
    },{
        name: '12 pm',
        drivers: 260,
        
    },{
        name: '01 pm',
        drivers: 200,
        
    },{
        name: '02 pm',
        drivers: 137,
        
    },{
        name: '03 pm',
        drivers: 61,
        
    },{
        name: '04 pm',
        drivers: 29,
        
    },{
        name: '05 pm',
        drivers: 15,
        
    },{
        name: '06 pm',
        drivers: 9,
        
    }
]






const yesterdayAnalytics = [
    {
        name: '06 am',
        drivers: 10,
        
    },
    {
        name: '07 am',
        drivers: 120,
        
    },
    {
        name: '08 am',
        drivers: 80,
        
    },{
        name: '09 am',
        drivers: 40,
        
    },{
        name: '10 am',
        drivers: 247,
        
    },{
        name: '11 am',
        drivers: 190,
        
    },{
        name: '12 pm',
        drivers: 160,
        
    },{
        name: '01 pm',
        drivers: 20,
        
    },{
        name: '02 pm',
        drivers: 137,
        
    },{
        name: '03 pm',
        drivers: 61,
        
    },{
        name: '04 pm',
        drivers: 9,
        
    },{
        name: '05 pm',
        drivers: 15,
        
    },{
        name: '06 pm',
        drivers: 3,
        
    }
]




const weeklyAnalytics = [
    {
        name: 'Mon',
        drivers: 400,
        
    },
    {
        name: 'Tue',
        drivers: 900,
        
    },
    {
        name: 'Wed',
        drivers: 1180,
        
    },{
        name: 'Thur',
        drivers: 2000,
        
    },{
        name: 'Fri',
        drivers: 1902,
        
    },{
        name: 'Sat',
        drivers: 500,
        
    },{
        name: 'Sun',
        drivers: 2600,
        
    }
]



const monthlyAnalytics = [
    {
        name: '01 ',
        drivers: 20,
        
    },
    {
        name: '02 ',
        drivers: 180,
        
    },
    {
        name: '03 ',
        drivers: 280,
        
    },{
        name: '04 ',
        drivers: 140,
        
    },{
        name: '05 ',
        drivers: 47,
        
    },{
        name: '06 ',
        drivers: 90,
        
    },{
        name: '07 ',
        drivers: 260,
        
    },{
        name: '08 ',
        drivers: 200,
        
    },{
        name: '09',
        drivers: 137,
        
    },{
        name: '10 ',
        drivers: 61,
        
    },{
        name: '11 ',
        drivers: 29,
        
    },{
        name: '12 ',
        drivers: 15,
        
    },{
        name: '13 ',
        drivers: 9,
        
    }
    ,{
        name: '14 ',
        drivers: 2329,
        
    },{
        name: '15 ',
        drivers: 4009,
        
    },{
        name: '16 ',
        drivers: 459,
        
    },{
        name: '17 ',
        drivers: 899,
        
    },{
        name: '18 ',
        drivers: 933,
        
    },{
        name: '19 ',
        drivers: 209,
        
    },{
        name: '20 ',
        drivers: 1900,
        
    },{
        name: '21 ',
        drivers: 789,
        
    },{
        name: '22 ',
        drivers: 789,
        
    },{
        name: '23 ',
        drivers: 9,
        
    },{
        name: '24 ',
        drivers: 998,
        
    },{
        name: '25 ',
        drivers: 954,
        
    },{
        name: '26 ',
        drivers: 457,
        
    },{
        name: '27 ',
        drivers: 345,
        
    },{
        name: '28 ',
        drivers: 987,
        
    },{
        name: '29 ',
        drivers: 902,
        
    }
    ,{
        name: '30 ',
        drivers: 1002,
        
    }
]


export default function ANALYTICS(){
   return {
    daysAnalytics,
   monthlyAnalytics,
   weeklyAnalytics,
   yesterdayAnalytics
   }
}