// small UI helpers: navigation toggle and year updater
document.addEventListener('DOMContentLoaded', function(){
  const toggleIdPairs = [
    ['navToggle','navLinks'],
    ['navToggle2','navLinks2'],
    ['navToggle3','navLinks3'],
    ['navToggle4','navLinks4']
  ];
  toggleIdPairs.forEach(pair=>{
    const t = document.getElementById(pair[0]);
    const links = document.getElementById(pair[1]);
    if(t && links){
      t.addEventListener('click', ()=> {
        links.style.display = (links.style.display === 'block') ? '' : 'block';
      });
    }
  });

  // set years
  const year = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });
});