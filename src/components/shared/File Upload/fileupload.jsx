import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { XCircle, Upload } from 'lucide-react';

export const FileUpload = ({ onFileChange, label }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    onFileChange(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: 'image/*',
    multiple: false
  });

  const removeFile = () => {
    setFile(null);
    setPreview('');
    onFileChange(null);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'
        }`}
      >
        <input {...getInputProps()} />
        {file ? (
          <div className="relative">
            <img src={preview} alt="Preview" className="max-w-full h-auto mx-auto rounded" />
            <button
              onClick={(e) => { e.stopPropagation(); removeFile(); }}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <XCircle size={24} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4">
            <Upload size={48} className="text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              {isDragActive ? 'Drop the file here' : 'Drag & drop an image here, or click to select'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};