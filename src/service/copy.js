document.getElementById('trackTitle').addEventListener('click', function() {
    const trackTitle = this.textContent;

    
    navigator.clipboard.writeText(trackTitle)
        .then(() => {
           
            alert('Скопійовано : ' + trackTitle);
        })
        .catch(err => {
            
            console.error('Помилка прі копіюванні: ', err);
        });
});
