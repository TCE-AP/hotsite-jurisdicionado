import React from 'react';
import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel';

import { VideoDTO } from '../../../../dtos/SistemaDTO';

interface VideoSectionProps {
  videos: VideoDTO[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos }) => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={videos.length}
    step={1}
    naturalSlideWidth={100}
    naturalSlideHeight={100}
    className="prose prose-lg mx-auto mb-4"
    infinite
  >
    <Slider className="h-56 md:h-96 shadow-xl">
      {videos.map(({ id, link, titulo }, i) => (
        <Slide key={id} index={i}>
          <iframe
            title={titulo}
            src={`https://www.youtube.com/embed/${link}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-56 md:h-96 rounded-lg -mt-9"
          />
        </Slide>
      ))}
    </Slider>
    {videos.length > 1 && (
      <div className="text-center mt-2 flex px-24">
        {videos.map(({ id }, i) => (
          <Dot
            key={id}
            slide={i}
            className="bg-gray-400 h-1 flex-1 outline-none focus:outline-none"
          />
        ))}
      </div>
    )}
  </CarouselProvider>
);

export default VideoSection;
