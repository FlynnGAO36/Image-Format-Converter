'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  convertImageFormat,
  compressImage,
  convertHEICtoJPG,
  downloadFile,
  downloadAsZip,
  formatFileSize,
  ConversionResult,
  ImageFormat
} from '@/lib/imageConverter';
import ImageUploader from './ImageUploader';

interface FAQ {
  question: string;
  answer: string;
}

interface TechnicalSpec {
  feature: string;
  inputFormat: string;
  outputFormat: string;
}

interface ToolPageLayoutProps {
  title: string;
  subtitle: string;
  inputFormat: string;
  outputFormat: string;
  conversionType: 'format' | 'compress' | 'heic';
  targetMimeType?: ImageFormat;
  faqs: FAQ[];
  technicalSpecs: TechnicalSpec[];
  howToSteps: string[];
  whyConvert: string;
  relatedTools: { name: string; href: string }[];
}

export default function ToolPageLayout({
  title,
  subtitle,
  inputFormat,
  outputFormat,
  conversionType,
  targetMimeType,
  faqs,
  technicalSpecs,
  howToSteps,
  whyConvert,
  relatedTools
}: ToolPageLayoutProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [convertedResults, setConvertedResults] = useState<ConversionResult[]>([]);
  const [isConverting, setIsConverting] = useState(false);

  const handleConvert = async () => {
    if (selectedFiles.length === 0) return;

    setIsConverting(true);
    setConvertedResults([]);

    try {
      const results: ConversionResult[] = [];

      for (const file of selectedFiles) {
        let result: ConversionResult;

        if (conversionType === 'heic') {
          result = await convertHEICtoJPG(file);
        } else if (conversionType === 'compress') {
          result = await compressImage(file, { quality: 0.8, maxSizeMB: 1 });
        } else if (targetMimeType) {
          result = await convertImageFormat(file, targetMimeType);
        } else {
          throw new Error('Invalid conversion type');
        }

        results.push(result);
      }

      setConvertedResults(results);
    } catch (error) {
      console.error('Conversion error:', error);
      alert('Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedResults.length === 1) {
      downloadFile(convertedResults[0].file);
    } else if (convertedResults.length > 1) {
      downloadAsZip(convertedResults.map(r => r.file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Privacy Protected</h3>
                <p className="text-sm text-gray-600">Files processed locally in your browser</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-sm text-gray-600">Instant conversion with no uploads</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Batch Processing</h3>
                <p className="text-sm text-gray-600">Convert up to 50 images at once</p>
              </div>
            </div>
          </div>

          {/* Uploader */}
          <ImageUploader
            onFilesSelected={setSelectedFiles}
            onConvert={handleConvert}
            convertedResults={convertedResults}
            isConverting={isConverting}
            acceptedFormats="image/*"
            maxFiles={50}
          />

          {/* Download Button */}
          {convertedResults.length > 0 && (
            <div className="mt-6 text-center">
              <button
                onClick={handleDownload}
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                {convertedResults.length === 1 ? 'Download File' : `Download All (${convertedResults.length} files)`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How-to Guide */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to convert {inputFormat} to {outputFormat}?
          </h2>
          <ol className="space-y-4">
            {howToSteps.map((step, index) => (
              <li key={index} className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <p className="text-lg text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Convert */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why convert {inputFormat} to {outputFormat}?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{whyConvert}</p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Technical Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {inputFormat}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {outputFormat}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {technicalSpecs.map((spec, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {spec.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {spec.inputFormat}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {spec.outputFormat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-primary-600 font-medium hover:underline">
                  {tool.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
