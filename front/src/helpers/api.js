import axios from 'axios';

function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}

export async function getBooks() {
  try {
    const response = await axios.get(`/api/books`, {
      headers: authHeader(),
    });
    return response.data.books;
  } catch (error) {
    throw error;
  }
}

export async function getBook(bookId) {
  try {
    const response = await axios.get(`/api/books/${bookId}`, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function checkUserCrendentials(isLogin, username, password) {
  try {
    const response = await axios.post(isLogin ? '/api/auth/login' : '/api/auth/register', {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addBook(bookTitle) {
  try {
    const response = await axios.post(
      '/api/books',
      {
        title: bookTitle,
      },
      {
        headers: authHeader(),
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateBook(bookTitle, bookId) {
  try {
    const response = await axios.post(
      `/api/books/${bookId}`,
      {
        title: bookTitle,
      },
      {
        headers: authHeader(),
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteBook(bookId) {
  try {
    const response = await axios.delete(`/api/books/${bookId}`, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
