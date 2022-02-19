import React from "react";

import {
  TestimonialContainer,
  TestimonialH1,
  TestimonialWarper,
  TestimonialCard,
  TestimonialVideo,
  TestimonialH2,
  TestimonialP,
} from "./TestimonialELements";

function TestimonialScreen(props) {
  return (
    <>
      <TestimonialContainer>
        <TestimonialH1>Testimonials</TestimonialH1>
        <TestimonialWarper>
          <TestimonialCard>
            <TestimonialVideo src="https://www.youtube.com/embed/kwoZcWX2Q0A"></TestimonialVideo>
            <TestimonialH2>Mr. Chris</TestimonialH2>
            <TestimonialP>
              Mr. Chris from USA New Jersey in particular he started trading
              with us few months back before he joined he was always complaining
              of not trading right and bad with entries in the market but after
              joining the Academy he started making profits and improving in his
              analysis and now see him getting paid That’s on 🅿️
            </TestimonialP>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialVideo src="https://www.youtube.com/embed/iFytRizSsmU" />

            <TestimonialH2>Orlena</TestimonialH2>
            <TestimonialP>
              This is orlena in Canada from Nigeria she started trading with us
              six months ago she was always complaining of bad market and reds
              in a trade until she joined us Now she’s getting paid steady 🥂🅿️
            </TestimonialP>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialVideo src="https://www.youtube.com/embed/_M3KsUB8SY0" />

            <TestimonialH2>Uzondu</TestimonialH2>
            <TestimonialP>
              This is uzondu from nigeria a young millioniare that started
              trading with us last year
            </TestimonialP>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialVideo src="https://www.youtube.com/embed/wAH8CoKJG0o" />

            <TestimonialH2>Tanshi</TestimonialH2>
            <TestimonialP>
              This is our india student tanshi that started with us few months
            </TestimonialP>
          </TestimonialCard>
        </TestimonialWarper>
      </TestimonialContainer>
    </>
  );
}

export default TestimonialScreen;
