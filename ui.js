class RENDEREL {
    containerEl = document.querySelector('#users');
    blockEl = 'div';
    btnEl = 'button';
    blockClass = 'user-block';
    btnClass = 'user-btn';
    btnDeleteClass = 'delete-btn';
    btnEditClass = 'edit-btn';
    editBtnTxt = 'Edit user';
    deleteBtnText = 'Delete user'

    showUsers(name, id) {
        this.containerEl.insertAdjacentHTML('beforeend', `
            <${this.blockEl} class = "${this.blockClass}" id = "${id}">${name}
            <${this.btnEl} class = "${this.btnClass} ${this.btnEditClass}">${this.editBtnTxt}</${this.btnEl}>
            <${this.btnEl} class = "${this.btnClass} ${this.btnDeleteClass}">${this.deleteBtnText}</${this.btnEl}>
            </${this.blockEl}>`)
    }
}
