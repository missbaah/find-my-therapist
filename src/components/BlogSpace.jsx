import "../assets/BlogSpace.css";
import postImage from "../images/Image.png";
import authorpic from "../images/authorpic.png";
import BlogImage from "../images/BlogImage.png";

const BlogSpace = () => {
  const blogpost = [
    {
      id: 1,
      title: "The Importance of Mental Health Professionals",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Mauris ultricies habitant a placerat mattis[...]  ",
      tag: "Resources",
      author: "Michael Mensah",
      headline: "Therapist",
      image: { BlogImage },
    },
    {
      id: 2,
      title: "The Importance of Mental Health Professionals",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Mauris ultricies habitant a placerat mattis[...]  ",
      tag: "Stories",
      author: "Michael Mensah",
      headline: "Therapist",
      image: { BlogImage },
    },
    // {
    //   id: 1,
    //   title: "The Importance of Mental Health Professionals",
    //   snippet:
    //     "Lorem ipsum dolor sit amet consectetur. Mauris ultricies habitant a placerat mattis[...]  ",
    //   tag: "Resources",
    //   author: "Michael Mensah",
    // },
  ];

  const ListOfOtherPost = blogpost.map((post) => {
    return (
      <section className="featured-posts" key={post.id}>
        <img src={BlogImage} alt="post image" />
        <aside>
          <p className="post-tag">{post.tag}</p>
          <h3>{post.title}</h3>
          <p className="post-author">{post.author}</p>
        </aside>
      </section>
    );
  });

  return (
    <section className="blogspace">
      <section className="blog-stories">
        <section className="heading">
          <h2>Latest Blog</h2>
          <p>
            Stories from our patients and also some resources to help you in
            your mental health journey
          </p>
        </section>
        <section className="posts">
          <div className="new-post">
            <img src={postImage} alt="post img" />
            <p className="tag">{blogpost[0].tag}</p>
            <p className="title">{blogpost[0].title}</p>
            <p className="excerpt">
              {blogpost[0].snippet}
              <span>Read More</span>
            </p>
            <div className="author-box">
              <img src={authorpic} alt="author" />
              <div className="author-info">
                <p className="author">{blogpost[0].author}</p>
                <p className="headline">{blogpost[0].headline}</p>
              </div>
            </div>
          </div>
          <aside className="other-post">{ListOfOtherPost}</aside>
        </section>
      </section>
    </section>
  );
};

export default BlogSpace;
