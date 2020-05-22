import BookList from "../components/BookList";
import matter from "gray-matter";
import Head from "next/head";

export default function Books({ books }) {
  return (
    <>
      <Head>
        <title>Book Notes | Jon Callahan</title>
      </Head>
      <BookList books={books} />
    </>
  );
}

export async function getStaticProps() {
  const books = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../books", true, /\.md$/));

  // Sort books by rating descending
  books.sort((a, b) => {
    if (a.frontmatter.rating < b.frontmatter.rating) {
      return -1;
    }
    if (a.frontmatter.rating > b.frontmatter.rating) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return {
    props: {
      books,
    },
  };
}
