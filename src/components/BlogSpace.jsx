import "../assets/BlogSpace.css";
import postImage from "../images/Image.png";

const BlogSpace = () => {
  const blogpost = [
    {
      id: 1,
      title: "The Importance of Mental Health Professionals",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Mauris ultricies habitant a placerat mattis[...]  ",
      tag: "Resources",
      author: "Michael Mensah",
    },
    {
      id: 2,
      title: "The Importance of Mental Health Professionals",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Mauris ultricies habitant a placerat mattis[...]  ",
      tag: "Story",
      author: "Michael Mensah",
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
      <section key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.tag}</p>
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
            <p>{blogpost[0].tag}</p>
            <p>{blogpost[0].title}</p>
            <p>
              {blogpost[0].snippet}
              <a>Read more</a>
            </p>
          </div>
          <aside className="other-post">{ListOfOtherPost}</aside>
        </section>
      </section>
    </section>
  );
};

export default BlogSpace;
