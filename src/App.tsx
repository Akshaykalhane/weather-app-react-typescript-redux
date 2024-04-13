
import { Provider } from 'react-redux'
import { store } from './store'
import WeatherDisplay from './components/weatherDisplay/weatherDisplay'

function App() {

  return (
    <>
    <Provider store={store}>
      <WeatherDisplay />      
    </Provider>
    </>
  )
}

export default App
