import { Tiles } from "./Tiles"
import doings from "../assets/doings.json"
export const About = () => {
  return (
    <section className="ms-2 mt-4">
      <h1 className="h2 fw-bold">About Me</h1>
      <div className="after rounded-3 mb-5"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quidem
        nesciunt laboriosam doloribus nobis tempora debitis eum, veritatis
        voluptatem dignissimos ad cumque sequi. Nam qui pariatur sequi beatae
        adipisci accusantium magnam, cupi
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi ipsum
        quia nihil nam dolorem incidunt quod ullam hic placeat molestias quis id
        asperiores maiores soluta delectus nulla odio dolores saepe at, iure ad
        dicta distinctio voluptas! Repellendus aliquid eos eligendi quisquam
        beatae dolore sed laborum doloribus minus totam tempore temporibus
        nesciunt sapiente id quaerat repellat consectetur dolorem, non
        accusantium architecto! Quaerat, ut assumen
      </p>
      <h3 className="fw-bold my-4">What I'm Doing</h3>
      <Tiles tileJson={doings} />
    </section>
  );
};
