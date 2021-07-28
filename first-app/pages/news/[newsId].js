import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();

  const query = router.query.newsId;
  return <h1>Detail Page</h1>;
}
export default DetailPage;
