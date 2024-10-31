import CreateWorkspace from "@/components/global/create-workspace";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

import CreateFolders from "@/components/global/create-folders";
import Folders from "@/components/global/folders";
import Videos from "@/components/global/videos";
import { QueryClient } from "@tanstack/react-query";
import { getAllUserVideos } from "@/actions/workspace";

type Props = {
  params: {
    workspaceId: string;
  };
};

const Workspace = async ({ params }: Props) => {
  const { workspaceId } = await params;

  // const query = new QueryClient();
  // await query.prefetchQuery({
  //   queryKey: ["user-videos"],
  //   queryFn: () => getAllUserVideos(workspaceId),
  // });

  return (
    <div>
      <Tabs defaultValue="videos" className="mt-6">
        <div className="flex w-full justify-between items-center">
          <TabsList className="bg-transparent gap-2 pl-0">
            <TabsTrigger
              className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              value="videos"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="archive"
              className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
            >
              Archive
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-x-3">
            <CreateWorkspace />
            <CreateFolders workspaceId={workspaceId} />
          </div>
        </div>
        <section className="py-9">
          <TabsContent value="videos">
            <Folders workspaceId={workspaceId} />
            <Videos
              workspaceId={workspaceId}
              folderId=""
              videosKey="user-videos"
            />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
};

export default Workspace;
