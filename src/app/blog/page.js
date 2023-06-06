import Hero from "components/Hero";
import Container from "components/container";
import Meta from "components/meta";
import {client} from "/lib/client"

// SSG
export const getStaticProps =async()=>{
  const data =await client.get({endpoint:"nextblog0513"});
  return{
    props:{
      blog:data,
    },
  }
}

export default function blog({blog}){
  return(
    <Container>
          <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog"
        subtitle="ブログ アウトプットしていく"
      />
      <div>
        {blog.map((blog)=>(
        <li key={blog.id}>
        <a href="">{blog.title}</a>
        </li>
        ))  
      </div>

    </Container>
  
  )
}