import { Box } from "reflexbox";
import { NextSeo } from "next-seo";
import { Fragment } from "react";
import fetcher from "@/utils/fetcher";

function PageMovieGenreSlug({ movie }) {
  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: movie.description,
    openGraph: {
      title: `Next Movies | ${movie.title}`,
      description: movie.title,
    },
  };

  return (
    <Fragment>
      <NextSeo {...SEO} />
      <Box variant="container">
        <Box as="h2" my={40}>
          {movie.title}
        </Box>
        <Box maxWidth={600}>
          <p dangerouslySetInnerHTML={{ __html: movie.description }}></p>
        </Box>
      </Box>
    </Fragment>
  );
}

export const getServerSideProps = async (context) => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  const { slug } = context.query;
  const movies = await fetcher(`${NEXT_PUBLIC_API_URL}/movies?slug=${slug}`);

  return {
    props: {
      movie: movies[0],
    },
  };
};

export default PageMovieGenreSlug;
