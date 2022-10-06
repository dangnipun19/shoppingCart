import '../styles/globals.css'
import { store } from "../redux/store"
import { Provider } from 'react-redux'
import {filterState} from '../context/filterState'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <filterState>
      <Component {...pageProps} />
      </filterState>
    </Provider>
  )
}

export default MyApp
