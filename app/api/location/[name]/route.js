import { getLocationByName } from "@/lib";

export async function GET(request, { params }) {
  const locationData = await getLocationByName(params?.name);

  if (!locationData) {
    return new Response(JSON.stringify({ error: "Location not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(locationData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
