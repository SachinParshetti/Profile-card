import ProfileCard from './ProfileCard'
  
function MyProfileCard() {
  return (
    <div className='d-flex justify-content-center align-items-center border border-4 border-primary rounded rounded-3 ' style={{ height: '100vh',backgroundColor:"rgba(0,0,0,0.9)"}}>
    <ProfileCard
      avatarUrl="./images/ProfilePic.jpeg"
      miniAvatarUrl="./images/ProfilePic.jpeg"
      name="Sachin Parshetti"
      handle="sachinparshetti"
      status="Online"
      title="Frontend Developer"
      contactText="Contact Me"
      showUserInfo={true}
      onContactClick={() => window.open("https://www.linkedin.com/in/sachin-parashetti-99b255259", "_blank")}
    />
    </div>
  );
}

export default MyProfileCard;