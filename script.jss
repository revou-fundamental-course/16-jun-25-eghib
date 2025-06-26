function showSection(section) {
  // Hide all sections
  document.getElementById("luas-section").classList.add("hidden");
  document.getElementById("keliling-section").classList.add("hidden");
  document.getElementById("jajar-section").classList.add("hidden");

  // Show the selected section
  if (section === "luas") {
    document.getElementById("luas-section").classList.remove("hidden");
  } else if (section === "keliling") {
    document.getElementById("keliling-section").classList.remove("hidden");
  } else if (section === "jajar") {
    document.getElementById("jajar-section").classList.remove("hidden");
  }

  // Handle active button styling
  const buttons = document.querySelectorAll("nav.button-stack button");
  buttons.forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });

  const activeButton = document.querySelector(`button[data-section="${section}"]`);
  if (activeButton) {
    activeButton.classList.remove("btn-outline");
    activeButton.classList.add("btn-primary");
  }
}

function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = document.getElementById("hasil-luas");

  if (isNaN(alas) || isNaN(tinggi)) {
    hasil.innerText = "Harap isi semua nilai!";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  hasil.innerText = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil-luas").innerText = "";
}

function hitungKeliling() {
  const s1 = parseFloat(document.getElementById("s1").value);
  const s2 = parseFloat(document.getElementById("s2").value);
  const s3 = parseFloat(document.getElementById("s3").value);
  const hasil = document.getElementById("hasil-keliling");

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    hasil.innerText = "Harap isi semua sisi!";
    return;
  }

  const keliling = s1 + s2 + s3;
  hasil.innerText = `K = ${s1} + ${s2} + ${s3} = ${keliling}`;
}

function resetKeliling() {
  document.getElementById("s1").value = "";
  document.getElementById("s2").value = "";
  document.getElementById("s3").value = "";
  document.getElementById("hasil-keliling").innerText = "";
}
