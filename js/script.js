if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('my-projects-link')) {
  document.getElementById('my-projects-link').addEventListener('click', () => {
    document.getElementById('my-projects-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('research-papers-link')) {
  document.getElementById('research-papers-link').addEventListener('click', () => {
    document.getElementById('research-papers-section').scrollIntoView({behavior: "smooth"})
  })
}