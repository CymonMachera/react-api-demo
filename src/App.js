import './App.css';
import { useState, useEffect } from 'react';

function App() {

const [collectionList, setCollectionList] = useState([]);

useEffect(() => {
  requestCollections();
}, [setCollectionList])

async function requestCollections(){
  const res = await fetch(`http://localhost:3100/collection`);
  const json = await res.json();
  setCollectionList(json)
}
  return (
    <div className="App">
      <h1>Collection Table</h1>
  <table bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Collect ID</th>
              <th>Farmer UIN</th>
              <th>Pond ID</th>
              <th>Procedure</th>
              <th>Group</th>
              <th>Amount</th>
              <th>Driver Name</th>
              <th>Truck Plate No</th>
              <th>Dep Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {collectionList.map(c => (
              <tr key={c.id}>
                <td>{c.date}</td>
                <td>{c.collect_id}</td>
                <td>{c.farmer_uin}</td>
                <td>
                  {c.pond_id}</td>
                <td>{c.procedure}</td>
                <td>{c.group}</td>
                <td>{c.amount}</td>
                <td>{c.driver_name}</td>
                <td>{c.truck_plate_no}</td>
                <td>{c.dep_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
