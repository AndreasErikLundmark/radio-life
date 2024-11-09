export async function radioStreamFetcher(id: number): Promise<Document | null> {
  try {
    const response = await fetch(`https://api.sr.se/api/v2/channels/${id}`);

    if (!response.ok) {
      throw new Error("näe det där gick inge vidare");
    }

    const xmlString = await response.text();
    const parser = new DOMParser();
    const xmlResult = parser.parseFromString(xmlString, "application/xml");

    const audio = xmlResult.getElementsByTagName("liveaudio")[0];
    const url = audio.getElementsByTagName("url")[0].textContent;
    console.log(xmlResult.getElementsByTagName("liveaudio")[0]);
    return url;
    // return xmlResult;
    console.log(xmlResult);
  } catch (error) {
    console.error("näe det där gick inte bra", error);
    return null;
  }
}
