import { FC } from 'react';
import AppRouter from '@/components/AppRouter';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const App: FC = () => {
    return (
        <>
            <Header />
            <AppRouter />
			<Footer />
        </>
    )
}
export default App;