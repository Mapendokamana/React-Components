import React from 'react';
import EmployeeView from './employee-view';

const employees = [
  {
    id: 1,
    name: 'Kevin Lim',
    position: 'CEO',
    email: 'mapendo@company.com',
    phone: '7839393',
    department: 'Management',
    photo: 'nopicture',
    address: '112 mars'
  },
  { 
    id: 2,
    name: 'Mapendo Kamana',
    position: 'CEO',
    email: 'mapendo@company.com',
    phone: '7839393',
    department: 'Management',
    photo: 'nopicture',
    address: '112 mars',
  
   },
  {
    id: 3,
   name: 'Kamana',
   position: 'CEO',
   email: 'mapendo@company.com',
   phone: '7839393',
   department: 'Management',
   photo: 'nopicture',
   address: '112 mars',
  },
 { 
    id: 4,
  name: 'Jonas',
  position: 'CEO',
  email: 'mapendo@company.com',
  phone: '7839393',
  department: 'Management',
  photo: 'nopicture',
  address: '112 mars'
 },
{ id: 5,
    name: 'Benfient',
    position: 'CEO',
    email: 'mapendo@company.com',
    phone: '7839393',
    department: 'Management',
    photo: 'nopicture',
    address: '112 mars'
},
{id: 6,
name: 'Bernard kob',
position: 'CEO',
email: 'mapendo@company.com',
phone: '7839393',
department: 'Management',
photo: 'nopicture',
address: '112 mars'
},
{id: 7,
name: 'Sandrine Lim',
position: 'CEO',
email: 'mapendo@company.com',
phone: '7839393',
department: 'Management',
photo: 'nopicture',
address: '112 mars'
},

{
    id: 8,
    name: 'janathan',
    position: 'CEO',
    email: 'mapendo@company.com',
    phone: '7839393',
    department: 'Management',
    photo: 'nopicture',
    address: '112 mars'
},
{
    id: 9,
    name: 'Pascal',
    position: 'CEO',
    email: 'mapendo@company.com',
    phone: '7839393',
    department: 'Management',
    photo: 'nopicture',
    address: '112 mars'
},
{
    id: 10,
    name: 'Kevin Chick',
    position: 'CEO',
    email: 'mapendo@company.com',
    phone: '7839393',
    department: 'Cashier',
    photo: 'nopicture',
    address: '112 mars'
}
  ];
  
  function Employees() {
    return (
      <div className="row">
        {employees.map(employee => (
          <div key={employee.id} className="col-md-4 mb-4">
            <EmployeeView employee={employee} />
          </div>
        ))}
      </div>
    );
  }
  
  export default Employees;
  