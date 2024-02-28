function descargarArchivo() {
    var url = 'images/CV DR.pdf';
  
    var link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';
  
    document.body.appendChild(link);
  
    link.click();
  
    document.body.removeChild(link);
}
