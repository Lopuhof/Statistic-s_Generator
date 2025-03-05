let month = document.getElementById('month');
let monthButton = document.getElementById('month_button');
let monthDays = document.querySelectorAll('.month_number');
let row = document.querySelectorAll('tr');

monthButton.addEventListener('click', function() {
    let monthLower = month.value.toLowerCase();
    if ((monthLower === 'январь') || (monthLower === 'март') || (monthLower === 'май') || (monthLower === 'июль') || (monthLower === 'август') || (monthLower === 'октябрь') || (monthLower === 'декабрь')) {
        for (let i = 0; i < 31; i = i + 1) {
            monthDays[i].textContent = `${i + 1}`;
        };
    } else if (monthLower === 'февраль') {
        for (let i = 0; i < 29; i = i + 1) {
            monthDays[i].textContent = `${i + 1}`;
        };
    } else {
        for (let i = 0; i < 30; i = i + 1) {
            monthDays[i].textContent = `${i + 1}`;
        };
    };
});

function notWork(days) {
    for (let i = 0; i < days.length; i = i + 1) {
        days[i].addEventListener('click', function() {
            days[i].style.color = 'red';
        });
    };
};

notWork(monthDays);

let allReferences = document.querySelectorAll('.summ_all_reference');
let minAllReferences = document.querySelector('.min_references');
let maxAllReferences = document.querySelector('.max_references');
let referenceButton = document.querySelector('.generation_references');
let referencesAndConsultationsForUsersOfLibrary = document.querySelectorAll('.references_for_users');
let referenceForChildren = document.querySelectorAll('.references_for_childrens');
let bigChildren = document.querySelectorAll('.big_children');
let allConsultations = document.querySelectorAll('.all_consultations');
let references = document.querySelectorAll('.all_references');
let orien = document.querySelectorAll('.orientation');
let faculty = document.querySelectorAll('.faculty');
let helpTech = document.querySelectorAll('.help-tech');
let biblio = document.querySelectorAll('.bibliography');
let themes = document.querySelectorAll('.themes');
let addresses = document.querySelectorAll('.address');
let clarification = document.querySelectorAll('.clarification');
let facts = document.querySelectorAll('.facts');
let local = document.querySelectorAll('.local');
let health = document.querySelectorAll('.health');
let ecology = document.querySelectorAll('.ecology');

let summOfAll = document.querySelectorAll('.summ-of-all');
let summOfUsers = document.querySelectorAll('.summ-of-all-for-users');
let summOfChildrens = document.querySelectorAll('.summ-of-children');
let summOfConsultations = document.querySelectorAll('.summ-of-consultations');
let summOfBibiliography = document.querySelectorAll('.summ-of-bibliography');
let summOfOrientation = document.querySelectorAll('.summ-of-orientations');
let summOfHelpTech = document.querySelectorAll('.summ-of-help-tech');
let summOfFaculty = document.querySelectorAll('.summ-of-faculty');
let summOfReferences = document.querySelectorAll('.summ-of-references');
let summOfThemes = document.querySelectorAll('.summ-of-themes');
let summOfAdress = document.querySelectorAll('.summ-of-address');
let summOfFacts = document.querySelectorAll('.summ-of-facts');
let summOfClarifications = document.querySelectorAll('.summ-of-clarifications');
let summOfLocal = document.querySelectorAll('.summ-of-local');
let summOfEcology = document.querySelectorAll('.summ-of-ecology');
let summOfHealth = document.querySelectorAll('.summ-of-health');

function generateAllReferences(
    summ, 
    min, 
    max, 
    others,
    forChildren,
    forBigChildren,
    consultations,
    summOfReferences,
    orientationsConsult,
    facultations,
    help,
    bibliography,
    theme,
    address,
    clare,
    factography,
    locality,
    healther,
    ecologiest,
    allSumm,
    sumUs,
    referencesForSmallChildren
    ) {

    referenceButton.addEventListener('click', function() {
        min = +min.value;
        max = +max.value;
        let summOfEverything = 0;
        let sumOfAllUsers = 0;
        let smallChildren = 0;
        for (let i = 0; i < summ.length; i = i + 1) {
            orientationsConsult[i].textContent = Math.floor((Math.random() * ((40 - 20) + 20) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            help[i].textContent = Math.floor((Math.random() * ((10 - 5) + 5) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            bibliography[i].textContent = Math.floor((Math.random() * ((10 - 5) + 5) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            facultations[i].textContent = '0';
            consultations[i].textContent = (+orientationsConsult[i].textContent) + (+help[i].textContent) + (+bibliography[i].textContent) + (+facultations[i].textContent);

            theme[i].textContent = Math.floor((Math.random() * ((40 - 35) + 35) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            address[i].textContent = Math.floor((Math.random() * ((40 - 35) + 35) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            clare[i].textContent = Math.floor((Math.random() * ((30 - 20) + 20) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            factography[i].textContent = Math.floor((Math.random() * ((10 - 5) + 5) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            summOfReferences[i].textContent = (+theme[i].textContent) + (+address[i].textContent) + (+clare[i].textContent) + (+factography[i].textContent);

            summ[i].textContent = (+consultations[i].textContent) + (+summOfReferences[i].textContent);

            others[i].textContent = summ[i].textContent;
            forChildren[i].textContent = Math.floor(((Math.random() * ((65 - 45) + 45) / 100)) * others[i].textContent);
            forBigChildren[i].textContent = Math.floor(((Math.random() * ((30 - 25) + 25) / 100)) * others[i].textContent);

            locality[i].textContent = Math.floor(Math.random() * ((1 + 1) - 0) + 0);
            ecologiest[i].textContent = Math.floor(Math.random() * ((1 + 1) - 0) + 0);
            healther[i].textContent = Math.floor(Math.random() * ((1 + 1) - 0) + 0);

            //Суммы всего
            summOfEverything = (+summOfEverything) + (+summ[i].textContent);
            allSumm[0].textContent = +summOfEverything;

            sumOfAllUsers = (+sumOfAllUsers) + (+referencesAndConsultationsForUsersOfLibrary[i].textContent);
            sumUs[0].textContent = +sumOfAllUsers;

            smallChildren = (+smallChildren) + (+forChildren[i].textContent);
            referencesForSmallChildren[0].textContent = smallChildren;
        };
    });
};

generateAllReferences(
    allReferences, 
    minAllReferences, 
    maxAllReferences, 
    referencesAndConsultationsForUsersOfLibrary, 
    referenceForChildren, 
    bigChildren, 
    allConsultations, 
    references, 
    orien, 
    faculty, 
    helpTech, 
    biblio, 
    themes, 
    addresses, 
    clarification, 
    facts, 
    local, 
    health, 
    ecology,
    summOfAll,
    summOfUsers,
    summOfChildrens
);

console.log(allReferences);
