import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
  Button,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

import Image from "next/image";
import { Card, Skeleton } from "@nextui-org/react";


export default function App() {
  const [selectedColor, setSelectedColor] = React.useState("default");
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(
        cursor || "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks",
        { signal }
      );
      let json = await res.json();

      if (!cursor) {
        setIsLoading(false);
      }

      return {
        items: json.results,
        cursor: json.next,
        items: [...state.items, []],
      };
    },
    
  });

  const hasMore = page < 2;

  return (
    <Table
      lined
      headerLined
      shadow={false}
      isBordered
      useAsyncList
      removeWrapper
      color="default"
      selectionMode="single"
      css={{
        height: "auto",
        minWidth: "full",
        variant:"bordered"
      }}
      defaultSelectedKeys={["selectedColor"]}
      isHeaderSticky
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore && !isLoading ? (
          <div className="flex w-full justify-center">
            <Button
              isDisabled={list.isLoading}
              variant="flat"
              onPress={list.loadMore}
            >
              {list.isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
      classNames={
        {
          // base: "max-h-[520px]",
          // table: "min-h-[420px]",
        }
      }
    >
      <TableHeader shadow={false}>
        <TableColumn key="number">#</TableColumn>
        <TableColumn key="music_image">
        <Image
              src="/images/lazy_music_lg.jpg"
              width={58}
              height={58}
              alt="Picture of the author"
              className="aspect-square right-0 rounded-md"
            />
        </TableColumn>
        <TableColumn key="play_icon"></TableColumn>
        <TableColumn key="name">TITTLE</TableColumn>
        <TableColumn key="artist_name">ARTIST</TableColumn>
        <TableColumn key="alblum_name">ALBUM</TableColumn>
        <TableColumn key="duration">Duration</TableColumn>
        <TableColumn key="more_option">More</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
