import { promises as fs } from 'fs';
import path from 'path';

export default async function getArtistsData() {
    // const file = await fs.readFile(process.cwd() + '/mockup_json/artists.json', 'utf8');
    // Get the path of the json file
  const filePath = path.join(process.cwd(), 'mockup_json/artists.json');
  // Read the json file
  const jsonData : any = await fs.readFile(filePath);
  // Parse data as json
  const responseData = JSON.parse(jsonData);

  return responseData
}

