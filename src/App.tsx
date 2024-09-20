import React from 'react'
import Main from './templates/Main'
import PackingListProvider from './contexts/PackingLists.tsx'


const App = () => {
    return (
        <React.StrictMode>
            <PackingListProvider>
                <Main/>
            </PackingListProvider>
        </React.StrictMode>
    )
}

export default App
