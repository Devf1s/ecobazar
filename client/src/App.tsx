import { FC } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    )
}
export default App;