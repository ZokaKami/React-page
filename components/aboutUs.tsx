function RenderingEmp() {
  const employees = [
    {
      name: "Jane Doe",
      position: "Developer",
      img: "https://assets-global.website-files.com/6268ee4c723aa407295be451/62fe50556a27a21aa4f04f16_facetune-linkedin-img1.jpg",
      link: "linkedin.com",
    },
    {
      name: "John Doe",
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
      <div className="bg-pink-400 py-12 md:py-4 text-white space-y-2 rounded-3xl border border-t-4  border-b-0 border-pink-600 mb-4 md:text-left md:flex md:px-6 md:space-x-6">
        <img
          className="bg-blue-400 w-20 h-20 rounded-full mx-auto md:mx-0"
          src={x.img}
          alt=""
        />
        <div>
          <p className="font-bold text-[1.2em]">{x.name}</p>
          <p className="text-[0.9em]">{x.position}</p>
        </div>

        <a
          className="font-bold text-[1.1em] md:text-[1.6em]  md:absolute md:right-16 md:pt-[6px]  "
          href={x.link}
        >
          in
        </a>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

function aboutUs() {
  return (
    <div className="h-full p-8 pt-20 space-y-8 w-full    rounded-t-[60px]  bg-pink-200    relative xl:grid xl:grid-cols-2 xl:pb-16">
      <div className="xl:px-12">
        <h1 className="text-[1.6em] py-4 font-bold  sm:w-full  text-left text-[#DD3C5F] xl:text-[1.8em] xl:py-12">
          A little bit about us
        </h1>
        <p className="text-left  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets.
        </p>
        <p className="text-left  ">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <RenderingEmp />
    </div>
  );
}
export default aboutUs;
