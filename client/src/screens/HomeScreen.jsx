import { Row, Col } from "react-bootstrap";
// import rooms from "../data/roomData";
import { useGetRoomsQuery } from "../slices/roomsApiSlice";

const HomeScreen = () => {
  const { data, isLoading, error } = useGetRoomsQuery();
  console.log(data);

  return (
    <>
      {/* {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.message}</div>
      ) : (
        <>
          <h1>HomeScreen</h1>
          <Row>
            {rooms.map((room) => (
              <h1 key={room._id}>{room.roomName}</h1>
            ))}
          </Row>
        </>
      )} */}
    </>
  );
};

export default HomeScreen;
