import "./Dashboard.css";


function Dashboard({ user, onLogout }) {
  if (!user) return <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>No user data found. Please log in again.</div>;

  // Defensive: fallback for missing fields
  const name = user.name || 'User';
  const email = user.email || '—';
  const gender = user.gender ? user.gender[0].toUpperCase() + user.gender.slice(1) : '—';
  const country = user.country || '—';
  const bio = user.bio || '';

  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-card">
        <h2>Welcome, {name} 🎉</h2>
        <div className="info-grid">
          <div>
            <span className="label">Email:</span>
            <span className="value">{email}</span>
          </div>
          <div>
            <span className="label">Gender:</span>
            <span className="value">{gender}</span>
          </div>
          <div>
            <span className="label">Country:</span>
            <span className="value">{country}</span>
          </div>
          {bio && (
            <div className="bio-row">
              <span className="label">Bio:</span>
              <p className="bio">{bio}</p>
            </div>
          )}
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Log out
        </button>
      </div>
    </section>
  );
}

export default Dashboard;
