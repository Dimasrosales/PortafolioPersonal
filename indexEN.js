function descargarArchivo() {
    var url = './cv/CV In.pdf'; // Ruta del archivo PDF en inglés

    var link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Ingles.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}