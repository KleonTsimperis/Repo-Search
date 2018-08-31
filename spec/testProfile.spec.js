describe('github profile', function() {

  it('fetch profile', function(done) {
    const fetchProfile = () => {
      fetch('https://api.github.com/users/'+'KleonTsimperis')
      .then(res=>res.ok)
      .then(data=>data)
    }


    fetchProfile('KleonTsimperis').then(function(data){
      expect(data).to.eventually.have.property("repos_url");
      done();
    });
  });
});


// document.getElementById('user').value
