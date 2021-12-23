
import './App.css';

import provider from './config/firebase-config';
import socialMediaAuth from './service/auth';
function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="App">
    {/* <button onClick={() => handleOnClick(facebookProvider)}>FaceBook</button> */}
    
    <button onClick={() => handleOnClick(provider)}>Google</button>
  </div>
  );
}
export default App;




