export default function Header() {
  return (
    <header className="bg-amber-100 p-4">
      <nav className="flex justify-between items-center">
        <h2>My Website</h2>

        <ul className="flex gap-3 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
