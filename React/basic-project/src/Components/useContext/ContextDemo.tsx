import React, { useState } from 'react'
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

export interface User {
    isSubscribed: boolean;
    name: string;
}

interface ContextDemoProps {}

function ContextDemo({}: ContextDemoProps) {

    // const [user] = useState<User>({
    //     isSubscribed: true,
    //     name: "Mike"
    // });

  return (
    <>
        {/* <DashboardContext.Provider value={user}> */}
            <Dashboard/>
        {/* </DashboardContext.Provider> */}
    </>
  )
}

export default ContextDemo