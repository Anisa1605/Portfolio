function downloadResume() {
    // Path to the resume PDF file
    const resumeUrl = 'Resume.pdf';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Anisa_Pereira_Resume.pdf'; // Specify download filename

    // Append to the body temporarily, trigger click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

