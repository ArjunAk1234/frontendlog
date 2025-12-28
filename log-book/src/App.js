import './App.css';
import StudentReport  from './pages/StudentReportPage'; 
const candid = { StudentName: 'John Doe',
  RollNo: 'AM.SC.U5CSE24654' };
function App() {
  return (
    <div className="App">
      <StudentReport StudentName={candid.StudentName} RollNo={candid.RollNo}/>
    </div>
  );
}

export default App;
