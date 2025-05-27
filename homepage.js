document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');

      toggleBtn.textContent = body.classList.contains('dark-theme') ? '🔆' : '🌙';
    });

    yourCardFeature();
    
});

function yourCardFeature() {
    const yourCardBtn = document.querySelector('#your-card-button');

    yourCardBtn.addEventListener('click', () => {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = "overlay";

        const right = document.createElement('div');
        right.id = "right-col";

        const left = document.createElement('div');
        left.id = "left-col";

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Close';
        closeBtn.id = 'closeBtn';

        // Create edit button
        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'delete';

        // Create download button
        const downloadBtn = document.createElement('button');
        downloadBtn.innerHTML = 'Download';

        // Create popup
        const popup = document.createElement('div');
        popup.id = "popup";



        // Close handler
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        // Optional: clicking outside popup also closes it
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });

        // Add content
        popup.innerHTML += `<h2>Your Card</h2><p>Some other content goes here.</p>`;
        overlay.appendChild(left);
        overlay.appendChild(popup);
        overlay.appendChild(right);
        left.appendChild(downloadBtn);
        left.appendChild(deleteBtn);
        left.appendChild(editBtn);
        right.appendChild(closeBtn);
        document.body.appendChild(overlay);
    });

}