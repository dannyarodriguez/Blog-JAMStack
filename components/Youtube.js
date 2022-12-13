export const Youtube =({ videoId }) => {
    return (
        <iframe 
            src={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            height="300em"
            frameBorder="0"
            allow="accelerometer"
        ></iframe>
    )
}