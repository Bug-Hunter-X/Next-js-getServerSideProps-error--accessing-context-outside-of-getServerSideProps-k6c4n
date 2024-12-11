```javascript
// pages/aboutSolution.js

export async function getServerSideProps(context) {
  // Fetch user data based on the request context
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default function About({ user }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>User ID: {user.id}</p>
    </div>
  );
}
```