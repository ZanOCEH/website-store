<script>
    document.addEventListener('DOMContentLoaded', function() {
        const commentForm = document.getElementById('commentForm');
        const commentList = document.querySelector('.comment-list');

        // Fungsi untuk menambahkan komentar ke daftar
        function addComment(name, comment) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <div class="comment-author">${name}</div>
                <div class="comment-text">${comment}</div>
            `;
            commentList.appendChild(commentElement);
        }

        // Event listener untuk mengirim komentar
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;

            if (name && comment) {
                addComment(name, comment);
                commentForm.reset(); // Reset form after submission
            }
        });
    });
</script>
