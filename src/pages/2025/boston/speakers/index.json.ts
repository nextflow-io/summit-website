import speakers from "@data/speakers";

export async function GET() {
  return new Response(JSON.stringify(speakers.boston || []));
}
