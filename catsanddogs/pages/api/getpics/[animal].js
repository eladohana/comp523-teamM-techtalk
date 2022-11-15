// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  // get the animal type from the query
  const { animal } = req.query

  // load the JSON data from file
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/pics.json', 'utf8');

  // filter the JSON data based on the animal type
  const response = JSON.parse(fileContents).filter(x => x.type == animal)
  
  // send the JSON data as a string
  res.status(200).json(JSON.stringify(response))

}
