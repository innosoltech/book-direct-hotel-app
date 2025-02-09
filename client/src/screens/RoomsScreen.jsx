import { useGetRoomsQuery } from "../slices/roomsApiSlice";

const RoomsScreen = () => {
  const { data: rooms, isLoading, error } = useGetRoomsQuery();
  console.log(rooms);

  return (
    <>
      <h1>RoomsScreen</h1>
    </>
  );
};

export default RoomsScreen;
