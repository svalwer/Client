import React from 'react'

import { Link } from 'react-router-dom'

import Head from './head'


const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
            <Link to="/dashboard/main">
                <div id="title">Main</div>
                <Link to="/dashboard/profile/0470b1fc-ec70-4eec-a94a-db9837adbaba">
                    Go To Profile
                </Link>
                <Link to="/dashboard">
                    Go To Root
                </Link>
            </Link> 
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
