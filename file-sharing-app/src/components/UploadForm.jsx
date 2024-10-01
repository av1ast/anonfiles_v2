import React, { useState } from 'react';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    setError('');
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

 
    if (file.size > 1024 * 1024 * 1024) {
      setError('File size exceeds 1GB limit.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);


    console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed. Please try again.');
      }

      const data = await response.json();
      setLink(data.link);
    } catch (error) {
      console.error(error);
      setError(error.message || 'An error occurred during file upload.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Upload Your File</h2>
      <form onSubmit={handleUpload} className="flex flex-col">
        <label className="mb-2">Select File:</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
          className="mb-4 p-2 bg-gray-700 text-white border border-gray-600 rounded"
        />
        {error && (
          <div className="mb-4 p-2 bg-red-600 text-white rounded">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={isUploading}
          className={`py-2 px-4 rounded ${
            isUploading
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition duration-200`}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {link && (
        <div className="mt-6 p-4 bg-green-700 rounded">
          <p className="mb-2">Your download link:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline break-all"
          >
            {link}
          </a>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
