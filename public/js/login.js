const loginUser = async (username, password) => {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) throw new Error('Failed to login');
      document.location.replace('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to login');
    }
  };
  
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("#username-login").value;
    const password = document.querySelector("#password-login").value;
    loginUser(username, password);
  });
  