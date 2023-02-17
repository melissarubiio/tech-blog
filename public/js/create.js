const addBlog = async (title, content) => {
    try {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          content
        })
      });
      if (!response.ok) throw new Error('Failed to add blog');
      document.location.replace('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to add blog');
    }
  };
  
  const createBlogForm = document.querySelector("#create-form");
  createBlogForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    addBlog(title, content);
  });
  