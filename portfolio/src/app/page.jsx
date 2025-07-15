export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Hello, here is my photo!</h1>
      <img
        src="/placeholder-user.jpg"  // or your own image like /myphoto.jpg
        alt="My Photo"
        width={300}
        style={{ borderRadius: '12px', marginTop: '20px' }}
      />
    </div>
  );
}
