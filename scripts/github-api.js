async function fetchGitHubUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Usuario no encontrado");
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
      return null;
    }
  }
  
  // Ejemplo de uso al hacer clic en el botón
  document.getElementById("btn-github").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.innerHTML = "<p>Cargando datos de GitHub...</p>";
    
    const user = await fetchGitHubUser("dexelmasgt"); // Usuario predeterminado
    if (user) {
      output.innerHTML = `
        <h2>${user.login}</h2>
        <img src="${user.avatar_url}" width="100">
        <p>Repositorios públicos: ${user.public_repos}</p>
      `;
    }
  });
