import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile.jsx'
import Counter from './components/Counter.jsx';
import ProfilePage from './ProfilePage.jsx';
import UserContext from './UserContext.js';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
      <UserContext.Provider value={userData}>
        <ProfilePage userData={userData} />
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App
