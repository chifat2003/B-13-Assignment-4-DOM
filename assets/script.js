let interviewCountDashboard = []
let rejectedCountDashboard = []

let totalCount = document.querySelector("#total-count")
let interviewCount = document.querySelector("#interview-count")
let rejectedCount = document.querySelector("#rejected-count")
let cardContainer = document.querySelector("#card-container")
let countNumber = document.querySelector("#count-number")
let allFilter = document.querySelector("#all-filter")
let interviewFilter = document.querySelector("#interview-filter")
let rejectedFilter = document.querySelector("#rejected-filter")




function calculateCount() {
    totalCount.innerText = cardContainer.children.length;
    countNumber.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewCountDashboard.length;
    rejectedCount.innerText = rejectedCountDashboard.length;

}
calculateCount()

function toggleBtn(id){
    allFilter.classList.remove('bg-blue-500', 'text-white')
    interviewFilter.classList.remove('bg-blue-500', 'text-white')
    rejectedFilter.classList.remove('bg-blue-500', 'text-white')

    allFilter.classList.add ('bg-gray-300', 'text-gray-700')
    interviewFilter.classList.add ('bg-gray-300', 'text-gray-700')
    rejectedFilter.classList.add ('bg-gray-300', 'text-gray-700')

    let selected = document.getElementById(id)
    selected.classList.remove ('bg-gray-300', 'text-gray-700')
    selected.classList.add ('bg-blue-500', 'text-white')


}