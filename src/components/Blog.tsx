import Box from "./common/Box";
import Button from "./common/Button";
import Image from "./common/Image";

const Blog = ({
  img,
  title,
  desc,
  link,
}: {
  img: any;
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <Box cssClasses={["px-xxl-3", "px-2"]}>
      <Box
        cssClasses={[
          "p-xxl-4",
          "p-3",
          "border-gradient",
          "blog",
          "bg-2",
          "border-r-20",
        ]}
      >
        <Image src={img} cssClasses={["border-r-10", "w-100"]} />
        <p className="font-size-md-1 fw-bold mt-4">{title}</p>
        <p className="font-size-sm-1 opacity-color">{desc}</p>
        <Button
          text="Read More"
          cssClasses={["mt-4", "font-size-sm-2"]}
          outline
        />
      </Box>
    </Box>
  );
};

export default Blog;
