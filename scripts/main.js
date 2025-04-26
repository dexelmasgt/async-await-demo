// 1. Función básica con async/await
async function ejemploBasico() {
    return "¡Hola Mundo!";
  }
  
  ejemploBasico().then(console.log); // ¡Hola Mundo!
  
  // 2. Simulación de una operación asíncrona
  async function operacionAsincrona() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Datos cargados después de 2 segundos"), 2000);
    });
  }
  
  // 3. Uso con try/catch
  async function manejoErrores() {
    try {
      const resultado = await operacionAsincrona();
      console.log(resultado);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  manejoErrores();
  
  // 4. Ejecución en paralelo con Promise.all
  document.getElementById("btn-parallel").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.innerHTML = "<p>Ejecutando operaciones en paralelo...</p>";
  
    const [data1, data2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json())
    ]);
  
    output.innerHTML = `
      <h3>Resultados en paralelo:</h3>
      <p><strong>Post:</strong> ${data1.title}</p>
      <p><strong>Usuario:</strong> ${data2.name}</p>
    `;
  });