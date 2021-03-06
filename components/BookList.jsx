import Link from "next/link";

export default function BookList({ books }) {
  if (books === "undefined") return null;

  return (
    <>
      <Link href="/">
        <a className="back-link">⬅️ 🏡 Back to home</a>
      </Link>
      <main>
        <h1>A collection of books I've read and brief thoughts</h1>
        {!books && <div>No books!</div>}
        <hr />
        {books &&
          books.map(({ slug, frontmatter }) => {
            return (
              <div key={slug} id={slug}>
                <Link href="/book/[bookname]" as={`/book/${slug}`}>
                  <a>
                    <img
                      src={`images/books/${frontmatter.image}`}
                      alt={`Jacket image for ${frontmatter.title}`}
                      loading="lazy"
                      height="350"
                    />
                  </a>
                </Link>
                <p>Rating: {frontmatter.rating} / 10</p>
                <Link href="/book/[bookname]" as={`/book/${slug}`}>
                  <a>{frontmatter.title}</a>
                </Link>
                <p>By {frontmatter.author}</p>
                {frontmatter.review && (
                  <details>
                    <summary>Review</summary>
                    <p>{frontmatter.review}</p>
                  </details>
                )}
                <hr />
              </div>
            );
          })}
      </main>
      <style jsx>{`
        main {
          width: 55ch;
          max-width: 90%;
          margin-left: auto;
          margin-right: auto;
        }
        a.back-link {
          margin: 8px;
        }
        img {
          display: flex;
          width: auto;
          max-width: 100%;
          height: 350px;
          margin: auto;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }
        @media screen and (max-width: 360px) {
          img {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
