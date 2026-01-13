import { generateRFP } from '../services/ai.service.js';
export async function createRFP(req, res) {
  const structured = await generateRFP(req.body.text);
  res.json({ rawInput: req.body.text, structured });
}