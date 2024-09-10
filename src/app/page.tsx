// page.tsx
"use client"; // Marking this component as a Client Component
import { useState } from 'react';
import { removeBackground } from './actions/removeBackground';

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // state to store the uploaded image
  const [processedImage, setProcessedImage] = useState<string | null>(null); // state to store the processed image
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedImage(file); // store uploaded image
  };

  const handleProcessImage = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);
    setError(null); // Clear any previous errors
    try {
      console.log("Starting image processing");
      const formData = new FormData();
      formData.append('file', selectedImage);
      console.log("Uploading file:", selectedImage.name);
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!uploadResponse.ok) {
        throw new Error('File upload failed');
      }
      const { url } = await uploadResponse.json();
      console.log("File uploaded, received URL:", url);

      console.log("Calling removeBackground with URL:", url);
      const processedImageUrl = await removeBackground(url);
      console.log("Received processed image URL:", processedImageUrl);
      setProcessedImage(processedImageUrl as string);
    } catch (error) {
      console.error('Error processing image:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      fetch(processedImage)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = 'processed_image.png';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch(error => console.error('Error downloading image:', error));
    }
  };

  return (
    <div className="container">
      <h1 className="title">Remove Image Background 🍎✨</h1>

      <div className="main-content">
        <div className="left-section">
          <div className="image-frame">
            {selectedImage ? (
              <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" className="uploaded-image" />
            ) : (
              <div className="placeholder">📸 Upload an image</div>
            )}
          </div>
        </div>

        <div className="right-section">
          <div className="polaroid-frame">
            <div className="image-container">
              {processedImage ? (
                <>
                  <img src={processedImage} alt="Processed" className="processed-image" />
                  <button onClick={handleDownload} className="download-button" title="Download processed image">
                    <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm0 2l-5-5h3v-4h4v4h3l-5 5z"/>
                    </svg>
                  </button>
                </>
              ) : (
                <div className="placeholder">🖼️ Processed image will appear here</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="upload-section">
        <input
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
          id="file-upload"
          className="hidden"
        />
        <label htmlFor="file-upload" className="upload-button">
          📤 Upload Image
        </label>
        <button
          onClick={handleProcessImage}
          disabled={!selectedImage || isProcessing}
          className="process-button"
        >
          {isProcessing ? '🔄 Processing...' : '✨ Remove Background'}
        </button>
      </div>

      {error && <p className="error-message">❌ {error}</p>}

      <footer className="footer">
        <p>🚀 Developed By <a href="https://www.linkedin.com/in/jerryola1/" target="_blank" rel="noopener noreferrer">Abayomi Olagunju</a> © 2024</p>
      </footer>
    </div>
  );
}
