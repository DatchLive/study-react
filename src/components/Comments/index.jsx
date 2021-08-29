import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((data) => {
        return (
          <li key={data.id}>
            <Link href={`/comments/${data.id}`}>
              <a>{data.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
