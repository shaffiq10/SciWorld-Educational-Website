function updateDateTime() {
  const now = new Date();   // ambil masa sekarang

  const date = now.toLocaleDateString('en-MY', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const time = now.toLocaleTimeString('en-MY', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  document.getElementById('dateTime').innerHTML =
    date + "<br>" + time;
}

setInterval(updateDateTime, 1000); // update setiap 1 saat
updateDateTime();                  // paparkan terus masa load