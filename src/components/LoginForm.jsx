export const LoginForm = ({credentials, handleSubmit, change}) => {


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={change}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={change}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
