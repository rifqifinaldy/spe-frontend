import { useEffect, useState } from "react";

const TimeStamp: React.FC = () => {
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    // Update the timestamp every second
    const intervalId = setInterval(() => {
      setTimestamp(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Format the date and time
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(timestamp);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(timestamp);
  return (
    <>
      {formattedDate} - {formattedTime}
    </>
  );
};

export default TimeStamp;
