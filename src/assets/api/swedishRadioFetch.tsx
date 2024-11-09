// import {
//   Query,
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";
// import { getSwedishRadioStream } from "./api";
// import { useState } from "react";

// export async function radioStreamFetcher(
//   channelId: number
// ): Promise<string | null> {
//   const { isPending, error, data } = useQuery({
//     queryKey: ["swedishRadioStream", channelId],
//     queryFn: async () => getSwedishRadioStream(channelId),
//   });
//   if (isPending) return "Loading...";
//   if (error) return "An error has occurred: " + error.message;

//   const result = data;
//   console.log("the fetched data :", result);
//   return result;
// }
