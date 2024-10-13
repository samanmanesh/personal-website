import ArrowRightIcon from "../assets/ArrowRightIcon";

const HilarionData = {
  title: "Hilarion",
  date: "Julay 12, 2021",
  paragraphs: [
    "Hilarion is a project born out of my curiosity about how large-scale platforms like Instagram are built and the challenges they face during development. My goal was to create a small-scale version of Instagram to explore both familiar and new technologies required to handle complex interactions. The result is a full-stack web application, built using the <b>MERN stack</b> (MongoDB, Express, React, and Node.js) along with <b>Next.js</b> for server-side rendering and frontend routing.",
    "For the backend, I utilized <b>MongoDB</b> for efficient data management and structured storage, and <b>Node.js</b> to handle API requests and server-side operations. To enhance security, I implemented <b>SHA256 hashing</b> with salting, ensuring that user passwords and sensitive data remain protected. Additionally, robust authentication mechanisms were incorporated to manage user sessions, logins, and access rights securely.",
    "One of the more interesting challenges involved handling media uploads and optimizing performance for large files. I integrated <b>Cloudinary</b>, a powerful external CDN, to efficiently manage and deliver images and media assets. This allowed for smooth uploads, on-the-fly transformations, and fast retrieval, preventing any unnecessary load on the server. For the frontend, I used <b>Tailwind CSS</b> to maintain a clean and responsive UI that mirrored the sleek and minimalistic feel of Instagram.",
    "While Hilarion was a case study in building a small-scale social platform, there are aspects that could be further improved for handling a large number of users and high traffic. Technologies like <b>Redis</b> for caching, load balancers, and horizontal scaling would be essential to enhance performance and scalability as user demand increases. However, given that this project was more of an exploration, I didn't implement these advanced solutions but gained valuable insights into what would be needed for larger-scale production systems.",
    "Through this project, I deepened my understanding of user authentication, data routing, and media handling, making <b>Hilarion</b> a highly educational experience in full-stack development."
  ],
  link: "https://hilarion-socialmedia-client.vercel.app/login",
};

export default function Hilarion() {
  return (
    <section className=" mb-16 h-full  text-primary dark:text-white flex flex-col gap-11">
      <div className="flex flex-col gap-1">
        <h1 className="font-inter font-medium text-lg ">{HilarionData.title}</h1>
        <span className="text-secondary">{HilarionData.date}</span>
      </div>

      <section className="flex flex-col gap-7">
        {HilarionData.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base  font-normal"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}

        
      </section>
      <span className="flex items-center gap-2">
          You can view the live demo at{" "}
          <a
            className="flex items-center gap-2 text-foreground border-b border-secondary"
            href={HilarionData.link}
          >
            {HilarionData.title}{" "}
            <ArrowRightIcon className="dark:fill-white fill-secondary" />
          </a>
        </span>
      {/* video */}
      <div className="relative w-full  rounded-md border border-[#E8E8E8] dark:border-none aspect-video">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/videos/selected-project.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
