// import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Body from './Body.js';
function f(user){
  return user.firstName+" "+user.secondName;
};

const people={
  firstName: 'John',
  secondName: 'kevin'
};

function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
