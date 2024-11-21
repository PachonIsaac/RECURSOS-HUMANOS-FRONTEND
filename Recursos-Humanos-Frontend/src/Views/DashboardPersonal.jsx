import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, TextField, IconButton
} from '@mui/material';
import { MdPersonSearch } from "react-icons/md";

import employeesData from '../DatosPrueba/employees.json'


const DashboardPersonal = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://rickandmortyapi.com/api/character');
        const response = {data: employeesData}
        setEmployees(response.data);
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

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleViewDetails = (id) => {
    navigate(`/dashboard/user/${id}`);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(search.toLowerCase()) ||
    employee.second_name.toLowerCase().includes(search.toLowerCase()) ||
    employee.first_surname.toLowerCase().includes(search.toLowerCase()) ||
    employee.second_surname.toLowerCase().includes(search.toLowerCase()) ||
    employee.rol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"dashboard"}>
      <div className="main-content">
        <h1>Personal</h1>
        <TextField
          label="Buscar"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          sx={{ marginBottom: 2 }}
        />
        <Paper sx={{ width: 'auto', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 650 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow >
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Documento</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Apellido</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Rol</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Fecha de Contratación</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016', width: 50 }}>Opciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
                  <TableRow key={employee.identification_document}>
                    <TableCell>{employee.identification_document}</TableCell>
                    <TableCell>{`${employee.first_name} ${employee.second_name}`}</TableCell>
                    <TableCell>{`${employee.first_surname} ${employee.second_surname}`}</TableCell>
                    <TableCell>{employee.rol}</TableCell>
                    <TableCell>{employee.hiring_date}</TableCell>
                    <TableCell>
                      <IconButton color="secondary" onClick={() => handleViewDetails(employee.identification_document)} >
                        <MdPersonSearch />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10,25,50]}
            component="div"
            count={filteredEmployees.length}
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