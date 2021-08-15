import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const User = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(user);

  return (
    <div>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};
