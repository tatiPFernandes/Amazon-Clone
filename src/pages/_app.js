import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../style/global.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp