'use client';

import React, { useState, useCallback } from 'react';
import { ConversionResult } from '@/lib/imageConverter';

interface ImageUploaderProps {
  onFilesSelected: (files: File[]) => void;
  onConvert: () => Promise<void>;
  convertedResults: ConversionResult[];
  isConverting: boolean;
  acceptedFormats?: string;
  maxFiles?: number;
}

export default function ImageUploader({
  onFilesSelected,
  onConvert,
  convertedResults,
  isConverting,
  acceptedFormats = 'image/*',
  maxFiles = 50
}: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files).slice(0, maxFiles);
    if (files.length > 0) {
      setSelectedFiles(files);
      onFilesSelected(files);
    }
  }, [maxFiles, onFilesSelected]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).slice(0, maxFiles);
      setSelectedFiles(files);
      onFilesSelected(files);
    }
  }, [maxFiles, onFilesSelected]);

  const handleRemoveFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
          dragActive
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 hover:border-primary-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          multiple
          accept={acceptedFormats}
          onChange={handleChange}
          className="hidden"
        />
        
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <svg
            className="w-16 h-16 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          
          <span className="text-xl font-semibold text-gray-700 mb-2">
            Drop your images here
          </span>
          <span className="text-sm text-gray-500 mb-4">
            or click to browse (max {maxFiles} files)
          </span>
          
          <button
            type="button"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Select Images
          </button>
        </label>
      </div>

      {/* Selected Files List */}
      {selectedFiles.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="font-semibold text-lg">
            Selected Files ({selectedFiles.length})
          </h3>
          
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  
                  <div>
                    <p className="font-medium text-sm">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Convert Button */}
          <button
            onClick={onConvert}
            disabled={isConverting || selectedFiles.length === 0}
            className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isConverting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Converting...
              </span>
            ) : (
              'Convert Images'
            )}
          </button>
        </div>
      )}

      {/* Conversion Results */}
      {convertedResults.length > 0 && (
        <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg text-green-800 mb-4">
            ✓ Conversion Complete!
          </h3>
          
          <div className="space-y-2">
            {convertedResults.map((result, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">{result.file.name}</span>
                <span className="text-green-600 font-medium">
                  {result.reductionPercentage > 0
                    ? `-${result.reductionPercentage.toFixed(1)}%`
                    : 'Converted'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
