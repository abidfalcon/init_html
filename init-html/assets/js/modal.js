/**
 * Modal : gere l'affichage de la boite modale au clic sur un element de menu
 */
function openModal() {
    console.log('je doit ouvrir mon boite')
    // recuperer le contenu de template #form-template
    const formTemplate = document.getElementById('form-template')
    const templateContent = formTemplate.content.cloneNode(true)

    // raccrocher le contenu à l'element "body" du document HTML
    document.body.appendChild(templateContent)

}
function closeModal(){
    const annuler =document.getElementsByClassName('outer-modal')[0]
    document.body.removeChild(annuler)
}





