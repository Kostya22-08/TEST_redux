const posts = [
  {
    code: "HelloWorld",
    caption: "Hello world",
    text: `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
  `,
    date: "1568620630",
    id: "1",
    display_src: `https://picsum.photos/400/400/?image=${Math.floor(
      Math.random() * 85
    )}`,
    alt: "Image"
  }
];

export default posts;
