import Link from "next/link";

type User = {
    id: number;
    firstName: string;
};

type UsersResponse = {
    users: User[];
};

async function Navbar() {
    const res = await fetch("https://dummyjson.com/users");

    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }

    const data: UsersResponse = await res.json();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/about">About</Link>
                </li>

                <li>
                    <Link href="/contact">Contact</Link>
                </li>

                <li>
                    <Link href="/services">Services</Link>
                </li>
            </ul>

            <hr />

            <h2>Users</h2>

            {data.users.map((user) => (
                <p key={user.id}>{user.firstName}</p>
            ))}
        </nav>
    );
}

export default Navbar;