const deleteBlogHandler = async (event) => {
    event.preventDefault();
    const blogId = document.getElementById('blogId').value;

    fetch("/api/blog/" + blogId, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.querySelector("#deleteButton").addEventListener("click", deleteBlogHandler);