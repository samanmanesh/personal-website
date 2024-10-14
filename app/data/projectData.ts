const HilarionData = {
  title: "Hilarion",
  date: "Julay 12, 2021",
  paragraphs: [
    "Hilarion is a project born out of my curiosity about how large-scale platforms like Instagram are built and the challenges they face during development. My goal was to create a small-scale version of Instagram to explore both familiar and new technologies required to handle complex interactions. The result is a full-stack web application, built using the <b>MERN stack</b> (MongoDB, Express, React, and Node.js) along with <b>Next.js</b> for server-side rendering and frontend routing.",
    "For the backend, I utilized <b>MongoDB</b> for efficient data management and structured storage, and <b>Node.js</b> to handle API requests and server-side operations. To enhance security, I implemented <b>SHA256 hashing</b> with salting, ensuring that user passwords and sensitive data remain protected. Additionally, robust authentication mechanisms were incorporated to manage user sessions, logins, and access rights securely.",
    "One of the more interesting challenges involved handling media uploads and optimizing performance for large files. I integrated <b>Cloudinary</b>, a powerful external CDN, to efficiently manage and deliver images and media assets. This allowed for smooth uploads, on-the-fly transformations, and fast retrieval, preventing any unnecessary load on the server. For the frontend, I used <b>Tailwind CSS</b> to maintain a clean and responsive UI that mirrored the sleek and minimalistic feel of Instagram.",
    "While Hilarion was a case study in building a small-scale social platform, there are aspects that could be further improved for handling a large number of users and high traffic. Technologies like <b>Redis</b> for caching, load balancers, and horizontal scaling would be essential to enhance performance and scalability as user demand increases. However, given that this project was more of an exploration, I didn't implement these advanced solutions but gained valuable insights into what would be needed for larger-scale production systems.",
    "Through this project, I deepened my understanding of user authentication, data routing, and media handling, making <b>Hilarion</b> a highly educational experience in full-stack development.",
  ],
  link: "https://hilarion-socialmedia-client.vercel.app/login",
};

const QAndAIData = {
  title: "Q&Ai",
  date: "October 8, 2024",
  paragraphs: [
    "QandAi is a seamless blend of AI and UI, a project I designed and developed using <b>Next.js</b> and <b>Tailwind CSS</b>. The goal was to create a highly intuitive interface while leveraging the power of AI in the background. To generate intelligent questions, possible answer choices, and the correct answers, I integrated the <b>Anthropic Claude</b> API. This allows the app to offer dynamic question generation, providing users with an engaging and educational experience powered by advanced AI capabilities.",
    "I’ve always believed that animations add a layer of interaction that brings a website to life—when done thoughtfully and without overwhelming the user. For QandAi, I combined <b>CSS</b> animations and <b>Framer Motion</b> to introduce smooth, subtle animations that guide users through the experience, keeping the interface dynamic yet refined. The result is an app that feels polished and responsive, with the right balance of functionality and visual delight.",
    "This project reflects my passion for blending clean, efficient code with thoughtful design, enhancing user engagement through the use of cutting-edge technologies like AI and carefully crafted interactions.",
  ],
  link: "",
};


const SamitoneData = {
  title: "Samitone",
  date: "May 2, 2021",
  paragraphs: [
    "Samitone is one of my most rewarding and challenging projects, born from my passion for music. It’s a browser-based audio sequencer that allows users to create music using a wide variety of instruments. Building this app was an exciting journey that came with unique technical challenges, especially since running complex audio logic in a browser environment can easily overwhelm it. There were moments when poor code logic or the use of nested loops caused the browser to crash, but overcoming these hurdles made the project even more fulfilling.",
    "To achieve high-quality sound generation, I leveraged <b>Tone.js</b>, a powerful audio library. By carefully adjusting frequencies and pitch, I created a range of musical notes for users to compose with. On the development side, I used <b>React</b> to manage the app's structure and functionality, while <b>Styled Components</b> handled the styling to ensure a clean and cohesive user interface.",
    "This project reflects my passion for blending clean, efficient code with thoughtful design, enhancing user engagement through the use of cutting-edge technologies like AI and carefully crafted interactions.",
  ],
  link: "https://samanmanesh.github.io/samitone/",
};

export const projectData = {
  hilarion: HilarionData,
  qandai: QAndAIData,
  samitone: SamitoneData
};