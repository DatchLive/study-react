import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponet } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <CommentsComponet />
    </div>
  );
};
export default Comments;
