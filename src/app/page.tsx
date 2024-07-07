import { Header } from '@/components/header/Header';
import { Main } from '../components/main/Main';
import Theme from '@/Theme';


export default function Home() {
  return (
    <>
    <Theme>
        <Header />
        <Main />
      </Theme>
    </>
  );
}
