import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateBlobPDF = async (element, orientation = 'portrait') => {
  const pdf = new jsPDF({
    orientation: orientation,
    unit: 'pt',
    format: 'a4',
  });

  // Convierte el elemento en canvas
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL('image/png');

  // Ajusta la imagen al tamaño del PDF
  const imgWidth = pdf.internal.pageSize.getWidth();
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

  // Retorna el URL del blob del PDF
  return pdf.output('bloburl');
};
