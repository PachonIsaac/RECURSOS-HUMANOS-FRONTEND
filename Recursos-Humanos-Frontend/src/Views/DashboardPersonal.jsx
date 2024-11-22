import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, TextField, IconButton
} from '@mui/material';
import { MdPersonSearch } from "react-icons/md";
import { listarEmpleado } from '../services/auth';

const DashboardPersonal = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await listarEmpleado();
        console.log('Empleados:', response);
        // Aseguramos que response sea un array
        setEmployees(response);
      } catch (error) {
        console.error('Error al cargar empleados:', error);
        setEmployees([]);
      }
    };

    fetchEmployees();
  }, []);

  // Función para filtrar empleados
  const getFilteredEmployees = () => {
    const searchTerm = search.toLowerCase().trim();
    if (!searchTerm) return employees;

    return employees.filter((employee) => {
      if (!employee) return false;
      
      return [
        employee.first_name,
        employee.second_name,
        employee.first_surname,
        employee.second_surname,
        employee.rol
      ].some(field => 
        field && field.toLowerCase().includes(searchTerm)
      );
    });
  };

  // Obtener empleados filtrados y paginados
  const getDisplayedEmployees = () => {
    const filtered = getFilteredEmployees();
    const startIndex = page * rowsPerPage;
    return filtered.slice(startIndex, startIndex + rowsPerPage);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(0);
  };

  
  const handleViewDetails = (employee) => {
    navigate(`/admin/user/${employee.identification_document}`);
  };

  // Obtener los empleados que se mostrarán
  const displayedEmployees = getDisplayedEmployees();
  const filteredCount = getFilteredEmployees().length;

  return (
    <div className="dashboard">
      <div className="main-content">
        <h1>Personal</h1>
        <TextField
          label="Buscar"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          sx={{ marginBottom: 2, width: '100%' }}
        />
        <Paper sx={{ width: 'auto', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 650 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Documento</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Apellido</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Rol</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016' }}>Fecha de Contratación</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#FB9016', width: 50 }}>Opciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedEmployees.map((employee) => (
                  <TableRow 
                    key={employee.identification_document}
                    hover
                  >
                    <TableCell>{employee.identification_document}</TableCell>
                    <TableCell>
                      {`${employee.first_name || ''} ${employee.second_name || ''}`}
                    </TableCell>
                    <TableCell>
                      {`${employee.first_surname || ''} ${employee.second_surname || ''}`}
                    </TableCell>
                    <TableCell>{employee.rol || ''}</TableCell>
                    <TableCell>{employee.hiring_date || ''}</TableCell>
                    <TableCell>
                      <IconButton 
                        color="secondary" 
                        onClick={() => handleViewDetails(employee.identification_document)}
                      >
                        <MdPersonSearch />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredCount}
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