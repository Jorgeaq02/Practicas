    // EventListener para el formulario de inicio de sesión
    document.getElementById('loginForm').addEventListener('submit', function (event) {

    // Obtener valores del formulario que tiene que introducir el usuario
    const email = document.getElementById('email').value;
    const zipcode = document.getElementById('password').value; // Aquí se ingresa el zipcode/contraseña del usuario.

    // Verificar si el correo electrónico que ha introducido el usuario es válido o no
    if (!isValidEmail(email)) {
        alert('El correo o contraseña introducido no es válido. Porfavor. vuelva a ingresar su inicio de sesión.'); // No avisamos al usuario que ha introducido mal para evitar posibles hackeos.
        return;
    }

    // Realizar solicitud GET a la API para obtener a los usuarios
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Verificar si el email y zipcode coinciden con algún usuario. Si coinciden lo redirigimos al blog.html, si no, avisamos al usuario que la contraseña o el email introducido no son válidos.
            const userFound = users.find(user => user.email === email && user.address.zipcode === zipcode);

            if (userFound) {
                window.open('blog.html', '_self'); // Redirigir al blog.html si el inicio de sesión es correcto
            } else {
                alert('El email o contraseña es incorrecto'); // Avisar al usuario de que se ha equivocado en uno de los dos campos y que vuelva a ingresar sus datos correctamente.
            }
        })
        .catch(error => {
            console.error('Error al obtener usuarios', error);
            alert('Hubo un error al verificar el usuario. Por favor, intenta nuevamente.'); // Si hay algún error, avisamos al usuario.
        });
});

// Función para validar el formato de correo electrónico
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Expresión regular para validar el formato de correo electrónico introducido por el usuario
}
