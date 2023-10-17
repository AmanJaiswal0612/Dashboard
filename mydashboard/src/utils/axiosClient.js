import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosClient = axios.create(
  {
    withCredentials:true,
    baseURL: 'http://localhost:5000/api', // Your API base URL
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json', // Default content type
      // You can add more default headers here
    },
  }
);




// Request interceptor

// export const setupInterceptors = (navigate) => {

//   axiosClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         debugger
//         // navigate('/error')
      
  
//       // if (error.response) {
//       //   // Handle specific error status codes or conditions
//       //   if (error.response.status === 404) {
//       //     // Redirect to a specific error page
//       //    navigate('/error');
//       //   } else if (error.response.status === 500) {
//       //     // Redirect to another error page
//       //     navigate('/error');
//       //   }
//       //   // ... Add more conditions for other error statuses if needed
//       // } else {
//       //   debugger
//       //   // Handle other types of errors (e.g., network errors)
//       //   navigate('/error');
//       // }
  
//       return Promise.reject(error);
//     }
//   );
  
// }

// axiosClient.interceptors.request.use(
//   (config) => config,
//   (error) => Promise.reject(error)
// );

// Response interceptor


export default axiosClient