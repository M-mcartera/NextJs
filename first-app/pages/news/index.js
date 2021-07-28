import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/some-text">el 1</Link>
        </li>
        <li>el 2</li>
        <li>el 3</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
