import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import useFeedFilter from "./useFeedFilter";
import { feedFilters, timeFilters } from "./FeedFilterData";

const FeedFilter: React.FC = () => {
  const { feed, time, setFeed, setTime } = useFeedFilter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Post By</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <Tabs defaultValue="feeds" className="">
          <TabsList className="flex items-center justify-start gap-5 border-b-2 rounded-none border-solid border-[#c4c4c4]">
            <TabsTrigger value="feeds">Feeds</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
          </TabsList>
          <TabsContent value="feeds">
            <ul className="mt-4">
              {feedFilters.map((filter) => (
                <li
                  key={filter.id}
                  className={`text-lg font-semibold flex items-center gap-2 py-1 cursor-pointer`}
                  onClick={() => setFeed(filter.value)}
                >
                  <span
                    className={`h-5 w-5 block rounded-full border-2 border-solid border-[#19baaa] after:absolute relative after:left-2/4 after:top-2/4 after:translate-x-[-50%] after:translate-y-[-50%] after:h-2 after:w-2 after:rounded-full ${
                      feed === filter.value
                        ? "bg-[#19baaa] after:bg-white"
                        : "border-[#19baaa] after:bg-transparent"
                    }`}
                  />
                  {filter.label}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="time">
            <ul className="mt-4">
              {timeFilters.map((filter) => (
                <li
                  key={filter.id}
                  className="text-lg font-semibold flex items-center gap-2 py-1 cursor-pointer"
                  onClick={() => setTime(filter.value)}
                >
                  <span
                    className={`h-5 w-5 block rounded-full border-2 border-solid border-[#19baaa] after:absolute relative after:left-2/4 after:top-2/4 after:translate-x-[-50%] after:translate-y-[-50%] after:h-2 after:w-2 after:rounded-full ${
                      time === filter.value
                        ? "bg-[#19baaa] after:bg-white"
                        : "border-[#19baaa] after:bg-transparent"
                    }`}
                  />
                  {filter.label}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FeedFilter;
