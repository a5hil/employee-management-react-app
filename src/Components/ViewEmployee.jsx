import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'

const ViewEmployee = () => {

    const [data, showData] = useState(
        [
            { "name": "Mark Otto", "empCode": "12345", "phoneNumber": "9067839654", "designation": "Developer" },
            { "name": "Jacob Thornton", "empCode": "2345", "phoneNumber": "9867856449", "designation": "Designer" },
            { "name": "John Doe", "empCode": "3456", "phoneNumber": "9123456789", "designation": "Developer" },
            { "name": "Sam Smith", "empCode": "4567", "phoneNumber": "9234567890", "designation": "Designer" },
            { "name": "Peter Parker", "empCode": "5678", "phoneNumber": "9345678901", "designation": "Sales" },
            { "name": "John Doe", "empCode": "6789", "phoneNumber": "9456789012", "designation": "Marketing" },
            { "name": "Kevin Richard", "empCode": "7890", "phoneNumber": "9567890123", "designation": "Sales" },
            { "name": "Ben Affleck", "empCode": "8901", "phoneNumber": "9678901234", "designation": "Accounts" },
            { "name": "Jim Carry", "empCode": "9012", "phoneNumber": "9789012345", "designation": "Marketing" },
            { "name": "Will Smith", "empCode": "0123", "phoneNumber": "9876543210", "designation": "Developer" },
            { "name": "Henry Cavil", "empCode": "9089", "phoneNumber": "7789564534", "designation": "Designer" },
            { "name": "Bob Henry", "empCode": "5678", "phoneNumber": "8956453498", "designation": "Accounts" }
        ]
    )

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
                    {data.map(
                        (value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{value.name}</th>
                                    <td>{value.empCode}</td>
                                    <td>{value.phoneNumber}</td>
                                    <td>{value.designation}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ViewEmployee