import {getAllSpeakers} from "@data/speakers";

export async function GET() {
  return new Response(JSON.stringify(getAllSpeakers.boston || []));
}
