import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tabs, { TabPane } from 'rc-tabs'
import Dashboard from '../components/dashboard/dashboard'
import Marketplace from '../components/marketplace/marketplace'
import Link from 'next/link'
import React, {useState} from 'react'

const tab_icon1 = 
        <div className='flex items-center px-6'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff">
            <path d="M15 9a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 011-1h5zm-9 3a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1h5zM6 0a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h5zm9 0a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1a1 1 0 011-1h5z" fillRule="evenodd"></path>
          </svg>
          <div className='pl-2 text-base hidden md:block'>Dashboard</div>
        </div>
const tab_icon2 = 
        <div className='flex items-center px-6'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill= "#ffffff">
            <path d="M15.637 3.011L13.95.381A.836.836 0 0013.247 0H2.752a.836.836 0 00-.704.38L.362 3.012C-.508 4.37.264 6.26 1.89 6.475c.117.015.236.022.356.022.768 0 1.45-.33 1.917-.84.467.51 1.15.84 1.917.84.769 0 1.45-.33 1.917-.84.467.51 1.15.84 1.917.84.769 0 1.45-.33 1.917-.84a2.6 2.6 0 002.273.818c1.631-.214 2.406-2.103 1.533-3.464zm-1.884 4.301c-.26 0-.517-.038-.766-.096V9.75H3.012V7.216c-.25.056-.507.096-.766.096-.156 0-.315-.01-.468-.03a3.332 3.332 0 01-.426-.091v4.997c0 .449.371.812.831.812h11.638c.46 0 .831-.363.831-.813V7.191c-.14.04-.28.073-.426.091-.158.02-.314.03-.473.03z"></path>
          </svg>
          <div className='pl-2 text-base hidden md:block'>MarketPlace</div>
        </div>


const Home: NextPage = () => {

  const [tabIndex, setTabIndex] = useState(1)

  var callback = function(key:any) {
    if(key==="1")
      setTabIndex(1)
    if(key==="2")
      setTabIndex(2)
  };
  return (
    <div className='main-container w-full h-full min-h-[100vh]'>
      <Head>
        <title>Market Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/poke.png" />
      </Head>
      <div className='h-[52px] w-full bg-black fixed z-10 '>        
        <Link href={'/'}>
          <a className='w-[90px] h-[52px] flex justify-center items-center hover:cursor-pointer absolute left-0 top-0 z-10'>
            <Image src="/poke.png" width={52} height={52} alt='logo'/>
          </a>
        </Link>
        
        <button className='w-12 md:w-[100px] h-[52px] flex justify-center items-center md:bg-blue-600  absolute right-0 top-0 z-10'>
          <svg width="16" height="16" viewBox="0 -1 16 16" fill='#ffffff'>
            <path d="M13 12h-2.625a.376.376 0 01-.375-.375v-1.25c0-.206.169-.375.375-.375H13c.553 0 1-.447 1-1V3c0-.553-.447-1-1-1h-2.625A.376.376 0 0110 1.625V.375c0-.206.169-.375.375-.375H13a3 3 0 013 3v6a3 3 0 01-3 3zm-1.469-6.281L6.281.469C5.813 0 5 .329 5 1v3H.75a.748.748 0 00-.75.75v3c0 .416.334.75.75.75H5v3c0 .672.813 1 1.281.531l5.25-5.25a.756.756 0 000-1.062z"></path>
          </svg>
          <p className='ml-2 mb-1 text-base text-white hidden md:block'>Login</p>
        </button>
      </div>
      
      <div className='menu-tabs top-0 left-0 text-white w-full fixed z-10'>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab= {tab_icon1} key="1"> </TabPane>
          <TabPane tab= {tab_icon2} key="2"> </TabPane>
        </Tabs>
      </div>
      <div className='h-[52px]'></div>
      {
        tabIndex===1?
        <Dashboard/>
        :
        <Marketplace/>
      }
    </div>
  )
}

export default Home
