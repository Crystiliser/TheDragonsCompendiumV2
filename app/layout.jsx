import '../styles/globals.css';
import LayoutDrawer from './LayoutDrawer';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};


export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div>
                    <LayoutDrawer>
                        {children}
                    </LayoutDrawer>
                </div>
            </body>
        </html>
    );
}
