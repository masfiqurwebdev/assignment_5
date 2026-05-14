const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

let allIssues = [];

async function loadIssues() {
  showLoader(true);

  const res = await fetch(API);
  const data = await res.json();

  allIssues = data.data;
  displayIssues(allIssues);

  showLoader(false);
}

loadIssues();

function displayIssues(issues) {
  const container = document.getElementById("issuesContainer");
  container.innerHTML = "";

  document.getElementById("issueCount").innerText =
    `${issues.length} Issues`;

  issues.forEach(issue => {
    const div = document.createElement("div");

    div.className = `card ${issue.status}`;

    div.innerHTML = `
    
      <h3 class='text-2xl font-bold mb-3 '>${issue.title}</h3>
      <p class='text-[#64748B] mb-4 '>${issue.description}</p>

      <span class='bg-pink-400 text-white rounded-full text-center mb-2' >Status: ${issue.status}</span><br/>
      <hr class='mb-4'/>
      <span class='text-[#64748B]' >Priority: ${issue.priority}</span><br/>
      <span class='text-[#64748B]'>Author: ${issue.author}</span>
    `;

    div.onclick = () => openModal(issue.id);
    

    container.appendChild(div);
  });
}

function filterIssues(type) {
  setActiveTab(type);

  if (type === "all") {
    displayIssues(allIssues);
  } else {
    const filtered = allIssues.filter(
      issue => issue.status === type
    );
    displayIssues(filtered);
  }
  showLoader(false);

}

