import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter, AdminRouter } from 'app/providers/router'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'


const App = () => {

 
  return (
    <Provider store={setupStore()}>
      <div className={classNames('app', {}, [])}>
       <Suspense fallback="">
          <div className="content-page">
            <AppRouter />
            <AdminRouter />
          </div>
       </Suspense>
    </div>
    </Provider>
  )
}

export default App;