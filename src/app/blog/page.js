import Hero from "components/Hero";
import Container from "components/container";
import Meta from "components/meta";

export default function blog(){
  return(
    <Container>
          <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog"
        subtitle="ブログ アウトプットしていく"
      />
    </Container>
  )
}