import Link from 'next/link';

export default () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">OpenBounty</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/accounts"><a className="nav-link">Accounts</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/dapp"><a className="nav-link">Dapp</a></Link>
          </li>
		  <li className="nav-item">
			<Link href="/dashboard"><a className="nav-link">Dashboard</a></Link>
		  </li>
		  <li className="nav-item">
			<Link href="/login"><a className="nav-link">Login</a></Link>
		  </li>
        </ul>
      </div>
    </div>
  </nav>
);
