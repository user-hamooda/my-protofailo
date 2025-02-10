// btn nav bar
document.getElementById('nav_mobile_btn').addEventListener('click', function () {
    const target = document.getElementById('nav_mobile');
    if (target.classList.contains('show')) {
        target.classList.remove('show');
    } else {
        target.classList.add('show');
    }
});

// form contact
// document.getElementById('message').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const textarea = document.getElementById('textarea').value;

//     const formData = { name, email, textarea };

//     try {
//         const response = await fetch('http://localhost:3000/register', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//             alert('Registration successful!');
//         } else {
//             const errorMsg = await response.text();
//             alert("Failed to register: " + errorMsg);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Error occurred while submitting the form.');
//     }
// });
