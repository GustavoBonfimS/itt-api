# Image To Text api
Convert text within images to plain text, send the image to the Endpoint in a formData and get the text back within the image.

Using Tesseract OCR in node with Express

# Usage
**at the moment  this API dosen't support array of images because the Tesseract is difficult to recognize array of images, if you want that, do by yourself and send a pull request :)**

```
const data = new FormData();
      data.append('lang', lang);
      acceptedFiles.forEach((image) => {
      data.append('images', image);
});
```

<a target="_blank" rel="noopener noreferrer" href="https://image-to-text-api.herokuapp.com/">App in heroku</a>  
Send a form data to /images containing a field "lang" with the language text within the image and other field containing the file (PNG or JPG)  

See the all languages in <a target="_blank" rel="noopener noreferrer" href="https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016">Tesseract languages supported</a>
