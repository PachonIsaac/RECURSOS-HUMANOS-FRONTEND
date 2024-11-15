import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination
} from '@mui/material';
import { FaWeight } from 'react-icons/fa';

const DashboardPersonal = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={"dashboard"}>
      <div className="main-content">
        <h1>Personal</h1>
        <Paper sx={{ width: 'auto', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 650 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow >
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016'}}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016'}}>Estado</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016'}}>Genero</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016'}}>Origen</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016'}}>Ubicación</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {characters.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((character) => (
                  <TableRow key={character.id}>
                    <TableCell>{character.name}</TableCell>
                    <TableCell>{character.status}</TableCell>
                    <TableCell>{character.gender}</TableCell>
                    <TableCell>{character.origin.name}</TableCell>
                    <TableCell>{character.location.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10,25,50]}
            component="div"
            count={characters.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default DashboardPersonal;