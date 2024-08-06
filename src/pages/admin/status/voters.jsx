import React from 'react';
import { Link } from "react-router-dom";


const UserStatus = () => {
    return (
        <section className="welcome con">
        <nav className="nav">
            <ul>
                <li><Link to="/admin/dashboard" className="side">Dashboard</Link></li>
                <hr/>
                <li><Link to="/admin/posts" className="side" >Post</Link></li>
                <hr/>
                <li><Link to="/admin/contestants" className="side">Contestants</Link></li>
                <hr/>
                <li><Link to="/admin/result" className="side">Result</Link></li>
                <hr/>
                <li><Link to="/admin/status" className="side">Voters</Link></li>
            </ul>                   
        </nav>
        <section className='table'>
            <div>
               <h1>VOTERS</h1> 
               <Link to="/" className="active">Add User</Link>
            </div>
            
            <form>
                <tr>
                    <th>S/N</th>
                    <th>NAME</th>
                    <th>Email</th>
                    <th>Date Registered</th>
                    <th>Reg. Status</th>
                    <th>Active</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ademide Olawale</td>
                    <td>ademide45@gmail.com</td>
                    <td>22/05/2024</td>
                    <td>PENDING</td>
                    <td>
                        <Link to="" className="active">Verify</Link>
                        <Link to="" className="active">Approve</Link>
                        <Link to="" className="active">Decline</Link>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Adigun Fawaz</td>
                    <td>adigun09@gmail.com</td>
                    <td>17/07/2024</td>
                    <td>PENDING</td>
                    <td>
                        <Link to="" className="active">Verify</Link>
                        <Link to="" className="active">Approve</Link>
                        <Link to="" className="active">Decline</Link>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Adigun Fawaz</td>
                    <td>adigun09@gmail.com</td>
                    <td>24/07/2024</td>
                    <td>APPROVED</td>
                    <td>
                        <Link to="" className="active">Verify</Link>
                        <Link to="" className="active">Approve</Link>
                        <Link to="" className="active">Decline</Link>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Adigun Fawaz</td>
                    <td>adigun09@gmail.com</td>
                    <td>03/07/2024</td>
                    <td>APPROVED</td>
                    <td>
                        <Link to="" className="active">Verify</Link>
                        <Link to="" className="active">Approve</Link>
                        <Link to="" className="active">Decline</Link>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Adigun Fawaz</td>
                    <td>adigun09@gmail.com</td>
                    <td>27/07/2024</td>
                    <td>PENDING</td>
                    <td>
                        <Link to="" className="active">Verify</Link>
                        <Link to="" className="active">Approve</Link>
                        <Link to="" className="active">Decline</Link>
                    </td>
                </tr>
            </form>
        </section>
        </section>
    );
};

export default UserStatus;