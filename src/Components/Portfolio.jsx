/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Muslimah-did5.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "RSVP App",
    description:
      "An RSVP app built using bubble. User could RSVP themselves, with the number of people they'd love to bring, along with a message.",
    url: "https://milestone-rsvp.bubbleapps.io/version-test?debug_mode=true",
  },
  {
    title: "Stack Overflow Wannabe App",
    description: "An app built with bubble mimicking the basis of how Stack Overflow works.",
    url: "https://questionapp-74394.bubbleapps.io/version-test?debug_mode=true"
  },
  {
    title: "Planner App",
    description: "A planner app built with React Framework",
    url: "https://planner-app-sigma.vercel.app/",
  },
  {
    title: "Stopwatch App",
    description: "A stopwatch web app built uisng React Framework",
    url: "https://vercel.com/muslimahhh/stopwatch-app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
