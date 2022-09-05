import React from 'react'
import { greeting } from '../../../utils/greeting'
import {FaUsers, FaServicestack, FaBook} from 'react-icons/fa'
import {FiBarChart} from 'react-icons/fi'
import { Chart } from "react-google-charts";
import { useGlobalContext } from '../../../context';
export const data2 = [
  ["day", "a", "b", "c", "d"],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 50, 77, 66, 77],
  ["Fri", 15, 66, 22, 68],
];

export const options2 = {
  legend: "none",
};


const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

const Home = () => {
  const {user} = useGlobalContext()
  return (
    <div className='mt-6'>
     
        <div className=' dark:text-gray-200 dark:bg-secondary-dark-bg  md:pt-0  w-full pt-6'>
          <div>
            <p className='font-bold text-gray-600 text-left'>
              {greeting() + ` ${user.name}`}
            </p>
          </div>

        </div>
        <ul className='flex flex-wrap items-center justify-between'>
          <li className=' m-8 rounded-lg flex-auto bg-white shadow-sm hover:shadow-xl'>
            <div style={{backgroundColor: "#f0e0e0"}} className="flex gap-2 text-xl p-4">
        
            <button type='button'
            style={{
              color: '#03C9D7',
              backgroundColor: '#E5FAFB'
            }}
            className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
              <FaUsers /> 
            </button>
            <span className='p-4'>Students</span>
            </div>
            <div className='p-4 text-3xl text-center'>
              2398
            </div>
          </li>
          <li className=' m-8 rounded-lg flex-auto bg-white shadow-sm hover:shadow-xl'>
                <div style={{backgroundColor: "#e0f0e0"}} className="flex gap-2 text-xl p-4">
            
                <button type='button'
                style={{
                  color: 'rgb(255, 244, 229)',
                  backgroundColor: 'rgb(254, 201, 15)'
                }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                  <FaServicestack /> 
                </button>
                <span className='p-4'>Sessions</span>
                </div>
                <div className='p-4 text-3xl text-center'>
                  23
                </div>
            </li>
          <li className=' m-8 rounded-lg flex-auto bg-white shadow-sm hover:shadow-xl'>
                <div style={{backgroundColor: "#e0e0f0"}} className="flex gap-2 text-xl p-4">
            
                <button type='button'
                style={{
                  color: 'rgb(0, 194, 146)',
                  backgroundColor: 'rgb(235, 250, 242)'
                }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                  <FaBook /> 
                </button>
                <span className='p-4'>Services</span>
                </div>
                <div className='p-4 text-3xl text-center'>
                  231
                </div>
            </li>
          <li className=' m-8 rounded-lg flex-auto bg-white shadow-sm hover:shadow-xl'>
                <div style={{backgroundColor: "#e0e0fe"}} className="flex gap-2 text-xl p-4">
            
                <button type='button'
                style={{
                  color: 'rgb(228, 106, 118)',
                  backgroundColor: 'rgb(255, 244, 229)'
                }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                  <FiBarChart /> 
                </button>
                <span className='p-4'>Sales</span>
                </div>
                <div className='p-4 text-3xl text-center'>
                  231
                </div>
            </li>
            
            </ul>
            <div>
            <div>
              <h2>Sales</h2>
              {false ? (
                <p className='text-2xl text-red-400'>No Sale</p>
              ) : (
                <Chart
                  width="100%"
                  height="400px"
                  chartType="AreaChart"
                  loader={<div>Loading Chart</div>}
                  data={data}
                  options={options}
                ></Chart>
              )}
            </div>
          </div>
            <div>
            <div>
              <h2>Projections</h2>
              {false ? (
                <p className='text-2xl text-red-400'>No Sale</p>
              ) : (
                <Chart
                chartType="CandlestickChart"
                width="100%"
                height="400px"
                data={data2}
                options={options2}
              />
              )}
            </div>
          </div>

    </div>
  )
}

export default Home