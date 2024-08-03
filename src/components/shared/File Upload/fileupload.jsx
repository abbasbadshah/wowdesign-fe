import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { XCircle, Upload } from 'lucide-react';

export const FileUpload = ({ onFileChange, label, multiple = false, maxFiles = Infinity }) => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = multiple ? [...files, ...acceptedFiles].slice(0, maxFiles) : [acceptedFiles[0]];
    setFiles(newFiles);
    onFileChange(multiple ? newFiles : newFiles[0]);

    const newPreviews = newFiles.map(file => URL.createObjectURL(file));
    setPreviews(newPreviews);
  }, [files, multiple, maxFiles, onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: 'image/*',
    multiple: multiple,
    maxFiles: maxFiles
  });

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onFileChange(multiple ? newFiles : newFiles[0] || null);

    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
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
        {files.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative">
                <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover rounded" />
                <button
                  onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <XCircle size={24} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4">
            <Upload size={48} className="text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              {isDragActive ? 'Drop the file(s) here' : `Drag & drop ${multiple ? 'images' : 'an image'} here, or click to select`}
            </p>
            {multiple && maxFiles < Infinity && (
              <p className="text-xs text-gray-400 mt-1">
                Maximum {maxFiles} {maxFiles === 1 ? 'file' : 'files'}
              </p>
            )}
          </div>
        )}
      </div>
      {multiple && (
        <p className="text-sm text-gray-500 mt-2">
          {files.length} of {maxFiles < Infinity ? maxFiles : 'unlimited'} files uploaded
        </p>
      )}
    </div>
  );
};