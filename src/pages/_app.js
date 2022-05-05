import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../style/global.css'
import { SessionProvider } from 'next-auth/react';


const MyApp = ({ Component, pageProps }) => {
  return (
    //Giving the entire application access to NextAuth the authentication state
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
  )
}

export default MyApp