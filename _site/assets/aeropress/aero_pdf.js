
// AeroPress Random Recipe Generator
// Alvaro Aguirre - September 24th

function generatePDF() {
    const element = document.getElementById("recipe");
    html2pdf()
      .from(element)
      .save();
  }