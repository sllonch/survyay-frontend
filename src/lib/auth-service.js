import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }

  signup(user) {
    const { name, email, password } = user;
    return this.auth.post('/auth/signup', {name, email, password})
      .then(({ data }) => data);
  }

  login(user) {
    const { email, password } = user;
    return this.auth.post('/auth/login', {email, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const auth = new Auth();

export default auth