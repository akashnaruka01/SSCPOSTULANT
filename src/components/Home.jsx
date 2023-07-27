import React from "react";
import vg from "../assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>sscpostulant</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            voluptate? Quaerat quam veniam odit mollitia ex laudantium tenetur
            doloremque a, ea optio excepturi? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Hic praesentium, explicabo placeat
            rerum tempora fugiat nisi est dignissimos animi. Placeat molestias
            beatae quam maiores perspiciatis illum temporibus praesentium
            eveniet ipsa? Commodi libero iusto ducimus ea quia incidunt repellat
            obcaecati. Rem omnis, quaerat, optio molestias enim animi ratione
            fugiat eius harum voluptates unde, eveniet possimus adipisci quia
            voluptas esse cum debitis illo in ipsum officiis excepturi. Delectus
            quo dolorum libero placeat nobis vel deserunt velit voluptate,
            perspiciatis fugit vitae perferendis voluptas laborum aut ipsam non
            error. Fugiat atque, illo delectus error quo eveniet quas repellat,
            magni soluta, quam facere voluptas sit voluptatem .
          </p>
        </div>
      </div>

      <div className="home4" id="doubts">
        <div>
          <h1>Doubts</h1>

          <article>
            <div style={{ animationDelay: "0.1s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.4s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
