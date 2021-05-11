function imprimir() {
  let array = [
    "Gerado", //0
    "Kenny", //1
    "Jeimmy", //2
    "Katherine", //3
    "Kimberly",
    "Harold",
    "Karen",
    "Heidy",
    "Kevin",
    "Marlon",
    "Michael" //9
  ];

  console.log(array.length)

  document.getElementById("print-table").innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let bodyTabla = `<tr>
         <th scope="row">${i + 1}</th>
         <td>${array[i]}</td>
         <td>Thornton</td>
         <td>@fat</td>
       </tr>`;

    if (array /*i % 2 === 0*/) {
      document.getElementById("print-table").innerHTML += bodyTabla;
    } //es par o impar
  }
}

function imprimirWhile() {
  document.getElementById("print-table").innerHTML = "";

  let i = 0;
  while (i <= 20) {
    let bodyTabla = `<tr>
         <th scope="row">${i}</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
       </tr>`;

    console.log(i);

    document.getElementById("print-table").innerHTML += bodyTabla;

    i += 2;
  }
}

// Cragar funciones

imprimir();