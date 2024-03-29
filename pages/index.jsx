import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Callahan</title>
        <link rel="canonical" href="https://www.joncallahan.com" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <meta
          name="description"
          content="Hey I'm Jon Callahan, a Software Engineer at Intuit in Chicago. Learn more about my background, interests, and career."
        />
      </Head>
      <main>
        <article>
          <picture>
            <source type="image/avif" srcSet="images/headshot_bw.avif" />
            <source type="image/webp" srcSet="images/headshot_bw.webp" />
            <source type="image/jpeg" srcSet="images/headshot_bw.jpeg" />
            <img
              src="images/headshot_bw.jpeg"
              alt="Jon Callahan's Headshot"
              height="250"
              width="250"
            />
          </picture>
          <h1>Jon Callahan</h1>
          <p className="subheader">Software Engineer in Chicago</p>
          <svg role="presentation" className="icon" viewBox="0 0 24 24">
            <line x1="3" x2="21" y1="24" y2="0" strokeWidth="2" />
            <line x1="21" x2="3" y1="24" y2="0" strokeWidth="2" />
          </svg>
          <p className="bio">
            After an early interest in investing, I received degrees in Finance and
            Entrepreneurship from Indiana University's Kelley School of
            Business. While there I took a gap year and lived in the wilderness
            of Baja California with <a href="https://nols.edu">NOLS</a>. After
            graduating, I spent 7 years in the San Francisco Bay Area steeped in the tech industry, hiking, biking, and running the local trails, and tasting my way through the myriad wine regions of Northern California. I now work remotely from Chicago for{" "}
            <a href="https://www.intuit.com">Intuit</a> writing software to help
            small business owners{" "}
            <a href="https://www.quickbooks.intuit.com/invoicing/">get paid</a>.
            In my free time, you may find me training for triathlons, barbecuing, or trying a new restaurant.
          </p>

          <section className="links">
            <a href="https://www.linkedin.com/in/jondcallahan/">
              <svg className="icon" viewBox="0 0 24 24">
                <title>Jon's LinkedIn profile</title>
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
            </a>
            <a href="https://twitter.com/jondcallahan">
              <svg className="icon" viewBox="0 0 32 32">
                <title>Jon's Twitter profile</title>
                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
              </svg>
            </a>

            <a href="https://github.com/jondcallahan">
              <svg className="icon" viewBox="0 0 32 32">
                <title>Jon's Github profile</title>
                <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
              </svg>
            </a>

            <a href="mailto:j@joncallahan.com">
              <svg className="icon" viewBox="0 0 24 24">
                <title>Email Jon</title>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
            </a>
          </section>
          {/* <section className="links">
            <Link href="/books">
              <a>Notes on books I've read</a>
            </Link>
          </section> */}
        </article>
      </main>
      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
        }

        article {
          width: 50ch;
          max-width: 100%;
          margin: auto;
          text-align: center;
        }

        img {
          margin: 1em auto 0;
          border-radius: 4px;
          /* Placeholder while image loads */
          background-size: cover;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjYWNhY2FjIiBkPSJNMCAwaDQwMHY0MDBIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC44IC44KSBzY2FsZSgxLjU2MjUpIiBmaWxsLW9wYWNpdHk9Ii41Ij48ZWxsaXBzZSBjeD0iNjIiIGN5PSIyNTAiIHJ4PSI2OCIgcnk9IjY4Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI3MSAyMzdMMjUxLTE2IDEyNCAxMjV6Ii8+PGVsbGlwc2Ugcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTYwLjUgNTYuMyAyMC43KSBzY2FsZSgyNy40NzI1MyA1Mi4zOTMwNSkiLz48ZWxsaXBzZSBmaWxsPSIjMjgyODI4IiBjeD0iMTg5IiBjeT0iMjMyIiByeD0iNDYiIHJ5PSI0NiIvPjxlbGxpcHNlIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEyLjQwMTggLTEwLjg1MzcyIDM2Ljg5MDg4IC00Mi4xNTI2OCA5NS40IDE2NCkiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC01My44MDYwNiAtMjIyLjQwNzYyIDQwLjAzODQ5IC05LjY4NjMzIDIwNS4zIDE1LjQpIi8+PGVsbGlwc2UgZmlsbD0iI2ZjZmNmYyIgY3g9IjIwIiBjeT0iMTMxIiByeD0iNjEiIHJ5PSI2MSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMDkuNiA1My43bDQ5LjgtNC4zIDMgMzQuOS00OS44IDQuM3oiLz48L2c+PC9zdmc+);
          /* Hide alt text*/
          color: transparent;
        }

        h1 {
          font-weight: 300;
          margin: 1rem auto 0.5rem;
        }

        .subheader {
          margin: 0 auto 0.5em;
        }

        .bio {
          margin: 0.5em auto 2em;
          line-height: 1.5;
        }

        .links {
          display: flex;
          justify-content: space-around;
          margin: 1em auto;
          width: 33%;
          min-width: 250px;
        }

        .icon {
          width: 1em;
          stroke-width: 0;
          stroke: #2e2e2e;
          fill: #2e2e2e;
        }

        a,
        a:visited,
        a:hover {
          color: #2e2e2e;
        }

        @media only screen and (min-width: 900px) {
          main {
            box-shadow: inset 0 0 0 40px #fff;
            padding: 40px;
            min-height: calc(100vh - 80px);
          }
        }

        @media only screen and (max-width: 550px) {
          .bio {
            margin-left: 1rem;
            margin-right: 1rem;
          }
          img {
            height: 150px;
            width: 150px;
          }
          main {
            position: initial;
            box-shadow: unset;
          }
        }
      `}</style>
    </>
  );
}
