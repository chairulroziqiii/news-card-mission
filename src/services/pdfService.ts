import jsPDF from 'jspdf';
import { StudentData } from '../types';
import { getCaseById } from '../data/newsCases';

export function generateNewsPDF(data: StudentData): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const activeCase = getCaseById(data.caseId);
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let currentY = margin;

  // Helper for footer
  const addFooter = (pageNum: number, totalPages: number) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(130, 140, 155);
    doc.setDrawColor(210, 215, 225);
    doc.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);
    doc.text(
      'News Card Mission — Media Pembelajaran Teks Berita Bahasa Indonesia',
      margin,
      pageHeight - 10
    );
    doc.text(`Halaman ${pageNum} dari ${totalPages}`, pageWidth - margin, pageHeight - 10, {
      align: 'right',
    });
  };

  // Header Bar / Banner
  doc.setFillColor(19, 34, 56); // Navy #132238
  doc.rect(margin, currentY, contentWidth, 18, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text('NEWS CARD MISSION', margin + 6, currentY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(244, 185, 66); // Gold #F4B942
  doc.text('LEMBAR KERJA & HASIL PENULISAN TEKS BERITA SISWA', margin + 6, currentY + 13);

  currentY += 24;

  // Student Identity Box
  doc.setFillColor(245, 247, 250); // Light gray
  doc.setDrawColor(210, 218, 228);
  doc.roundedRect(margin, currentY, contentWidth, 34, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(19, 34, 56);
  doc.text('IDENTITAS REPORTER', margin + 5, currentY + 6);
  doc.setDrawColor(220, 225, 235);
  doc.line(margin + 5, currentY + 8, margin + contentWidth - 5, currentY + 8);

  const col1X = margin + 5;
  const col2X = margin + (contentWidth / 2) + 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(80, 90, 105);

  // Row 1
  doc.text('Nama Lengkap', col1X, currentY + 14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(19, 34, 56);
  doc.text(`: ${data.name || '-'}`, col1X + 28, currentY + 14);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 90, 105);
  doc.text('Kelompok', col2X, currentY + 14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(19, 34, 56);
  doc.text(`: ${data.group || '-'}`, col2X + 24, currentY + 14);

  // Row 2
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 90, 105);
  doc.text('Kelas', col1X, currentY + 20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(19, 34, 56);
  doc.text(`: ${data.className || '-'}`, col1X + 28, currentY + 20);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 90, 105);
  doc.text('News Case', col2X, currentY + 20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(230, 57, 70); // Crimson #E63946
  doc.text(`: Case ${activeCase.caseNumber}`, col2X + 24, currentY + 20);

  // Row 3
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 90, 105);
  doc.text('No. Presensi', col1X, currentY + 26);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(19, 34, 56);
  doc.text(`: ${data.attendanceNumber || '-'}`, col1X + 28, currentY + 26);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 90, 105);
  doc.text('Topik Kasus', col2X, currentY + 26);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(19, 34, 56);
  const truncatedTopic = activeCase.topicTitle.length > 32 
    ? activeCase.topicTitle.slice(0, 30) + '...' 
    : activeCase.topicTitle;
  doc.text(`: ${truncatedTopic}`, col2X + 24, currentY + 26);

  currentY += 40;

  // Section: JUDUL BERITA
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(230, 57, 70); // Red
  doc.text('JUDUL BERITA', margin, currentY);

  currentY += 4;
  doc.setFont('times', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(19, 34, 56);

  const titleLines = doc.splitTextToSize(data.newsTitle || '(Belum ada judul berita)', contentWidth);
  doc.text(titleLines, margin, currentY);

  currentY += titleLines.length * 6 + 4;

  // Divider Line
  doc.setDrawColor(200, 205, 215);
  doc.setLineWidth(0.5);
  doc.line(margin, currentY, pageWidth - margin, currentY);

  currentY += 6;

  // Section: TEKS BERITA
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(130, 140, 155);
  doc.text('TEKS BERITA LENGKAP', margin, currentY);

  currentY += 5;

  doc.setFont('times', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);

  const paragraphs = (data.newsText || '(Belum ada teks berita yang ditulis.)').split('\n');

  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i].trim();
    if (!p) {
      currentY += 3;
      continue;
    }

    const lines = doc.splitTextToSize(p, contentWidth);
    
    // Check if lines exceed current page
    for (let j = 0; j < lines.length; j++) {
      if (currentY > pageHeight - 22) {
        doc.addPage();
        currentY = margin;
      }
      doc.text(lines[j], margin, currentY, { align: 'justify', maxWidth: contentWidth });
      currentY += 5.2;
    }

    currentY += 3; // spacing between paragraphs
  }

  // Add footers across all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    addFooter(p, totalPages);
  }

  // Safe filename
  const cleanName = (data.name || 'Reporter').trim().replace(/[^a-zA-Z0-9]/g, '_');
  const cleanAbsen = (data.attendanceNumber || '00').trim().replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `NewsCardMission_${cleanName}_${cleanAbsen}.pdf`;

  doc.save(fileName);
}
