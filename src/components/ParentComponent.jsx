function ParentComponent() {
  return (
    <>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </>
  );
}
function UserComponent() {
  return <h2>Usercomponent</h2>;
}
function ProfileComponent() {
  return <h2>Profilecomponent</h2>;
}
function FeedComponent() {
  return <h2>Feedcomponent</h2>;
}
export default ParentComponent;
