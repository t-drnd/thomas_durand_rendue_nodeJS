const username = document.getElementById("username");

const fetchuser = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "./index.html";
    return;
  }

  const response = await fetch("http://localhost:3000/getMyProfile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401 || response.status === 403) {
    window.location.href = "./index.html";
  }

  const data = await response.json();

  username.innerHTML = data.name;
};

fetchuser();
