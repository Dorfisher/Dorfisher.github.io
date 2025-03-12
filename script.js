    document.addEventListener("DOMContentLoaded", async function() {
        const postsContainer = document.getElementById("posts");
        try {
            const response = await fetch("https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/contents/posts");
            const files = await response.json();
            postsContainer.innerHTML = "";
            
            for (const file of files) {
                if (file.name.endsWith(".md")) {
                    const postResponse = await fetch(file.download_url);
                    const postContent = await postResponse.text();
                    const postElement = document.createElement("article");
                    postElement.innerHTML = `<h2>${file.name.replace(".md", "")}</h2><p>${postContent.substring(0, 200)}...</p>`;
                    postsContainer.appendChild(postElement);
                }
            }
        } catch (error) {
            postsContainer.innerHTML = "שגיאה בטעינת הפוסטים.";
        }
    });
