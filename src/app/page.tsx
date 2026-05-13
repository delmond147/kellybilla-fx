import { ClientHome } from "./ClientHome";
import { YouTubeFeed } from "@/components/sections/YouTubeFeed";

export default function Home() {
  return (
    <ClientHome
      youtubeFeed={<YouTubeFeed />}
    />
  );
}
