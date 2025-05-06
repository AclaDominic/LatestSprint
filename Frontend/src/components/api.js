import axios from 'axios';

export const API_BASE_URL = 'https://82bb-149-30-138-149.ngrok-free.app/api';

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true';