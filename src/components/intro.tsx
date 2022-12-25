/* eslint-disable no-use-before-define */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-tsparticles";
import avatar from "../assets/images/avatar.png";
import getProfileData from "../data/data";
import Image from "react-bootstrap/Image";

// import Testimonial from "./Testimonial";
import colorStore from "../utils/color-constants";
import { loadFull } from "tsparticles";

interface IIntroProps {
  isDarkThemeEnabled: boolean;
}

const Intro = (props: IIntroProps) => {
  const { isDarkThemeEnabled } = props;
  const profileData = getProfileData();
  const themedColors = colorStore.getThemedColors(isDarkThemeEnabled);

  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Container fluid>
      <Row>
        <Particles
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            particles: {
              color: {
                value: themedColors.particles,
              },
              // lineLinked: {
              //   enable: true,
              //   color: {
              //     value: themedColors.particles,
              //   },
              // },
              links: {
                color: {
                  value: themedColors.particles,
                },
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              // collisions: {
              //   enable: true,
              // },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              opacity: {
                value: 0.7,
              },
              number: {
                value: 70,
              },
              size: {
                value: 3,
              },
            },
          }}
          className="position-absolute w-100 h-100 d-none d-lg-block"
        />
        <Col>
          <Container className="height-100vh d-flex align-items-center intro pt-4 pb-4 position-relative">
            <Row className="align-items-center">
              <Col lg={1}></Col>
              <Col lg={3}>
                <Image
                  src={avatar}
                  alt="avatar"
                  className="shadow-lg roundedCircle w-100"
                  thumbnail
                />
              </Col>
              <Col lg={1}></Col>
              <Col lg={6}>
                <div className="pt-5 pb-5">
                  <h1 className="pb-2">Hello! 👋🏼</h1>
                  <h1 className="pb-2">
                    I&apos;m{" "}
                    <span className="text-bold">{profileData.name}</span>
                    {/* <br />
                    {profileData.intro} */}
                  </h1>
                  <h2>{profileData.intro}</h2>
                  <p className="intro-email">
                    Get in touch
                    {" 📧 "}
                    <a
                      target="_blank"
                      href={`mailto:${profileData.email}`}
                      rel="noreferrer"
                    >
                      {profileData.email}
                    </a>
                  </p>
                  <button className="btn-custom btn-custom-primary resume-btn">
                    <a
                      href={profileData.resume}
                      rel="noreferrer"
                      target="_blank"
                    >
                      RESUME
                    </a>
                  </button>
                </div>
              </Col>
              {/* <Col lg={3}><Testimonial /></Col> */}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
