import React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Function to convert a string to camelCase (title case)
const toCamelCase = (str) => {
  return str.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
};

const Profile = ({ user }) => {
  // Convert the user's name to camelCase (title case)
  const userNameCamelCase = toCamelCase(`${user.firstName} ${user.lastName}`);

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <Typography variant="h4" gutterBottom>
        Welcome, {userNameCamelCase}
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">User Name</TableCell>
              <TableCell className="font-semibold">User Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{userNameCamelCase}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Profile;
