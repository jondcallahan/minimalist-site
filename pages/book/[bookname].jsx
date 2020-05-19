import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

export default function BookNote({ frontmatter, markdownBody, slug }) {
  if (!frontmatter) return <></>;

  return (
    <main>
      <Head>
        <title>
          {`${frontmatter.title} by ${frontmatter.author} | Jon Callahan`}
        </title>
      </Head>
      <Link href={`/books#${slug}`} scroll={false}>
        <a>⬅️ 📚 Back to book list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <img
          src={`/images/books/${frontmatter.image}`}
          alt={`Jacket image for ${frontmatter.title}`}
          height="350"
        />
        <p>By {frontmatter.author}</p>
        <hr />
        <section>
          <p>{frontmatter.review}</p>
          <ReactMarkdown source={markdownBody} />
        </section>
      </article>
      <style jsx>{`
        article {
          width: 55ch;
          max-width: 85%;
          margin-left: auto;
          margin-right: auto;
        }
        img {
          height: 350px;
          width: auto;
          max-width: 100%;
        }
        @media screen and (max-width: 360px) {
          img {
            height: auto;
          }
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { bookname } = ctx.params;

  const content = await import(`../../books/${bookname}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      slug: bookname,
    },
  };
}

export async function getStaticPaths() {
  const bookSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../books", true, /\.md$/));

  const paths = bookSlugs.map((slug) => `/book/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
