import React from 'react'
import NavBar from './NavBar'

const ViewEmployee = () => {
  return (
    <div>
          <NavBar />
          <h2 className="text-center p-5">Employee Details</h2>
          <table className="table table-hover">
              <thead>
                  <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Emp. Code</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Designation</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">Mark Otto</th>
                      <td>12345</td>
                      <td>9067839654</td>
                      <td>Developer</td>
                  </tr>
                  <tr>
                      <th scope="row">Jacob Thornton</th>
                      <td>2345</td>
                      <td>9867856449</td>
                      <td>Designer</td>
                  </tr>
                  <tr>
                      <th scope="row">John Doe</th>
                      <td>3456</td>
                      <td>9123456789</td>
                      <td>Developer</td>
                  </tr>
                  <tr>
                      <th scope="row">Sam Smith</th>
                      <td>4567</td>
                      <td>9234567890</td>
                      <td>Designer</td>
                  </tr>
                  <tr>
                      <th scope="row">Peter Parker</th>
                      <td>5678</td>
                      <td>9345678901</td>
                      <td>Sales</td>
                  </tr>
                  <tr>
                      <th scope="row">John Doe</th>
                      <td>6789</td>
                      <td>9456789012</td>
                      <td>Marketing</td>
                  </tr>
                  <tr>
                      <th scope="row">Kevin Richard</th>
                      <td>7890</td>
                      <td>9567890123</td>
                      <td>Sales</td>
                  </tr>
                  <tr>
                      <th scope="row">Ben Affleck</th>
                      <td>8901</td>
                      <td>9678901234</td>
                      <td>Accounts</td>
                  </tr>
                  <tr>
                      <th scope="row">Jim Carry</th>
                      <td>9012</td>
                      <td>9789012345</td>
                      <td>Marketing</td>
                  </tr>
                  <tr>
                      <th scope="row">Will Smith</th>
                      <td>0123</td>
                      <td>9876543210</td>
                      <td>Developer</td>
                  </tr>
                  <tr>
                      <th scope="row">Henry Cavil</th>
                      <td>9089</td>
                      <td>7789564534</td>
                      <td>Designer</td>
                  </tr>
                  <tr>
                      <th scope="row">Bob Henry</th>
                      <td>5678</td>
                      <td>8956453498</td>
                      <td>Accounts</td>
                  </tr>
              </tbody>
          </table>
    </div>
  )
}

export default ViewEmployee