import React from 'react'

const StudentReportComponent = (props) => {
    const percent = ((props.Attendence / props.totalClasses) * 100).toFixed(2);
  return (
    <tr id={props.key} style={{backgroundColor: percent < 75 ? '#ff8164' : percent < 80 ? '#fdb469' : 'white', fontSize: '2vh', height: '7vh', border: '1px solid black' }}>
      <td style={{borderTopLeftRadius: '18px', borderBottomLeftRadius: '18px'}}>{props.courseID}</td>
      <td>{props.Subject}</td>
      <td>{percent}%</td>
    </tr>
  )
}

export default StudentReportComponent;