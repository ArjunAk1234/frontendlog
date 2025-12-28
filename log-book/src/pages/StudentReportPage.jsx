import logo from '../logo.png';
import StudentReportComponent from "../components/StudentReportComponent.jsx";
const data = [
  { courseID: 'CSE101', Subject: 'Data Structures', Attendence: 40, totalClasses: 40 },
  { courseID: 'CSE102', Subject: 'Algorithms', Attendence: 33, totalClasses: 42 },
  { courseID: 'CSE103', Subject: 'Operating Systems', Attendence: 20, totalClasses: 38 },
];
const StudentReport = (props) => {
  return (
    <div className="App">
      <header style={{ backgroundColor: '#AD3A3C' , color: 'white' , display: 'flex', justifyContent: 'space-between' }}>
            <div style={{display: 'flex', alignItems: 'center', paddingLeft: '30px', fontSize: '20px', fontWeight: 'bold'}}>
                <img src={logo} alt="Logo" style={{height: '50px', marginRight: '10px',padding:'20px'}} />
            </div>

            <nav style={{display: 'flex',alignItems: 'center', gap: '2vw',color: 'white', paddingRight: '20px'}}>
                <a href="#" style={{color: 'white', textDecoration: 'none', fontSize: '2vh'}} >Dashboard</a>
                <a href="#" style={{color: 'white', textDecoration: 'none', fontSize: '2vh'}}>Attendance List</a>
            </nav>
      </header>
      <main>
        <div className='opt' style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#f0f0f0', margin: '30px 20px', padding: '40px 20px', borderRadius: '8px'}}>
          <div className='class-selection'>
            <label htmlFor='class' style={{fontSize: '2vh'}}>Select Class: </label>
            <select id='class' name='class' style={{fontSize: '1.5vh', padding: '5px 5vw', marginLeft: '10px'}}>
              <option value='class1'>Select</option>
            </select>
          </div>
          <div style={{display: 'flex', gap: '1vh',}}>
          <button style={{fontSize: '1.5vh', fontWeight: 'bold', padding: '1vh 2vh'}}>Student Report</button>
          <button style={{fontSize: '1.5vh', fontWeight: 'bold', padding: '1vh 2vh'}}>Class Report</button>
          </div>
        </div>
        <div className='details' style={{ fontSize: '2vh', marginLeft: '5vw', textAlign: 'left', fontWeight: 'bold'}}>
          <p>Name : {props.StudentName}</p>
          <p>Roll No : {props.RollNo}</p>
        </div>
        <div className='cards' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div className='student-details' style={{ backgroundColor: '#f0f0f0', margin: '30px auto', padding: '30px 20px', borderRadius: '8px', textAlign: 'center'}}>
            <table border={0} style={{width: '90vw',borderCollapse: 'separate', borderSpacing: '3px 1vh'}}>
              <tr style={{height: '7vh', fontSize: '2vh'}}>
                <th>CourseID</th>
                <th>Subject</th>
                <th>Attendance %</th>
              </tr>
              <tbody>
                {data.map((item, index) => (
                  <StudentReportComponent
                    key={index}
                    courseID={item.courseID}
                    Subject={item.Subject}
                    Attendence={item.Attendence}
                    totalClasses={item.totalClasses}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {/* <div style={{width: '30vw', backgroundColor: '#f0f0f0', margin: '30px 20px' }}></div> */}
        </div>
      </main>
    </div>
  );
}

export default StudentReport;
