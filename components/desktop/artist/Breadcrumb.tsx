import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function Breadcrumb(props: any) {
  const [currentPage, setCurrentPage] = React.useState("artist_name");
  const artist = props.data 

  return (
    <Breadcrumbs underline="active" onAction={(key : any) => setCurrentPage(key)}>
      <BreadcrumbItem key="artist" href="/desktop/artists">
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem key="artist_name" href="/desktop/artists" isCurrent={currentPage === "artist_name"}>
        {artist?.name}
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
