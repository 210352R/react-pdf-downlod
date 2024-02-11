// PDFDownloadButton.jsx

import React from "react";

const PdfButton = () => {
  const handleDownload = async () => {
    try {
      // 1. Make a fetch request to the server's /pdf endpoint
      const response = await fetch("http://localhost:5000/pdf"); // Replace with your server URL

      // 2. Get the response body as a Blob
      const blob = await response.blob();

      // 3. Create a link element
      const link = document.createElement("a");

      // 4. Set the href attribute of the link to the Blob URL
      link.href = window.URL.createObjectURL(blob);

      // 5. Set the download attribute to suggest a filename for the download
      link.download = "example.pdf";

      // 6. Append the link element to the document body
      document.body.appendChild(link);

      // 7. Trigger a click on the link to start the download
      link.click();

      // 8. Remove the link element from the document body
      document.body.removeChild(link);
    } catch (error) {
      // 9. Handle errors
      console.error("Error:", error);
    }
  };

  // 10. Render a button with an onClick event that calls handleDownload
  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default PdfButton;
