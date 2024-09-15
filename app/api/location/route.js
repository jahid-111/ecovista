import { getLocations } from "@/lib"; // Assuming it's a named export

export async function GET(request) {
  try {
    const locationData = await getLocations();
    return new Response(JSON.stringify(locationData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch locations" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
