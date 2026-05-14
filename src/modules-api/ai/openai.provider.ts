import OpenAI from 'openai';
import { OPEN_AI_KEY } from 'src/common/constant/app.constant';
export const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
});
