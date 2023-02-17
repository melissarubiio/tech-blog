const updateBlog = async (blogId, title, content) => {
    try {
      const response = await fetch(`/api/blog/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          content
        })
      });
      if (!response.ok) throw new Error('Failed to update blog');
      document.location.replace('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to update blog');
    }
  };
  
  const editBlogForm = document.querySelector("#edit-form");
  editBlogForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById('editTitle').value;
    const content = document.getElementById('editContent').value;
    const blogId = document.getElementById('blogId').value;
    updateBlog(blogId, title, content);
  });
  