const xmlToURL = async (
  response: Response
): Promise<{ url: string | null; name: string | null }> => {
  const xmlString = await response.text();
  const parser = new DOMParser();
  const xmlResult = parser.parseFromString(xmlString, "application/xml");

  const audio = xmlResult.getElementsByTagName("liveaudio")[0];
  const url = audio.getElementsByTagName("url")[0].textContent;

  const channel = xmlResult.getElementsByTagName("channel")[0];
  const name = channel?.getAttribute("name") || null;

  return { url, name };
};
//   const STREAM_URL = import.meta.env.VITE_API_URL; note to self
const STREAM_URL = "https://api.sr.se/api/v2/channels/";

export const getSwedishRadioStream = async (channelId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${STREAM_URL}${channelId}`);

  if (!response.ok) {
    alert("Could not fetch radio stream");
  }
  return await xmlToURL(response);
};
