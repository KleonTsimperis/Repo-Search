async function fetchProfile(user) {
  let profile = await fetch(`https://api.github.com/users/${user}`);
  let { bio, repos_url } = await profile.json();

  return { bio, repos_url};
};

async function fetchRepos(repo){
  const repos = await fetch(repo)
    .then((data) => data.json());

  return repos.map(item => (
    item.name,
    item.forks_count,
    item.stargazers_count
  ));
};

async function testProfile() {
  const profile = await fetchProfile(document.getElementById('user').value);
  const repoList = await fetchRepos(profile.repos_url);

};

testProfile();
