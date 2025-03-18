/** @format */
import { useEffect, useContext } from 'react';
import Fileupload from 'Components/Fileupload/Fileupload';
import Results from 'Components/Resultcard/Results';
import { GlobalStyle } from 'styles/GlobalStyle';
import Navbar from 'Components/Navbar';
import { Footertext } from 'Components/Footer/Footertext';
import { ContextProvider, Context } from 'store/Context-Provider';
import { ServerError, UserError } from 'Components/Ui/Errorcard';

function AppContent() {
    const ctx = useContext(Context);
    
    useEffect(() => {
        document.body.style.height = window.innerHeight + 'px';
        const setheight = () => {
            document.body.style.height = window.innerHeight + 'px';
        };
        window.addEventListener('resize', setheight);
        
        // Clipboard paste event listener
        const handlePaste = (e) => {
            const items = e.clipboardData?.items;
            if (!items) return;
            
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const file = items[i].getAsFile();
					
					// Pass as array
                    ctx.imagehandler([file]);
                    break;
                }
            }
        };
        
        window.addEventListener('paste', handlePaste);

        return () => {
            window.removeEventListener('resize', setheight);
            window.removeEventListener('paste', handlePaste);
        };
    }, [ctx]);

    return (
        <>
            <Fileupload />
            <Results />
            <UserError />
            <ServerError />
        </>
    );
}

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <ContextProvider>
                <AppContent />
            </ContextProvider>
            <Footertext />
        </div>
    );
}

export default App;
