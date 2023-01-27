import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useBook from '../hooks/useBook';

export default function BookList() {
  const navigate = useNavigate();
  const { deleteBook } = useBook();

  const deleteHandler = (e, bookId) => {
    deleteBook(bookId);
  };

  const editHandler = (e, bookId) => {
    navigate(`/book/${bookId}`);
  };

  const columns = [
    {
      headerName: 'Id',
      field: 'id',
      flex: 1,
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 2,
      minWidth: 250,
      sortable: true,
      disableColumnMenu: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 0.4,
      minWidth: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={2} sx={{ marginBottom: '10px' }}>
            <IconButton
              aria-label={`edit_${params.row.id}`}
              onClick={(e) => editHandler(e, params.row.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label={`delete_${params.row.id}`}
              onClick={(e) => deleteHandler(e, params.row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  const books = useSelector((state) => state.books.myList);

  return (
    <>
      {books?.length > 0 && (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={books} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
        </div>
      )}

      {books && books?.length === 0 && <p>Empty book list.</p>}
    </>
  );
}
