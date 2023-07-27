function RenderingEmp() {
  const employees = [
    {
      name: "John Doe",
      position: "Developer",
      img: "https://assets-global.website-files.com/6268ee4c723aa407295be451/62fe50556a27a21aa4f04f16_facetune-linkedin-img1.jpg",
      link: "linkedin.com",
    },
    {
      name: "Jane Doe",
      position: "Web designer and developer",
      img: "https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "linkedin.com",
    },
    {
      name: "Placeholder Doe",
      position: "Creator",
      img: "https://images.pexels.com/photos/7704090/pexels-photo-7704090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "linkedin.com",
    },
    {
      name: "John Placeholder",
      position: "Developer",
      img: "https://images.pexels.com/photos/15547481/pexels-photo-15547481/free-photo-of-black-and-white-photo-of-a-woman-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "linkedin.com",
    },
  ];

  const listItems = employees.map((x) => {
    return (
      <div className="bg-pink-400 py-12 text-white space-y-2 rounded-3xl border border-t-4 border-b-0 border-pink-600 mb-4">
        <img
          className="bg-blue-400 w-20 h-20 rounded-full mx-auto"
          src={x.img}
          alt=""
        />
        <p className="font-bold text-[1.3em]">{x.name}</p>
        <p>{x.position}</p>
        <a href={x.link}>LN</a>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

function aboutUs() {
  return (
    <div className="h-full p-8 space-y-8 w-full  rounded-t-[60px]  bg-pink-200    relative  ">
      <h1 className="text-[1.6em] py-4 font-bold w-[200px] sm:w-full mx-auto ">
        A little bit about us
      </h1>
      <p className="text-left  ">
        Vinicius, the lead web designer and developer of Cinza, has been working
        at Razorfrog Web Design since 2016, and has almost a decade of
        experience in the field. He decided to create Cinza in 2020, when he
        felt that he was ready to put together a portfolio of some of his
        favorite independent work, and start some new projects with the help of
        his newly assembled team. We are all proud members of the LGBTQ+
        community, and we hope to help make the internet a better place for
        everybody. We are not only proud of the technical aspect of our work,
        but also the people involved, and their individual missions.
      </p>

      <RenderingEmp />
    </div>
  );
}
export default aboutUs;
