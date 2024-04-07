// const login = async (code) => {
//     return fetch('/api/auth/google', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ code }),
//     }).then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         return Promise.reject(res);
//       }
//     });
//   };
  
//   export { login };

// https://google-authentification-be.onrender.com

const login = async (code) => {
    return fetch('https://google-authentification-be.onrender.com/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    });
  };
  
  export { login };
  
  