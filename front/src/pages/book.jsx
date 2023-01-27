import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBook from '../hooks/useBook';

export default function Book() {
  const [title, setTitle] = useState('');

  const [validTitle, setValidTitle] = useState(true);
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { books, isTitleValid, saveBook } = useBook();

  useEffect(() => {
    if (bookId) {
      const book = books?.find((book) => book.id === bookId);
      setTitle(book?.title || '');
    } else {
      setTitle('');
    }
  }, [bookId, books]);

  const changeHandler = (event) => {
    if (!validTitle) {
      setValidTitle(true);
    }
    setTitle(event.target.value);
  };

  const saveBookHandler = () => {
    const valid = isTitleValid(title, bookId);
    setValidTitle(valid);
    if (valid) {
      saveBook(title, bookId);
      navigate('/books');
    }
  };

  const clearTitleHandler = () => {
    setTitle('');
    setValidTitle(true);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          aria-label="title"
          id="title"
          error={!validTitle}
          label="Book title"
          fullWidth
          value={title}
          onChange={changeHandler}
          helperText={!validTitle && 'Duplicate title.'}
        />
      </div>
      <Stack direction="row" spacing={2} sx={{ marginTop: '10px' }}>
        <Button
          aria-label="save"
          variant="contained"
          disabled={title.length === 0}
          onClick={saveBookHandler}
        >
          Save
        </Button>
        <Button
          aria-label="clear"
          variant="contained"
          disabled={title.length === 0}
          onClick={clearTitleHandler}
        >
          Clear
        </Button>
      </Stack>
    </Box>
  );
}
