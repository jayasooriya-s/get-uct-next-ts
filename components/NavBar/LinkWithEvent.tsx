import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
declare type Url = string | UrlObject;
interface Props {
  href: Url;
  title: String;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export default function LinkWithEvent(props: Props) {
  return (
    <Link href={props.href}>
      <a onClick={props.onClick}> {props.title}</a>
    </Link>
  );
}
