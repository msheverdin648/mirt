import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/RouteConfig/routeConfig'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'



export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).filter(({isAdmin})=>!isAdmin).map(({path, element}) => (
        <Route key={path} path={path} element={( 
            <>
            <Header />
              <div className='page-wrapper'>
                {element}
              </div>
            <Footer />
            </>
          )} />
          ))}
      </Routes>
    </Suspense>
    
  )
}
