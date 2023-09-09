import TvView from './app/features/tvs/TvView';
import PhoneView from "./app/features/phones/PhoneView";
import AdminView from './app/features/admin/AdminView';


function App() {
  return (
    <>
      <div className="section-one">
        <PhoneView/>
        <TvView/>
      </div>
      <AdminView/>
    </>
    
  );
}

export default App;
