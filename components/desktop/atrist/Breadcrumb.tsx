import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function Breadcrumb() {
  const [currentPage, setCurrentPage] = React.useState("artist_name");

  return (
    <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(key)}>
      <BreadcrumbItem key="artist" href="/artists">
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem key="artist_name" href="/artist" isCurrent={currentPage === "artist_name"}>
        Artist Name
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
