import axios from 'axios';

export const API_BASE_URL = 'https://c39e-149-30-138-24.ngrok-free.app/api';

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true';