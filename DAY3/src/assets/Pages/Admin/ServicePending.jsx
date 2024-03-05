import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import AdminSideBar from './AdminSideBar';

const ServicePending = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Malfoy', position: 'Health-Care', company: '28-01-2024', selected: true },
    { id: 2, name: 'Harry', position: 'Food-Care', company: '30-01-2024', selected: true },
    // Add more user data as needed
  ]);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserName, setEditedUserName] = useState('');
  const [editedUserPosition, setEditedUserPosition] = useState('');
  const [editedUserCompany, setEditedUserCompany] = useState('');

  const handleEditClick = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);

    setEditingUserId(userId);
    setEditedUserName(userToEdit.name);
    setEditedUserPosition(userToEdit.position);
    setEditedUserCompany(userToEdit.company);
  };

  const handleSaveEdit = () => {
    // Update the user details in the state
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editingUserId
          ? {
              ...user,
              name: editedUserName,
              position: editedUserPosition,
              company: editedUserCompany,
            }
          : user
      )
    );

    // Reset the editing state
    setEditingUserId(null);
    setEditedUserName('');
    setEditedUserPosition('');
    setEditedUserCompany('');
  };

  const handleCancelEdit = () => {
    // Reset the editing state
    setEditingUserId(null);
    setEditedUserName('');
    setEditedUserPosition('');
    setEditedUserCompany('');
  };

  const handleDeleteClick = (userId) => {
    // Implement your logic to delete the user with the specified ID
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <>
    <div className='Book-Container flexCenter' style={{padding:'90px'}}>
    
    <div>
    <AdminSideBar/>
    </div>
    <div>
  
      <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.selected ? 'Pending' : 'Not Pending'}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(user.id)}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={() => handleDeleteClick(user.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Dialog */}
      <Dialog open={editingUserId !== null} onClose={handleCancelEdit}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editedUserName}
            onChange={(e) => setEditedUserName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Position"
            value={editedUserPosition}
            onChange={(e) => setEditedUserPosition(e.target.value)}
            fullWidth
          />
          <TextField
            label="Company"
            value={editedUserCompany}
            onChange={(e) => setEditedUserCompany(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      </div>
    </>
  );
};

export default ServicePending;