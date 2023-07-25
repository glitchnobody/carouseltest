import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const content = {
    page1: {
      title: "page 1",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
    page2: {
      title: "page 2",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
    page3: {
      title: "page 3",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
    page4: {
      title: "page 4",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
    page5: {
      title: "page 5",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
    page6: {
      title: "page 6",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
    page7: {
      title: "page 7",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
    page8: {
      title: "page 8",
      subtitle: "I'm a subtitle",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie odio a tincidunt dapibus. Aenean scelerisque ex feugiat accumsan tincidunt. Maecenas a ultrices libero, nec cursus mauris. Proin imperdiet ligula quis facilisis luctus. Suspendisse ultrices tellus diam, et condimentum nulla malesuada sit amet. Quisque a tellus et erat lobortis rhoncus. Duis dui dui, semper in vulputate vel, consectetur ac mauris. Quisque quis est pretium, faucibus est in, pretium diam. Nunc iaculis congue mauris nec mollis.   ",
    },
  };

  // carousel of pages

  const [pageContent, setPageContent] = useState(content);

  return (
    <main>
      {Object.keys(pageContent).map((page, index) => {
        return (
          <div key={index}>
            <h1>{pageContent[page].title}</h1>
            <h2>{pageContent[page].subtitle}</h2>
            <p>{pageContent[page].text}</p>
          </div>
        );
      })}
    </main>
  );
}
