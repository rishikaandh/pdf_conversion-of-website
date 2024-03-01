const puppeteer = require('puppeteer');

(async () => {
  // Launch Puppeteer browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the deployed webpage
  await page.goto('https://www.w3schools.com/html/default.asp'); // Replace 'https://example.com' with your deployed webpage URL

  // Set PDF options
  const pdfOptions = {
    path: 'webpage_content.pdf', // Path to save the PDF
    format: 'A4',
    printBackground: true
  };

  // Generate PDF
  await page.pdf(pdfOptions);

  // Close browser
  await browser.close();

  console.log('PDF generated successfully.');
})();
