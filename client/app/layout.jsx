import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Hands For Hope',
    description: 'Charity',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body> 
            <Provider>
            <div id="main">
                <div id="gradient"/>
            </div>
            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;