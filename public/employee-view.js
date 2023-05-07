import React from 'react';

function EmployeeView({ employee }) {
  const { name, position, email, phone, department, photo, address } = employee;
  return (
    <div className="card">
      <img src={photo} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{position}</p>
        <p className="card-text">{department}</p>
        <p className="card-text"><a href={`tel:${phone}`}>{phone}</a></p>
        <p className="card-text"><a href={`mailto:${email}`}>{email}</a></p>
        <p className="card-text"><a href={`https://www.google.com/maps/search/${address}`} target="_blank" rel="noreferrer">{address}</a></p>
      </div>
    </div>
  );
}

export default EmployeeView;
