interface User {
  id: number;
  first_name: string;
  email: string;
  gender: string;
}

async function getUsers(url: string): Promise<User[]> {
  const res = await fetch(url);
  return res.json();
}

async function createUser(url: string, data: Omit<User, "id">): Promise<User> {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

async function deleteUser(url: string) {
  const res = await fetch(url, { method: "DELETE" });
  return res.json();
}

(async () => {
  // GET Users
  const users = await getUsers("http://localhost:3000/users");
  
  const ul = document.getElementById("user-list");

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.first_name} - ${user.email}`;

    ul?.appendChild(li);
  });

  // Create User
  // const user = await createUser("http://localhost:3000/users", {
  //   first_name: "Alex",
  //   email: "alex@domain.com",
  //   gender: "Male"
  // });

  // console.log(user);

  // DELETE User
  // const user = await deleteUser("http://localhost:3000/users/4"); 
  // console.log(user);
})();
