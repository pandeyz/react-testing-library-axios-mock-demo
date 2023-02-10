import { useState, useEffect } from 'react';
import axios from 'axios';

function UserListing() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <table width="100%" border="1" data-testid="tbl-users">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.length > 0
            ?
            users.map(user => 
              <tr key={user.id} data-testid="tbl-row-data-found">
                <td data-testid={`tbl-row-user-id-${user.id}`}>{user.id}</td>
                <td data-testid={`tbl-row-user-name-${user.id}`}>{user.name}</td>
                <td data-testid={`tbl-row-user-username-${user.id}`}>{user.username}</td>
                <td data-testid={`tbl-row-user-email-${user.id}`}>{user.email}</td>
              </tr>  
            )
            :
            <tr data-testid="tbl-row-no-data-found">
              <td colSpan="4">No data found</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default UserListing;