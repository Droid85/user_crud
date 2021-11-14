init();

function init() {
    const http = new HTTP();
    const ui = new RENDEREL();

    ui.containerEl.addEventListener('click', onClickShowBtn)

    http.get(ENVIRONMENT.USERS.getUsers)
    .then((response) => response.json())
    .then(rdata => {
        rdata.forEach(element => {
            ui.showUsers(element.name, element.id)
        });
        return rdata
    })
    .catch(error => console.log('USERS ERROR', error))

    function onClickShowBtn(e) {
        let userId = e.target.parentNode.id;
        if (e.target.classList.contains('delete-btn')) {
            http.delete(ENVIRONMENT.USERS.getUsers, userId)
            .then(response => console.log(response))
            .catch(error => console.log('DELETE ERROR', error))
        } else if (e.target.classList.contains('edit-btn')) {
            http.edit(ENVIRONMENT.USERS.getUsers, userId)
            .then(response => console.log(response))
            .catch(error => console.log('DELETE ERROR', error))
        }
    }
}
