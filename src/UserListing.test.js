import { render, act } from '@testing-library/react';
import UserListing from './components/UserListing';
import axiosMock from 'axios';

it("fetches and displays data", async () => {
  const users = [
    { "id": 1,"name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz" },
    { "id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv" }
  ];
  axiosMock.get.mockResolvedValueOnce({data: users});
  
  let userListing = await act( async () => render(<UserListing/>));
  
  let tableRows = userListing.getAllByTestId('tbl-row-data-found');
  expect(tableRows.length).toEqual(users.length);

  if( tableRows.length === users.length )
  {
    for(let i=0; i<users.length; i++) {
      expect(userListing.getByTestId(`tbl-row-user-id-${i+1}`).textContent).toEqual(users[i]['id'].toString());
      expect(userListing.getByTestId(`tbl-row-user-name-${i+1}`).textContent).toEqual(users[i]['name']);
      expect(userListing.getByTestId(`tbl-row-user-username-${i+1}`).textContent).toEqual(users[i]['username']);
      expect(userListing.getByTestId(`tbl-row-user-email-${i+1}`).textContent).toEqual(users[i]['email']);
    }
  }
});