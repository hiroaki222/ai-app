// pages/api/upload.js

import fs from 'fs';

export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const file = req.files.file; // リクエストからファイルを取得する（例えば、multerなどのミドルウェアを使用する）

  // ファイルを保存するディレクトリパス
  const uploadDir = '@/api/uploads/';
  
  // ファイルをサーバー上に保存
  fs.writeFile(uploadDir + file.name, file.data, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error uploading file' });
      return;
    }

    res.status(200).json({ message: 'File uploaded successfully' });
  });
}
