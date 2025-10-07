import {getAllVirtualSpeakers} from "@data/speakers";

export async function GET() {
  return new Response(JSON.stringify(getAllVirtualSpeakers.virtual || []));
}
