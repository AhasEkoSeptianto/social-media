"use client";
import NavigationMenuMobile from "@/components/shared/NavigationMenuMobile";
import { nextFetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { useParams } from "next/navigation";
import ConversationMessage from "@/components/shared/ConversationMessage";
import { Spinner } from "@/components/ui/spinner";

export default function MessageMobile() {
  const params = useParams();

  const { data, isLoading } = useSWR(
    `/api/users/id?id=${params?.chat_id}`,
    nextFetcher,
  );
  return (
    <main>
      <div className="fixed bottom-0 left-0 z-30 lg:hidden">
        <NavigationMenuMobile />
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <ConversationMessage
          with_back_button
          avatarUrl={data?.data?.avatarUrl}
          online_status="offline"
          username={data?.data?.username ?? data?.data?.name}
        />
      )}
    </main>
  );
}
