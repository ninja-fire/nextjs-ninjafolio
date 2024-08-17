export function Video(width = "", height = "", src = "") {
    return (
      <video width={width} height={height} controls preload="none">
        <source src={src} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }