'use client'
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload() {
  const onDrop = useCallback((acceptedFiles: any) => {
    // ファイルをアップロードするためのAPIを呼び出す
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ファイルをここにドロップしてください</p>
      ) : (
        <p>ファイルをドラッグアンドドロップするか、クリックしてファイルを選択してください</p>
      )}
    </div>
  );
}

export default FileUpload;