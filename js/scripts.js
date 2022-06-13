// Inicializar Firebase
var config = {
    apiKey: "AIzaSyAzhc3Kh4dmhCtSM6Qa0depM0A8mBEZBa0",
    authDomain: "examenfirebase-72a99.firebaseapp.com",
    projectId: "examenfirebase-72a99",
    storageBucket: "examenfirebase-72a99.appspot.com",
    messagingSenderId: "569206647306",
    appId: "1:569206647306:web:61f1547de8ffb53e604df3"
};
firebase.initializeApp(config);

// Referencia a la colección messages
var messagesRef = firebase.database().ref('messages');

// Esperando el envío de mensajes
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Enviar formulario
function submitForm(e) {
    e.preventDefault();

    // Obtener valores

    var name = getInputVal('name');
    var email = getInputVal('email');
    var website = getInputVal('website');
    var budget = getInputVal('budget');
    var timeline = getInputVal('timeline');
    var suma = getInputVal('suma');
    var mensaje = getInputVal('mensaje');




    // Guardar mensaje
    saveMessage(name, email, website, budget, timeline, suma, mensaje);

    // // Mostrar alerta
    // document.querySelector('.alert').style.display = 'block';

    // // Ocultar alerta después de 3 segundos
    // setTimeout(function() {
    //     document.querySelector('.alert').style.display = 'none';
    // }, 3000);

    // Limpiar formulario
    document.getElementById('contactForm').reset();
}

// Función para obtener el valor del formulario
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Guardar el mensaje en Firebase
function saveMessage(name, email, website, budget, timeline, suma, mensaje) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        website: website,
        budget: budget,
        timeline: timeline,
        suma: suma,
        mensaje: mensaje
    });
}