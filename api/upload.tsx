import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';

async function Upload(req: NextApiRequest, res: NextApiResponse) {
  console.log('api was called')
  if (req.method === 'POST') {
    const imageData = req.body.imageData; // POSTリクエストの本文から画像データを取得

    // 画像を保存する処理
    fs.writeFile('@/api/uploads', imageData, 'base64', (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save image' });
      } else {
        res.status(200).json({ message: 'Image saved successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}