const addComment = async (blogId, comment) => {
    if (!comment) return;
    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blogId,
          comment,
        })
      });
      if (!response.ok) throw new Error('Failed to add comment');
      document.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  
  const commentForm = document.querySelector('#comment-form');
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const blogId = document.querySelector('#blogId').value;
    const comment = document.querySelector('#comment').value;
    addComment(blogId, comment);
  });
  