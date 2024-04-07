const ShowBoxes = ()=>{
    const certificateBoxes = document.querySelectorAll(".certificate-box");

    certificateBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {

            const detailsElement = box.querySelector("details");

            if (detailsElement.hasAttribute("open")) {
                detailsElement.removeAttribute("open");
         
            } else {
                detailsElement.setAttribute("open", "");
            }
        });
    });

}


export default ShowBoxes
