const createUser = async (username, password) => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) throw new Error('Failed to create user');
      document.location.replace('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to create user');
    }
  };
  
  const signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("#username-signup").value;
    const password = document.querySelector("#password-signup").value;
    createUser(username, password);
  });
  