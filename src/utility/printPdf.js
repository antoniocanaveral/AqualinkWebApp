import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Para convertir el HTML en imagen

/**
 * Función para generar un PDF.
 * @param {HTMLElement} element - El elemento HTML o componente de React que se renderizará en el PDF.
 * @param {String} orientation - La orientación del PDF: 'landscape' o 'portrait'.
 * @param {String} fileName - El nombre del archivo PDF.
 */
export const generatePDF = async (element, orientation = 'portrait', fileName = 'reporte.pdf') => {

  const pdf = new jsPDF({
    orientation: orientation,
    unit: 'pt', // Unidad en puntos
    format: 'a4', // Formato A4
  });


  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL('image/png');


  const imgWidth = pdf.internal.pageSize.getWidth();
  const imgHeight = (canvas.height * imgWidth) / canvas.width;


  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);


  pdf.save(fileName);
};
