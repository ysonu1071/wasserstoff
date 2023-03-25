import React, { useEffect, useRef, useState } from 'react'
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BarChart from 'react-easy-bar-chart';

import barchartData from "../data/barchartData"

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SellIcon from '@mui/icons-material/Sell';

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "../styles/home.css"
import Header from './Header'
// import Marks from './Marks';


function Home() {
  const[data, setData] = useState();
  const height = 500;
  const width = 960;


  // useEffect(()=>{

  //       // REQUEST DATA
  //   d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
  //   .then(function(response) {
  //     console.log(response)
  //     setData(response)
  //   });
  // },[])

  return (
    <div className='homepage'>
        <Header/>
       
    
      <div className='homebody'>
       <div className='homeleft'>
         <p className='homeleft-title'>WSTF FRONT-END HACKATHON</p>
         <div className='allusers'>
            <div>
              <p>All users</p>
              <p id='detail'>DETAILS <ChevronRightIcon/></p>
            </div>
            <p className='alluser-count'>2,431,340</p>
         </div>

         <div className='treetab-container'>
            <div className='tab1'>
              <p className='tabicon'><TrendingUpIcon/></p>
              <div>
                <p>Total earning</p>
                <p>540,549</p>
              </div>
            </div>
            <div className='tab2'>
              <p className='tabicon'><SellIcon/></p>
              <div>
                <p>Sales</p>
                <p>1,205,677</p>
              </div>
            </div>
            <div className='tab3'>
             <p className='tabicon'><EqualizerIcon/></p>
              <div>
                <p>Purchase</p>
                <p>48,430,039</p>
              </div>
            </div>
           
          </div>
        
          <div className='radial-progress'>
            <div className='radial-p-contaier'>
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                  value={27}
                    text={`27%`}
                    pathTransitionDuration={0.5}
                    strokeWidth={5}
                    pathColor={`rgba(62, 152, 199, ${27 / 100})`}
                    />
                </div>
                <div>
                  <p className='user'>92,980</p>
                  <p>Active users</p>
                </div>
            </div>
            <div className='radial-p-contaier'>
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={67}
                    text={`67%`}
                    pathTransitionDuration={0.5}
                    strokeWidth={5}
                    />
                </div>
                <div>
                  <p className='user'>92,980</p>
                  <p>New users</p>
                </div>
            </div>
          </div>
       </div>
       <div className='homeright'>
       <ComposableMap projection="geoEqualEarth" width={800} height={500}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
       </div>

       <div className='barchart-container'>
        <div>
          <p>Sales figure</p>
          <p>$10,430</p>
        </div>
       <BarChart 
          xAxis=''
          yAxis=""
          height={30}
          width={1300}
          data={barchartData}

        />
       </div>
      </div>
 
    </div>
  )
}

export default Home